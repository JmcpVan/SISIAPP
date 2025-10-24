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
      <circle cx="50" cy="50" r="50" fill="#182A47" />
      <path
        d="M38.5 70.5C38.5 65.5 42.5 61.5 50.5 61.5C58.5 61.5 62 57.5 62 50C62 42.5 59 38.5 50.5 38.5C42.5 38.5 38.5 34.5 38.5 29.5"
        stroke="#4285F4"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <circle cx="30" cy="74" r="7" fill="#EA4335" />
      <circle cx="70" cy="28" r="7" fill="#FBBC05" />
    </svg>
  );
}
