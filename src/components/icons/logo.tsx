import type { SVGProps } from 'react';
import { cn } from '@/lib/utils';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <div className="bg-primary px-4 py-2 rounded-md">
      <span className="font-bold text-xl text-primary-foreground">SisiApp</span>
    </div>
  );
}
