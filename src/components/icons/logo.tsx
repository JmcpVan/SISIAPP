import type { SVGProps } from 'react';
import { cn } from '@/lib/utils';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      aria-hidden="true"
      {...props}
      className={cn(props.className)}
    >
      <circle cx="50" cy="50" r="50" fill="#1E293B" />
      <path
        d="M38,68 C 38,50 62,55 62,40"
        stroke="hsl(var(--primary))"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M62.5,29 C58,29 55,34 55,39.5 C55,48 62.5,50 62.5,50 C62.5,50 70,48 70,39.5 C70,34 67,29 62.5,29Z"
        stroke="hsl(var(--accent))"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="62.5" cy="42.5" r="3" fill="hsl(var(--success))" />
      <circle cx="33" cy="68" r="4" fill="hsl(var(--destructive))" />
    </svg>
  );
}
