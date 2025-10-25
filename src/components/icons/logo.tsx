import { MapPin } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-md">
      <MapPin className="h-6 w-6 text-primary-foreground" />
      <span className="font-bold text-xl text-primary-foreground">SisiApp</span>
    </div>
  );
}
