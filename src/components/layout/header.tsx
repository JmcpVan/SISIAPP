import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Sparkles } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mr-4 flex">
          <Link href="/" className="flex items-center space-x-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">SISIAPP</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium ml-6">
          <Link
            href="/#services"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Services
          </Link>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="hidden md:flex items-center">
            <Button asChild>
              <Link href="/register">Register Service</Link>
            </Button>
          </nav>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="p-4">
                <Link href="/" className="flex items-center space-x-2 mb-8">
                  <Sparkles className="h-6 w-6 text-primary" />
                  <span className="font-bold text-lg">SISIAPP</span>
                </Link>
                <nav className="grid gap-4">
                  <Link
                    href="/#services"
                    className="flex w-full items-center py-2 text-lg font-semibold"
                  >
                    Services
                  </Link>
                  <Link
                    href="/register"
                    className="flex w-full items-center py-2 text-lg font-semibold"
                  >
                    Register Service
                  </Link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
