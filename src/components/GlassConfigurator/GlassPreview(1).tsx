import React, { useEffect, useRef } from 'react';
import { GlassPattern } from './useGlassConfig';

interface GlassPreviewProps {
  width: number;
  height: number;
  pattern: GlassPattern;
  tempered: boolean;
  drawing: string | null;
}

const GlassPreview: React.FC<GlassPreviewProps> = ({
  width,
  height,
  pattern,
  tempered,
  drawing
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Update preview dimensions while maintaining aspect ratio
  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const maxWidth = container.clientWidth - 40; // account for padding
      const maxHeight = 300;
      
      // Calculate scale to fit within the container
      const scaleWidth = maxWidth / width;
      const scaleHeight = maxHeight / height;
      const scale = Math.min(scaleWidth, scaleHeight, 1);
      
      // Set scaled dimensions
      const scaledWidth = Math.floor(width * scale);
      const scaledHeight = Math.floor(height * scale);
      
      const glassElement = container.querySelector('.glass-preview');
      if (glassElement) {
        (glassElement as HTMLElement).style.width = `${scaledWidth}px`;
        (glassElement as HTMLElement).style.height = `${scaledHeight}px`;
      }
    }
  }, [width, height, pattern]);

  const getGlassBackground = () => {
    switch (pattern) {
      case 'frosted':
        return 'bg-white bg-opacity-70 backdrop-blur-sm';
      case 'lines':
        return 'bg-gradient-to-r from-white from-10% via-gray-200 via-20% to-white to-30% bg-[length:30px_100%]';
      case 'dots':
        return 'bg-[radial-gradient(circle,_rgba(220,220,220,0.8)_1px,_transparent_1px)] bg-[length:10px_10px]';
      default:
        return 'bg-white bg-opacity-20 backdrop-blur-[2px]';
    }
  };

  return (
    <div 
      ref={containerRef}
      className="flex items-center justify-center rounded-xl p-6 bg-gradient-to-br from-gray-100 to-blue-50 h-full min-h-[350px] relative overflow-hidden animate-fade-in"
    >
      {drawing ? (
        <div className="relative max-w-full max-h-full">
          <img
            src={drawing}
            alt="Чертеж стекла"
            className="max-h-72 max-w-full object-contain rounded border border-gray-200 shadow-md"
          />
          <div className="absolute bottom-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full shadow">
            Ваш чертеж
          </div>
        </div>
      ) : (
        <div className="relative">
          <div
            className={`glass-preview border-2 border-gray-300 rounded-lg overflow-hidden shadow-lg transition-all duration-500 ${getGlassBackground()}`}
            style={{ width: '200px', height: '200px' }}
          >
            {/* Glass reflection effect */}
            <div className="absolute top-0 left-0 right-0 h-1/4 bg-gradient-to-b from-white to-transparent opacity-40"></div>
          </div>
          
          {/* Size indicators */}
          <div className="absolute -bottom-8 left-0 right-0 flex justify-center">
            <span className="text-xs text-gray-600 bg-white px-2 py-1 rounded-full shadow-sm">
              {width} × {height} мм
            </span>
          </div>
          
          {/* Tempered badge */}
          {tempered && (
            <div className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full shadow transform rotate-12 z-10">
              Закалено
            </div>
          )}
          
          {/* Pattern name */}
          <div className="absolute -top-8 left-0 right-0 flex justify-center">
            <span className="text-xs text-gray-600 bg-white px-2 py-1 rounded-full shadow-sm">
              {pattern === 'none' ? 'Прозрачное' : 
               pattern === 'frosted' ? 'Матовое' : 
               pattern === 'lines' ? 'Полосы' : 'Точки'}
            </span>
          </div>
        </div>
      )}
      
      {/* Grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
    </div>
  );
};

export default GlassPreview;