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
      <circle cx="70" cy="50" r="5" fill="#34A853" />
      <path
        d="M78 24C72.4772 24 68 28.4772 68 34C68 37.6578 70.3857 40.8564 73.5 42.4418C74.9084 43.1534 76.4173 43.5 78 43.5C83.5228 43.5 88 39.0228 88 33.5C88 28.1667 83.5228 24 78 24Z"
        fill="#FBBC05"
      />
    </svg>
  );
}
