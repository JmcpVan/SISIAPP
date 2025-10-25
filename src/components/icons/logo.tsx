import type { SVGProps } from 'react';
import { SisiLogoHero } from './sisi-logo-hero';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <div className="flex items-center gap-2 bg-primary px-4 py-2 rounded-md">
      <SisiLogoHero className="h-6 w-6" />
      <span className="font-bold text-xl text-primary-foreground">SisiApp</span>
    </div>
  );
}
