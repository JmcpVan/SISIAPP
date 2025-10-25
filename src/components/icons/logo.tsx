import { SisiLogoHero } from '@/components/icons/sisi-logo-hero';

export function Logo() {
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-md">
      <SisiLogoHero className="h-8 w-8" />
      <span className="font-bold text-xl text-white">SisiApp</span>
    </div>
  );
}
