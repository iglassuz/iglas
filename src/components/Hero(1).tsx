import React from 'react';
import { ArrowDownCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToConfigurator = () => {
    const configurator = document.getElementById('configurator');
    if (configurator) {
      configurator.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-28 pb-16 md:py-32 text-center max-w-5xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 animate-fade-in">
        Создайте стекло под себя
      </h2>
      <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
        Выберите форму, размеры, тип обработки и узор — и получите точную стоимость с визуальным предпросмотром.
        Воплотите ваши идеи в стекле с iGlass.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button 
          onClick={scrollToConfigurator}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
        >
          Начать проектирование
          <ArrowDownCircle className="h-5 w-5" />
        </button>
        <button className="bg-white hover:bg-gray-100 text-blue-600 border border-blue-600 px-6 py-3 rounded-lg shadow-sm transition-all duration-300">
          Узнать больше
        </button>
      </div>
    </section>
  );
};

export default Hero;