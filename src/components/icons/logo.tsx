import type { SVGProps } from 'react';
import { cn } from '@/lib/utils';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <div className="flex flex-col text-left leading-tight">
      <span className="font-bold text-xl">Dra. Alicia Haz</span>
      <span className="text-sm font-light">Médico Familiar</span>
    </div>
  );
}
