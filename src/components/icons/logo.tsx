import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-md">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-primary-foreground"
      >
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </svg>
      <span className="font-bold text-xl text-primary-foreground">SisiApp</span>
    </div>
  );
}
