import React from 'react';
import { Upload } from 'lucide-react';
import { GlassPattern } from './useGlassConfig';

interface GlassFormProps {
  width: number;
  setWidth: (width: number) => void;
  height: number;
  setHeight: (height: number) => void;
  pattern: GlassPattern;
  setPattern: (pattern: GlassPattern) => void;
  tempered: boolean;
  setTempered: (tempered: boolean) => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const GlassForm: React.FC<GlassFormProps> = ({
  width,
  setWidth,
  height,
  setHeight,
  pattern,
  setPattern,
  tempered,
  setTempered,
  handleFileChange
}) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-4">
        <h4 className="text-lg font-medium text-gray-800">Размеры</h4>
        <div>
          <div className="flex justify-between mb-1">
            <label className="block font-medium text-gray-700">Ширина</label>
            <span className="text-blue-600 font-medium">{width} мм</span>
          </div>
          <input
            type="range"
            min="200"
            max="3000"
            value={width}
            onChange={(e) => setWidth(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>200 мм</span>
            <span>3000 мм</span>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between mb-1">
            <label className="block font-medium text-gray-700">Высота</label>
            <span className="text-blue-600 font-medium">{height} мм</span>
          </div>
          <input
            type="range"
            min="200"
            max="3000"
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>200 мм</span>
            <span>3000 мм</span>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <h4 className="text-lg font-medium text-gray-800">Тип стекла</h4>
        <div>
          <label className="block font-medium text-gray-700 mb-2">Узор</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { id: 'none', name: 'Без узора' },
              { id: 'frosted', name: 'Матовый' },
              { id: 'lines', name: 'Полосы' },
              { id: 'dots', name: 'Точки' }
            ].map((option) => (
              <button
                key={option.id}
                onClick={() => setPattern(option.id as GlassPattern)}
                className={`border rounded-lg p-3 transition-all duration-200 ${
                  pattern === option.id 
                    ? 'border-blue-600 bg-blue-50 text-blue-600 shadow-sm' 
                    : 'border-gray-200 hover:border-gray-300 text-gray-700'
                }`}
              >
                {option.name}
              </button>
            ))}
          </div>
        </div>
        
        <div>
          <label className="flex items-center space-x-3 cursor-pointer group">
            <div className={`w-10 h-6 flex items-center bg-gray-300 rounded-full p-1 transition-colors duration-300 ${
              tempered ? 'bg-blue-600' : ''
            }`}>
              <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                tempered ? 'translate-x-4' : ''
              }`}></div>
            </div>
            <span className="font-medium text-gray-700 group-hover:text-gray-900">Закаленное стекло</span>
          </label>
          <p className="text-xs text-gray-500 mt-1 ml-12">Повышенная прочность и термостойкость</p>
        </div>
      </div>
      
      <div className="space-y-4">
        <h4 className="text-lg font-medium text-gray-800">Чертеж</h4>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:bg-gray-50 transition-colors duration-200">
          <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
          <p className="text-sm text-gray-600 mb-2">Загрузите чертеж или эскиз</p>
          <p className="text-xs text-gray-500 mb-4">Поддерживаются PNG, JPG или PDF</p>
          <input
            type="file"
            id="glass-blueprint"
            className="hidden"
            accept="image/*,.pdf"
            onChange={handleFileChange}
          />
          <label
            htmlFor="glass-blueprint"
            className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg cursor-pointer transition-colors duration-200"
          >
            Выбрать файл
          </label>
        </div>
      </div>
    </div>
  );
};

export default GlassForm;