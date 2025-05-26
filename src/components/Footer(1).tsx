import React from 'react';
import { GlassWater as GlassTumbler } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <GlassTumbler className="h-8 w-8 text-blue-600" />
              <h2 className="text-xl font-bold text-blue-700">iGlass</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Инновационные решения для изготовления стеклянных изделий по индивидуальным параметрам
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors duration-200">
                <span className="sr-only">ВКонтакте</span>
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93V15.07C2 20.67 3.33 22 8.93 22H15.07C20.67 22 22 20.67 22 15.07V8.93C22 3.33 20.67 2 15.07 2ZM18.15 16.27H16.69C16.14 16.27 15.97 15.82 14.86 14.72C13.86 13.77 13.49 13.67 13.27 13.67C12.96 13.67 12.87 13.76 12.87 14.18V15.77C12.87 16.1 12.75 16.27 11.81 16.27C10.35 16.27 8.71 15.44 7.53 13.83C5.77 11.47 5.27 9.57 5.27 9.2C5.27 9.01 5.36 8.83 5.74 8.83H7.21C7.55 8.83 7.68 8.98 7.81 9.34C8.5 11.43 9.68 13.28 10.24 13.28C10.43 13.28 10.51 13.19 10.51 12.7V10.36C10.46 9.43 10.06 9.35 10.06 9.02C10.06 8.87 10.21 8.74 10.42 8.74H12.5C12.78 8.74 12.9 8.88 12.9 9.23V12.21C12.9 12.5 13.05 12.62 13.14 12.62C13.32 12.62 13.47 12.5 13.81 12.17C14.85 11.04 15.56 9.38 15.56 9.38C15.65 9.19 15.81 9.02 16.16 9.02H17.63C18.03 9.02 18.15 9.23 18.03 9.53C17.82 10.37 16.27 12.52 16.27 12.52C16.09 12.81 16.04 12.93 16.27 13.23C16.44 13.46 16.96 13.9 17.31 14.3C18.03 15.05 18.56 15.67 18.73 16.08C18.87 16.5 18.67 16.27 18.15 16.27Z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors duration-200">
                <span className="sr-only">Telegram</span>
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 8.8C16.49 10.38 15.84 14.22 15.51 15.99C15.37 16.74 15.09 16.99 14.83 17.02C14.25 17.07 13.81 16.64 13.25 16.27C12.37 15.69 11.87 15.33 11.02 14.77C10.03 14.12 10.67 13.76 11.24 13.18C11.39 13.03 13.95 10.7 14 10.49C14.0069 10.4527 14.0069 10.4142 14 10.38C13.97 10.3 13.89 10.27 13.83 10.26C13.76 10.25 13.68 10.28 13.61 10.31C13.51 10.35 12.06 11.34 9.26 13.27C8.77 13.6 8.33 13.76 7.94 13.75C7.5 13.74 6.68 13.52 6.07 13.33C5.32 13.09 4.73 12.97 4.78 12.54C4.8 12.32 5.1 12.1 5.66 11.87C8.67 10.51 10.7 9.62 11.76 9.19C14.77 7.92 15.41 7.69 15.83 7.68C15.93 7.68 16.15 7.71 16.29 7.82C16.39 7.9 16.43 8.02 16.44 8.11C16.46 8.25 16.65 8.34 16.64 8.8Z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors duration-200">
                <span className="sr-only">WhatsApp</span>
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.6 14C16.4 13.9 15.1 13.3 14.9 13.2C14.7 13.1 14.5 13.1 14.3 13.3C14.1 13.5 13.7 14.1 13.5 14.3C13.4 14.5 13.2 14.5 13 14.4C12.3 14.1 11.6 13.7 11 13.2C10.5 12.7 10 12.1 9.6 11.5C9.5 11.3 9.6 11.1 9.7 11C9.8 10.9 9.9 10.7 10.1 10.6C10.2 10.5 10.3 10.3 10.3 10.2C10.4 10.1 10.4 9.90001 10.3 9.80001C10.2 9.70001 9.7 8.50001 9.5 8.00001C9.4 7.30001 9.2 7.30001 9 7.30001C8.9 7.30001 8.7 7.30001 8.5 7.30001C8.3 7.30001 8 7.50001 7.9 7.60001C7.3 8.20001 7 8.90001 7 9.70001C7.1 10.6 7.4 11.5 8 12.3C9.1 13.9 10.5 15.2 12.2 16C12.7 16.2 13.1 16.4 13.6 16.5C14.1 16.7 14.6 16.7 15.2 16.6C15.9 16.5 16.5 16 16.9 15.4C17.1 15 17.1 14.6 17 14.2C17 14.2 16.8 14.1 16.6 14ZM19.1 4.90001C15.2 1.00001 8.9 1.00001 5 4.90001C1.8 8.10001 1.2 13 3.4 16.9L2 22L7.3 20.6C8.8 21.4 10.4 21.8 12 21.8C17.5 21.8 21.9 17.4 21.9 11.9C22 9.30001 20.9 6.80001 19.1 4.90001ZM16.4 18.9C15.1 19.7 13.6 20.2 12 20.2C10.5 20.2 9.1 19.8 7.8 19.1L7.5 18.9L4.4 19.7L5.2 16.7L5 16.4C2.6 12.4 3.8 7.40001 7.7 4.90001C11.6 2.40001 16.6 3.70001 19 7.50001C21.4 11.4 20.3 16.5 16.4 18.9Z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Продукция</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Душевые перегородки</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Стеклянные двери</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Столешницы и полки</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Зеркала</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Декоративные элементы</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Компания</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">О нас</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Портфолио</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Отзывы</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Блог</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Вакансии</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">
                <span className="font-medium">Телефон:</span><br />
                +998-(99)-858-88-90<br />
                +998-(99)-858-88-10
              </li>
              <li className="text-gray-600">
                <span className="font-medium">Email:</span><br />
                iglassuz@gmail.com
              </li>
              <li className="text-gray-600">
                <span className="font-medium">Адрес:</span><br />
                г. Ташкент, улица Янгизамон, 86
              </li>
              <li className="text-gray-600">
                <span className="font-medium">Время работы:</span><br />
                Пн-Сб: 9:00-18:00
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2025 iGlass — Все права защищены
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 text-sm hover:text-blue-600 transition-colors duration-200">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-gray-500 text-sm hover:text-blue-600 transition-colors duration-200">
                Условия использования
              </a>
              <a href="#" className="text-gray-500 text-sm hover:text-blue-600 transition-colors duration-200">
                Карта сайта
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;