import { MapPin } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-md">
      <span className="text-primary font-bold text-2xl">S</span>
      <MapPin className="h-8 w-8 text-primary" />
      <span className="font-bold text-xl text-white">SisiApp</span>
    </div>
  );
}
