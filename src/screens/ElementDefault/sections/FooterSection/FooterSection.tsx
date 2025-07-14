import React from "react";
import { Link } from "react-router-dom";

// Define links data for reusability
const linkSections = [
  {
    title: "Ссылки",
    links: [
      { text: "Договор оферты", href: "/offer-agreement" },
      { text: "Политика конфиденциальности", href: "/privacy-policy" },
    ],
  },
  {
    title: "Полезное",
    links: [
      { text: "Карта", href: "/map" },
      { text: "Наш Discord", href: "https://discord.com/invite/Z8GJGH59TU", external: true },
      { text: "Вики", href: "/wiki" },
    ],
  },
];

// Define social media icons data
const socialIcons = [
  {
    name: "Discord",
    src: "https://c.animaapp.com/PyecxKQm/img/discord-svg.svg",
    href: "#",
  },
  {
    name: "TikTok",
    src: "https://c.animaapp.com/PyecxKQm/img/tiktok-svg.svg",
    href: "#",
  },
  {
    name: "Twitter",
    src: "https://c.animaapp.com/PyecxKQm/img/twitter-svg.svg",
    href: "#",
  },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="w-full py-16 bg-transparent relative">
      {/* Background image positioned with lower z-index */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img 
          src="https://c.animaapp.com/PyecxKQm/img/image_1.png" 
          alt="Background pattern" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content with higher z-index */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between relative z-10">
        {/* Login Section */}
        <div className="mb-10 md:mb-0">
          <h2 className="text-3xl font-bold [font-family:'Poppins',Helvetica] mb-4">
            <span className="text-white">Войти на&nbsp;&nbsp;</span>
            <span className="text-[#e20e41]">Сервер</span>
          </h2>

          <p className="text-xs font-extralight text-white [font-family:'IBM_Plex_Sans',Helvetica] mb-4">
            Введите ник чтобы купить проходку на сервер.
          </p>

          <div className="flex">
            <div className="relative flex-1">
              <div className="relative flex items-center">
                <div className="absolute left-5 top-1/2 transform -translate-y-1/2">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <input
                  id="footerNicknameInput"
                  className="pl-12 h-[51px] bg-[#1d1f2e] text-[#a6acd1] text-xs rounded-[33px_0px_0px_33px] border border-[#2a2c3c] w-full [font-family:'Poppins',Helvetica] outline-none"
                  placeholder="Ваш никнейм..."
                />
              </div>
            </div>
            <button 
              className="h-[51px] w-[101px] bg-[#e20e41] hover:bg-[#c90d3a] text-white font-semibold text-[9.9px] rounded-[0px_22px_22px_0px] [font-family:'Poppins',Helvetica] transition-colors"
              onClick={() => {
                const nicknameInput = document.getElementById('footerNicknameInput') as HTMLInputElement;
                const nickname = nicknameInput?.value.trim();
                
                if (!nickname) {
                  alert('Пожалуйста, введите ваш никнейм!');
                  return;
                }
                
                // EasyDonate payment parameters
                const serverId = 124113; // ID сервера
                const productId = 995137; // ID товара (проходка)
                
                // Создаем объект продуктов в формате {"995137": 1}
                const productsObj = { [productId]: 1 };
                const encodedProducts = encodeURIComponent(JSON.stringify(productsObj));
                
                // Build the payment URL with the correct API format
                const paymentUrl = `https://easydonate.ru/api/v3/shop/payment/create?customer=${encodeURIComponent(nickname)}&server_id=${serverId}&products=${encodedProducts}`;
                
                // Show payment URL in alert (for development/testing)
                alert(`Переход на страницу оплаты: ${paymentUrl}`);
                
                // In production, uncomment this line to redirect:
                // window.location.href = paymentUrl;
              }}
            >
              Купить
            </button>
          </div>

          <div className="mt-16">
            <p className="text-[9.9px] font-medium text-[#686e93] [font-family:'Poppins',Helvetica]">
              Copyright 2025 MYLO INC.
            </p>
          </div>
        </div>

        {/* Links Sections */}
        <div className="flex gap-16">
                {linkSections.map((section, index) => (
                  <div key={index} className="mb-6 md:mb-0">
                    <h3 className="text-[16.5px] font-semibold text-white [font-family:'Poppins',Helvetica] mb-5">
                      {section.title}
                    </h3>
                    <ul className="space-y-2">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          {link.external ? (
                            <a
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[11px] font-medium text-[#a7add2] [font-family:'IBM_Plex_Sans',Helvetica] hover:text-white transition-colors"
                            >
                              {link.text}
                            </a>
                          ) : (
                            <Link
                              to={link.href}
                              className="text-[11px] font-medium text-[#a7add2] [font-family:'IBM_Plex_Sans',Helvetica] hover:text-white transition-colors"
                            >
                              {link.text}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

          {/* Social Icons */}
          <div className="flex flex-col gap-4">
            {socialIcons.map((icon, index) => (
              <a
                key={index}
                href={icon.href}
                className="w-7 h-7"
                style={{
                  backgroundImage: `url(${icon.src})`,
                  backgroundSize: "100% 100%",
                }}
                aria-label={icon.name}
              />
            ))}
            <a href="#" className="mt-2">
              <img
                className="w-[26px] h-4"
                alt="Exclude"
                src="https://c.animaapp.com/PyecxKQm/img/exclude.svg"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="container mx-auto px-4 mt-4 relative z-10">
        <div className="flex justify-end">
          <p className="text-[15px] font-medium text-[#686e93] [font-family:'Poppins',Helvetica]">
            Сайт является частью экостемы Мыло.
          </p>
        </div>
      </div>
    </footer>
  );
};
