import { useState } from 'react';

export type GlassPattern = 'none' | 'frosted' | 'lines' | 'dots';

export const useGlassConfig = () => {
  const [width, setWidth] = useState<number>(1000);
  const [height, setHeight] = useState<number>(1000);
  const [pattern, setPattern] = useState<GlassPattern>('none');
  const [tempered, setTempered] = useState<boolean>(false);
  const [drawing, setDrawing] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setDrawing(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return {
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
  };
};