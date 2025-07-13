import React from "react";
import { Link } from "react-router-dom";

export const MapPage = (): JSX.Element => {
  return (
    <div className="flex flex-col h-screen bg-[#070914]">
      <nav className="flex justify-between items-center py-4 px-8 border-b border-[#2a2c3c] bg-[#0c0e1a] z-50">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img
              src="https://c.animaapp.com/PyecxKQm/img/soap-%282%29-3.png"
              alt="Логотип Мыло"
              className="h-8 w-auto mr-3"
            />
            <span className="text-[#1ad76f] font-semibold text-lg">Мыло</span>
          </Link>
        </div>
        <div className="flex items-center space-x-8">
          <Link to="/" className="text-[#a7add2] hover:text-white text-sm font-medium font-['Poppins',Helvetica] transition-colors">
            Главная
          </Link>
          <Link to="/wiki" className="text-[#a7add2] hover:text-white text-sm font-medium font-['Poppins',Helvetica] transition-colors">
            Вики
          </Link>
          <Link to="/map" className="text-[#1ad76f] hover:text-white text-sm font-medium font-['Poppins',Helvetica] transition-colors">
            Карта
          </Link>
        </div>
        <div>
          <Link to="/" className="bg-[#1ad76f] hover:bg-[#18c265] text-white px-6 py-2 rounded-full text-sm font-semibold font-['Poppins',Helvetica] transition-colors">
            Купить проходку
          </Link>
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
