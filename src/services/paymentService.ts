interface PaymentRequest {
  customer: string;
  server_id: number;
  products: Record<string, number>;
  email: string; // Добавили обязательный email
}

interface PaymentResponse {
  success: boolean;
  payment_url?: string;
  error?: string;
}

/**
 * Отправляет запрос на ваш бэкенд для создания платежа EasyDonate.
 * В реальном приложении этот запрос будет идти на ваш собственный сервер,
 * который затем взаимодействует с EasyDonate API.
 */
export const createPayment = async (paymentData: PaymentRequest): Promise<PaymentResponse> => {
  try {
    // Отправляем запрос на ваш бэкенд-сервер
    const response = await fetch('http://146.59.47.21:3001/api/create-easydonate-payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paymentData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
    }

    const data: PaymentResponse = await response.json();
    return data;
  } catch (error: any) {
    console.error('Ошибка при запросе к бэкенду:', error);
    return {
      success: false,
      error: `Не удалось связаться с бэкендом: ${error.message || 'Неизвестная ошибка'}. Убедитесь, что бэкенд запущен.`
    };
  }
};
