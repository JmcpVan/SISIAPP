import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <div className="flex items-center gap-2 bg-primary px-4 py-2 rounded-md">
      <span className="font-bold text-xl text-primary-foreground">SisiApp</span>
    </div>
  );
}
