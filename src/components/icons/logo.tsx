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
      <circle cx="50" cy="50" r="50" fill="hsl(222.2 84% 4.9%)" />
      <path
        d="M38 72.5C38 60 28 60 28 50C28 40 52 40 52 27.5"
        stroke="hsl(var(--primary))"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="30" cy="75" r="5" fill="hsl(var(--destructive))" />
      <circle cx="70" cy="53" r="3.5" fill="hsl(var(--success))" />
      <path
        d="M62.435,22.067c-5.52,0-10,4.48-10,10c0,5.52,10,17.21,10,17.21s10-11.69,10-17.21C72.435,26.547,67.955,22.067,62.435,22.067z M62.435,35.067c-1.656,0-3-1.343-3-3s1.344-3,3-3s3,1.343,3,3S64.091,35.067,62.435,35.067z"
        fill="hsl(var(--accent))"
      />
    </svg>
  );
}
