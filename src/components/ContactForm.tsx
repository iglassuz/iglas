import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, Check } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the data to a server
    console.log('Form submitted:', formData);
    
    // Show success state
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-16 max-w-5xl mx-auto scroll-mt-24">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-gray-800 mb-4">Свяжитесь с нами</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Остались вопросы? Заполните форму, и мы свяжемся с вами в ближайшее время
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Сообщение отправлено!</h4>
              <p className="text-gray-600">
                Спасибо за обращение. Мы свяжемся с вами в ближайшее время.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Ваше имя
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200"
                  placeholder="Иван Иванов"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200"
                    placeholder="example@mail.ru"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200"
                    placeholder="+998 (___) ___-__-__"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200"
                  placeholder="Расскажите о вашем проекте или задайте вопрос..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition-all duration-300 flex items-center justify-center gap-2"
              >
                Отправить сообщение
                <Send className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
        
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl shadow-lg p-6 md:p-8 flex flex-col justify-between">
          <div>
            <h4 className="text-2xl font-bold mb-6">Контактная информация</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Телефон</p>
                  <p className="mt-1">+998-(99)-858-88-90</p>
                  <p className="mt-1">+998-(99)-858-88-10</p>
                  <p className="text-blue-200 text-sm mt-1">Пн-Сб, 9:00-18:00</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="mt-1">iglassuz@gmail.com</p>
                  <p className="text-blue-200 text-sm mt-1">Отвечаем в течение 24 часов</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Адрес</p>
                  <p className="mt-1">г. Ташкент, улица Янгизамон, 86</p>
                  <p className="text-blue-200 text-sm mt-1">Шоурум и производство</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-blue-500">
            <p className="font-medium mb-2">Мы в социальных сетях</p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-colors duration-200">
                <span className="sr-only">ВКонтакте</span>
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93V15.07C2 20.67 3.33 22 8.93 22H15.07C20.67 22 22 20.67 22 15.07V8.93C22 3.33 20.67 2 15.07 2ZM18.15 16.27H16.69C16.14 16.27 15.97 15.82 14.86 14.72C13.86 13.77 13.49 13.67 13.27 13.67C12.96 13.67 12.87 13.76 12.87 14.18V15.77C12.87 16.1 12.75 16.27 11.81 16.27C10.35 16.27 8.71 15.44 7.53 13.83C5.77 11.47 5.27 9.57 5.27 9.2C5.27 9.01 5.36 8.83 5.74 8.83H7.21C7.55 8.83 7.68 8.98 7.81 9.34C8.5 11.43 9.68 13.28 10.24 13.28C10.43 13.28 10.51 13.19 10.51 12.7V10.36C10.46 9.43 10.06 9.35 10.06 9.02C10.06 8.87 10.21 8.74 10.42 8.74H12.5C12.78 8.74 12.9 8.88 12.9 9.23V12.21C12.9 12.5 13.05 12.62 13.14 12.62C13.32 12.62 13.47 12.5 13.81 12.17C14.85 11.04 15.56 9.38 15.56 9.38C15.65 9.19 15.81 9.02 16.16 9.02H17.63C18.03 9.02 18.15 9.23 18.03 9.53C17.82 10.37 16.27 12.52 16.27 12.52C16.09 12.81 16.04 12.93 16.27 13.23C16.44 13.46 16.96 13.9 17.31 14.3C18.03 15.05 18.56 15.67 18.73 16.08C18.87 16.5 18.67 16.27 18.15 16.27Z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-colors duration-200">
                <span className="sr-only">Telegram</span>
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 8.8C16.49 10.38 15.84 14.22 15.51 15.99C15.37 16.74 15.09 16.99 14.83 17.02C14.25 17.07 13.81 16.64 13.25 16.27C12.37 15.69 11.87 15.33 11.02 14.77C10.03 14.12 10.67 13.76 11.24 13.18C11.39 13.03 13.95 10.7 14 10.49C14.0069 10.4527 14.0069 10.4142 14 10.38C13.97 10.3 13.89 10.27 13.83 10.26C13.76 10.25 13.68 10.28 13.61 10.31C13.51 10.35 12.06 11.34 9.26 13.27C8.77 13.6 8.33 13.76 7.94 13.75C7.5 13.74 6.68 13.52 6.07 13.33C5.32 13.09 4.73 12.97 4.78 12.54C4.8 12.32 5.1 12.1 5.66 11.87C8.67 10.51 10.7 9.62 11.76 9.19C14.77 7.92 15.41 7.69 15.83 7.68C15.93 7.68 16.15 7.71 16.29 7.82C16.39 7.9 16.43 8.02 16.44 8.11C16.46 8.25 16.65 8.34 16.64 8.8Z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-colors duration-200">
                <span className="sr-only">WhatsApp</span>
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.6 14C16.4 13.9 15.1 13.3 14.9 13.2C14.7 13.1 14.5 13.1 14.3 13.3C14.1 13.5 13.7 14.1 13.5 14.3C13.4 14.5 13.2 14.5 13 14.4C12.3 14.1 11.6 13.7 11 13.2C10.5 12.7 10 12.1 9.6 11.5C9.5 11.3 9.6 11.1 9.7 11C9.8 10.9 9.9 10.7 10.1 10.6C10.2 10.5 10.3 10.3 10.3 10.2C10.4 10.1 10.4 9.90001 10.3 9.80001C10.2 9.70001 9.7 8.50001 9.5 8.00001C9.4 7.30001 9.2 7.30001 9 7.30001C8.9 7.30001 8.7 7.30001 8.5 7.30001C8.3 7.30001 8 7.50001 7.9 7.60001C7.3 8.20001 7 8.90001 7 9.70001C7.1 10.6 7.4 11.5 8 12.3C9.1 13.9 10.5 15.2 12.2 16C12.7 16.2 13.1 16.4 13.6 16.5C14.1 16.7 14.6 16.7 15.2 16.6C15.9 16.5 16.5 16 16.9 15.4C17.1 15 17.1 14.6 17 14.2C17 14.2 16.8 14.1 16.6 14ZM19.1 4.90001C15.2 1.00001 8.9 1.00001 5 4.90001C1.8 8.10001 1.2 13 3.4 16.9L2 22L7.3 20.6C8.8 21.4 10.4 21.8 12 21.8C17.5 21.8 21.9 17.4 21.9 11.9C22 9.30001 20.9 6.80001 19.1 4.90001ZM16.4 18.9C15.1 19.7 13.6 20.2 12 20.2C10.5 20.2 9.1 19.8 7.8 19.1L7.5 18.9L4.4 19.7L5.2 16.7L5 16.4C2.6 12.4 3.8 7.40001 7.7 4.90001C11.6 2.40001 16.6 3.70001 19 7.50001C21.4 11.4 20.3 16.5 16.4 18.9Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;