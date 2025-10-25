import type { SVGProps } from 'react';
import { cn } from '@/lib/utils';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 160 40"
      aria-hidden="true"
      {...props}
      className={cn('h-10 w-auto', props.className)}
    >
      <text
        x="0"
        y="30"
        fontFamily="Inter, sans-serif"
        fontSize="32"
        fontWeight="bold"
        fill="currentColor"
      >
        NovoTec
      </text>
    </svg>
  );
}
