import React from 'react';
import GlassForm from './GlassForm';
import GlassPreview from './GlassPreview';
import { useGlassConfig } from './useGlassConfig';

const GlassConfigurator: React.FC = () => {
  const { 
    width, 
    setWidth, 
    height, 
    setHeight, 
    pattern, 
    setPattern, 
    tempered, 
    setTempered, 
    drawing, 
    setDrawing,
    handleFileChange
  } = useGlassConfig();

  return (
    <section id="configurator" className="py-16 max-w-5xl mx-auto scroll-mt-24">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-gray-800 mb-4">Конфигуратор стекла</h3>
        <p className="text-gray-600">Настройте все параметры вашего будущего изделия</p>
      </div>
      
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 backdrop-blur-sm bg-opacity-90">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <GlassForm 
            width={width}
            setWidth={setWidth}
            height={height}
            setHeight={setHeight}
            pattern={pattern}
            setPattern={setPattern}
            tempered={tempered}
            setTempered={setTempered}
            handleFileChange={handleFileChange}
          />
          
          <GlassPreview 
            width={width}
            height={height}
            pattern={pattern}
            tempered={tempered}
            drawing={drawing}
          />
        </div>
        
        <div className="mt-8 border-t pt-6 flex justify-between items-center">
          <div>
            <p className="text-gray-600">Расчетная стоимость:</p>
            <p className="text-2xl font-bold text-blue-700">{calculatePrice(width, height, pattern, tempered).toLocaleString()} сум</p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105">
            Заказать стекло
          </button>
        </div>
      </div>
    </section>
  );
};

// Helper function to calculate price based on parameters
const calculatePrice = (width: number, height: number, pattern: string, tempered: boolean): number => {
  // Base price per square mm (converted from previous cm price)
  let basePrice = 0.05;
  
  // Pattern multiplier
  const patternMultiplier = {
    'none': 1,
    'frosted': 1.3,
    'lines': 1.4,
    'dots': 1.5
  }[pattern] || 1;
  
  // Tempered glass costs 30% more
  const temperedMultiplier = tempered ? 1.3 : 1;
  
  // Calculate area and final price in Uzbek som (roughly converted from previous price)
  const area = width * height;
  const finalPrice = Math.round(area * basePrice * patternMultiplier * temperedMultiplier * 100); // Multiply by 100 for som conversion
  
  return finalPrice;
};

export default GlassConfigurator;