import React, { useState, useEffect } from 'react';
import { GlassWater as GlassTumbler } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-3 px-4 md:px-10' 
          : 'bg-transparent py-6 px-4 md:px-10'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <GlassTumbler className="h-8 w-8 text-blue-600" />
          <div>
            <h1 className={`font-extrabold text-blue-700 transition-all duration-300 ${
              isScrolled ? 'text-2xl' : 'text-3xl'
            }`}>
              iGlass
            </h1>
            <p className={`text-gray-600 transition-all duration-300 ${
              isScrolled ? 'text-xs' : 'text-sm'
            }`}>
              Инновационный конфигуратор стекла онлайн
            </p>
          </div>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#configurator" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
            Конфигуратор
          </a>
          <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
            Возможности
          </a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
            Контакты
          </a>
        </nav>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-sm transition-all duration-200 transform hover:scale-105">
          Заказать звонок
        </button>
      </div>
    </header>
  );
};

export default Header;