import React, { useState, useEffect, useCallback } from "react";

// Feature data for mapping
const features = [
  {
    id: 1,
    icon: "https://c.animaapp.com/PyecxKQm/img/protection-svg-2.svg",
    title: "Уникальные идеи",
    description:
      "На сервере каждый сезон представляет собой новый эксперимент. Например, в одном из сезонов все игроки жили в одном городе, разделенном на районы. В этом сезоне разработана концепция с порталами в каждое поселение. Торги с жителями отключены, что добавляет сложности и интерес в игровой процесс. Вместо этого игроки используют уникальные механики и системы обмена.",
    image: "https://c.animaapp.com/PyecxKQm/img/-2561@2x.png",
  },
  {
    id: 2,
    icon: "https://c.animaapp.com/PyecxKQm/img/protection-svg-3.svg",
    title: "Качественное железо",
    description:
      "Наш сервер размещается на собственном высококачественном хостинге с революционным ядром Folia — технологией следующего поколения. Пока другие серверы тормозят при 50+ игроков, мы обеспечиваем кристально чистые 20 TPS даже при 100+ активных игроков в одном мире благодаря многопоточной архитектуре.",
    image: "https://c.animaapp.com/PyecxKQm/img/-2563@2x.png",
  },
  {
    id: 3,
    icon: "https://c.animaapp.com/PyecxKQm/img/protection-svg-2.svg",
    title: "Пространственный карман",
    description:
      "Личное измерение размером 10x10 блоков для каждого игрока. Идеально для хранения ценных вещей и создания личных лабораторий. Доступ к пространственному карману имеет только его владелец, что обеспечивает полную безопасность ваших ресурсов. Эта уникальная особенность сервера находится в стадии разработки и скоро будет доступна всем игрокам.",
    image: "https://c.animaapp.com/PyecxKQm/img/-2561-2@2x.png",
  },
  {
    id: 4,
    icon: "https://c.animaapp.com/PyecxKQm/img/protection-svg-3.svg",
    title: "Активное сообщество",
    description:
      "Наш сервер объединяет игроков со всего мира, создавая дружелюбное и активное сообщество. Регулярные мероприятия, конкурсы и совместные проекты помогают игрокам находить новых друзей и получать незабываемые впечатления от игры. Наша команда модераторов следит за соблюдением правил и помогает новичкам освоиться в мире Мыло.",
    image: "https://c.animaapp.com/PyecxKQm/img/-2563@2x.png",
  },
  {
    id: 5,
    icon: "https://c.animaapp.com/PyecxKQm/img/protection-svg-2.svg",
    title: "Кастомизация арморстендов",
    description:
      "Возможность полностью настраивать положение и внешний вид арморстендов для создания уникальных декораций. Просто возьмите в руку кремень и нажмите ПКМ по арморстенду, чтобы открыть меню настройки. Создавайте сложные 3D модели, кастомную мебель и другие декоративные элементы для ваших построек.",
    image: "https://c.animaapp.com/PyecxKQm/img/-2561@2x.png",
  },
  {
    id: 6,
    icon: "https://c.animaapp.com/PyecxKQm/img/protection-svg-3.svg",
    title: "Странствующие торговцы",
    description:
      "Странствующие торговцы предлагают декоративные головы и предметы для починки, которые нельзя получить обычным способом. Это отличная альтернатива обычной торговле с жителями, которая отключена на сервере. Ищите торговцев в разных уголках мира и обменивайтесь с ними ценными ресурсами на уникальные предметы.",
    image: "https://c.animaapp.com/PyecxKQm/img/-2563@2x.png",
  },
  {
    id: 7,
    icon: "https://c.animaapp.com/PyecxKQm/img/protection-svg-2.svg",
    title: "Плагин Brewery",
    description:
      "На сервере установлен плагин Brewery, который добавляет новые виды напитков с различными эффектами. Вы можете создавать собственные рецепты и экспериментировать с ингредиентами. Каждый напиток имеет уникальные свойства и может давать как положительные, так и отрицательные эффекты в зависимости от качества приготовления.",
    image: "https://c.animaapp.com/PyecxKQm/img/-2561-2@2x.png",
  },
];

export const FeaturesSection = (): JSX.Element => {
  const [current, setCurrent] = useState(0);
  const count = features.length;

  const goToSlide = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % count);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + count) % count);
  };

  return (
    <section className="w-full py-16 relative overflow-hidden bg-[#161724]">
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="https://c.animaapp.com/PyecxKQm/img/image_1.png" 
          alt="Background pattern" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-[38.5px] font-bold [font-family:'Poppins',Helvetica] mb-12 text-center md:text-left md:ml-6">
          <span className="text-white">Наши </span>
          <span className="text-[#e20e41]">Особенности</span>
        </h2>

        <div className="relative w-full">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ 
                transform: `translateX(-${current * (100 / Math.min(3, count))}%)`,
                width: `${(count / Math.min(3, count)) * 100}%`
              }}
            >
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-2"
                >
                  <div className="h-full bg-[#161724] rounded-[11px] border border-solid border-[#2a2c3c] relative overflow-hidden">
                    <div className="relative h-full p-6">
                      <div className="flex">
                        <div className="w-[60%] pr-4">
                          <div
                            className="w-11 h-11 mb-8"
                            style={{
                              backgroundImage: `url(${feature.icon})`,
                              backgroundSize: "100% 100%",
                            }}
                          />
                          
                          <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-white text-[16.5px] leading-4 mb-6">
                            {feature.title}
                          </h3>

                          <p className="[font-family:'Poppins',Helvetica] font-normal text-[#a7add2] text-[13px] text-justify leading-normal">
                            {feature.description}
                          </p>
                        </div>
                        
                        <div className="w-[40%] flex justify-end">
                          <img
                            className="w-full h-auto object-contain"
                            alt="Element"
                            src={feature.image}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#161724] border border-[#2a2c3c] text-white rounded-full flex items-center justify-center hover:bg-[#2a2c3c] transition-colors"
          >
            ‹
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#161724] border border-[#2a2c3c] text-white rounded-full flex items-center justify-center hover:bg-[#2a2c3c] transition-colors"
          >
            ›
          </button>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                current === index ? "bg-[#e20e41] w-6" : "bg-[#2a2c3c]"
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Перейти к слайду ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
