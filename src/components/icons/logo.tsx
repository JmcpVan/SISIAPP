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
        d="M34.5 70.5C34.5 70.5 30.5 58.5 45.5 57.5C60.5 56.5 56 46 56 46"
        stroke="hsl(var(--primary))"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M62.5 32C59.1863 32 56.5 35.134 56.5 39C56.5 44.5 62.5 50 62.5 50C62.5 50 68.5 44.5 68.5 39C68.5 35.134 65.8137 32 62.5 32Z"
        stroke="hsl(var(--accent))"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="65.5" cy="53.5" r="3.5" fill="hsl(var(--success))" />
      <circle cx="31" cy="62" r="5" fill="hsl(var(--destructive))" />
    </svg>
  );
}
