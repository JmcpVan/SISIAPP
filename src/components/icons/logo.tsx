import type { SVGProps } from 'react';
import { cn } from '@/lib/utils';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
      {...props}
      className={cn(props.className)}
    >
      <circle cx="50" cy="50" r="50" fill="hsl(var(--primary))" />
      <path
        d="M35,75 C 35,55 75,55 75,45 C 75,35 25,35 25,25"
        stroke="hsl(var(--secondary))"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="25" cy="75" r="5" fill="hsl(var(--destructive))" />
      <path
        d="M75,25 C75,15 85,15 85,25 C85,35 75,45 75,45"
        stroke="hsl(var(--accent))"
        fill="hsl(var(--accent))"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <circle cx="78" cy="48" r="3" fill="hsl(var(--success))" />
    </svg>
  );
}
