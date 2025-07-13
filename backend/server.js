const express = require('express');
const cors = require('cors');
require('dotenv').config(); // Для загрузки переменных окружения из .env

const app = express();
const PORT = process.env.PORT || 3001; // Порт для бэкенда

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'http://146.59.47.21:5173', 'http://mylo.top', 'https://mylo.top'],
  methods: ['POST'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json()); // Для парсинга JSON-тел запросов

// Эндпоинт для создания платежа EasyDonate
app.post('/api/create-easydonate-payment', async (req, res) => {
  const { customer, server_id, products } = req.body;
  const email = "mylozh414@gmail.com"; // Всегда используем ваш email
  const shopKey = process.env.EASYDONATE_SHOP_KEY; // Ваш Shop-Key из .env

  if (!shopKey) {
    console.error('EASYDONATE_SHOP_KEY не установлен в .env');
    return res.status(500).json({ success: false, error: 'Shop-Key не настроен на сервере.' });
  }

  if (!customer || !server_id || !products) {
    return res.status(400).json({ success: false, error: 'Отсутствуют обязательные параметры: customer, server_id, products.' });
  }

  // Временная заглушка - технические работы
  return res.status(503).json({ 
    success: false, 
    error: 'Система платежей временно недоступна. Технические работы до 24 июня. Приносим извинения за неудобства!' 
  });

  // Закомментированный рабочий код (раскомментировать после 24 июня)
  /*
  const params = new URLSearchParams({
    customer: customer,
    server_id: server_id.toString(),
    products: JSON.stringify(products),
    email: email
  });

  try {
    const response = await fetch(`https://easydonate.ru/api/v3/shop/payment/create?${params.toString()}`, {
      method: 'GET', // EasyDonate API v3 payment/create использует GET
      headers: {
        'Shop-Key': shopKey,
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    if (data.success && data.response && data.response.url) {
      res.json({ success: true, payment_url: data.response.url });
    } else {
      console.error('Ошибка от EasyDonate API:', data);
      res.status(data.status || 500).json({ success: false, error: data.error || 'Ошибка при создании платежа через EasyDonate API.' });
    }
  } catch (error) {
    console.error('Ошибка при запросе к EasyDonate API:', error);
    res.status(500).json({ success: false, error: 'Внутренняя ошибка сервера при создании платежа.' });
  }
  */
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Бэкенд-сервер запущен на http://localhost:${PORT}`);
  console.log('Убедитесь, что ваш фронтенд настроен на отправку запросов на этот адрес.');
});
