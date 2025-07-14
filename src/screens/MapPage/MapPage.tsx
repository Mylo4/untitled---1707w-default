import React from "react";

export const MapPage = (): JSX.Element => {
  return (
    <div className="flex flex-col h-screen bg-[#070914]">
      <nav className="flex justify-between items-center py-4 px-8 border-b border-[#2a2c3c] bg-[#0c0e1a] z-50">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img
              src="https://c.animaapp.com/PyecxKQm/img/group-19.png"
              alt="Логотип Мыло"
              className="h-8 w-auto mr-3"
            />
            <span className="text-[#e20e41] font-semibold text-lg">Мыло</span>
          </a>
        </div>
        <div className="flex items-center space-x-8">
          <a href="/wiki" className="text-[#a7add2] hover:text-white text-sm font-medium font-['Poppins',Helvetica] transition-colors">
            Вики
          </a>
          <a href="/map" className="text-[#e20e41] hover:text-white text-sm font-medium font-['Poppins',Helvetica] transition-colors">
            Карта
          </a>
          <a href="/shop" className="text-[#a7add2] hover:text-white text-sm font-medium font-['Poppins',Helvetica] transition-colors">
            Магазин
          </a>
        </div>
        <div>
          <a href="/" className="bg-[#e20e41] hover:bg-[#c90d3a] text-white px-6 py-2 rounded-full text-sm font-semibold font-['Poppins',Helvetica] transition-colors">
            Купить проходку
          </a>
        </div>
      </nav>
      
      <div className="flex-1">
        <iframe 
          src="https://dynmap.mylo.top?worldname=world&mapname=flat&zoom=2&x=0&z=0"
          className="w-full h-full border-0"
          title="DynMap"
        />
      </div>
    </div>
  );
};
