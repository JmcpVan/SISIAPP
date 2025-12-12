import Image from 'next/image';

export function Logo() {
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-md">
      <Image src="/img/logo-circular.svg" alt="SisiApp Logo" width={48} height={48} className="h-12 w-12" />
      <span className="font-bold text-xl text-white">SisiApp</span>
    </div>
  );
}
