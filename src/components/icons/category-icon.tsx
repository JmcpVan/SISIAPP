import { Wrench, Home, Heart, Leaf, Utensils, Brush, LucideProps, Sparkles } from 'lucide-react';
import type { FC } from 'react';
import { cn } from '@/lib/utils';

interface CategoryIconProps extends LucideProps {
  category: string;
}

const iconMap: Record<string, FC<LucideProps>> = {
  'Home Services': Home,
  'Auto Repair': Wrench,
  'Health & Wellness': Heart,
  'Gardening': Leaf,
  'Food & Dining': Utensils,
  'Creative Services': Brush,
  default: Sparkles,
};

export function CategoryIcon({ category, className, ...props }: CategoryIconProps) {
  const Icon = iconMap[category] || iconMap.default;
  
  const colorClass = ['Home Services', 'Health & Wellness', 'Gardening'].includes(category)
    ? 'text-success'
    : 'text-destructive';
    
  return (
    <div className={cn('p-2 rounded-lg bg-secondary', className)}>
      <Icon className={cn(colorClass, "h-full w-full")} {...props} />
    </div>
  );
}
