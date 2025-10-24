import { Wrench, Home, Heart, Leaf, Utensils, Brush, LucideProps, Sparkles } from 'lucide-react';
import type { FC } from 'react';
import { cn } from '@/lib/utils';

interface CategoryIconProps extends LucideProps {
  category: string;
}

const iconMap: Record<string, FC<LucideProps>> = {
  'Servicios del Hogar': Home,
  'Reparación de Autos': Wrench,
  'Salud y Bienestar': Heart,
  'Jardinería': Leaf,
  'Comida y Restaurantes': Utensils,
  'Servicios Creativos': Brush,
  default: Sparkles,
};

export function CategoryIcon({ category, className, ...props }: CategoryIconProps) {
  const Icon = iconMap[category] || iconMap.default;
  
  const colorClass = ['Servicios del Hogar', 'Salud y Bienestar', 'Jardinería'].includes(category)
    ? 'text-success'
    : 'text-destructive';
    
  return (
    <div className={cn('p-2 rounded-lg bg-secondary', className)}>
      <Icon className={cn(colorClass, "h-full w-full")} {...props} />
    </div>
  );
}
