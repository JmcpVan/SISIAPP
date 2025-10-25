import { Flag } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-md">
      <Flag className="h-8 w-8 text-primary" />
      <span className="font-bold text-xl text-white">SisiApp</span>
    </div>
  );
}
