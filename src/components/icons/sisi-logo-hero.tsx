import type { SVGProps } from 'react';

export function SisiLogoHero(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <circle cx="25" cy="70" r="5" fill="#EA4335" />
      <path
        d="M 28 65 C 20 45, 45 45, 65 25"
        stroke="#4285F4"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M65,10 a10,10 0 1,1 0,20 a10,10 0 1,1 0,-20 M65,18 a2,2 0 1,0 0,4 a2,2 0 1,0 0,-4"
        fill="#FBBC05"
      />
      <circle cx="70" cy="40" r="3.5" fill="#34A853" />
    </svg>
  );
}
