import React from 'react';
import { Ruler, ShieldCheck, Zap, LayoutGrid, Settings, Truck } from 'lucide-react';

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h4 className="text-xl font-semibold text-gray-800 mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Ruler className="h-8 w-8" />,
      title: "Точные размеры",
      description: "Укажите необходимые параметры с точностью до миллиметра для идеального соответствия"
    },
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      title: "Безопасность",
      description: "Закаленное стекло в 5 раз прочнее обычного и безопасно при разрушении"
    },
    {
      icon: <LayoutGrid className="h-8 w-8" />,
      title: "Разнообразие узоров",
      description: "Выбирайте из множества вариантов обработки поверхности стекла"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Быстрое производство",
      description: "Изготовление в кратчайшие сроки благодаря современному оборудованию"
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Гибкая настройка",
      description: "Полностью настраиваемые параметры для любых потребностей"
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Доставка",
      description: "Бережная доставка готовой продукции в специальной упаковке"
    }
  ];

  return (
    <section id="features" className="py-16 max-w-5xl mx-auto scroll-mt-24">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-gray-800 mb-4">Наши преимущества</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Мы предлагаем полный цикл производства стеклянных изделий по индивидуальным параметрам
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <FeatureCard 
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;