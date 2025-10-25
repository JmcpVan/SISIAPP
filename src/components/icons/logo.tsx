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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M49.999 0C22.385 0 0 22.385 0 50C0 77.615 22.385 100 49.999 100C77.615 100 100 77.615 100 50C100 22.385 77.615 0 49.999 0ZM34.52 64.928C42.84 64.928 49.563 58.205 49.563 49.885C49.563 41.565 42.84 34.842 34.52 34.842C26.2 34.842 19.477 41.565 19.477 49.885C19.477 58.205 26.2 64.928 34.52 64.928Z"
        fill="hsl(var(--primary))"
      />
      <path
        d="M65.48 35.072C57.16 35.072 50.437 41.795 50.437 50.115C50.437 58.435 57.16 65.158 65.48 65.158C73.8 65.158 80.523 58.435 80.523 50.115C80.523 41.795 73.8 35.072 65.48 35.072Z"
        fill="hsl(var(--background))"
      />
    </svg>
  );
}
