import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, User, Heart, ShoppingCart, ChevronDown } from 'lucide-react';
import { Logo } from '@/components/icons/logo';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu"
import {
    Menubar,
    MenubarContent,
    MenubarMenu,
    MenubarTrigger,
    MenubarItem
} from '@/components/ui/menubar';


const categoryLinks = [
  { href: '#', label: 'Todos los servicios' },
  { href: '#', label: 'Consultoría' },
  { href: '#', label: 'Diseño' },
  { href: '#', label: 'Desarrollo' },
  { href: '#', label: 'Marketing' },
  { href: '#', label: 'Soporte' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <Logo />
            </Link>
          </div>
          <div className="hidden md:flex flex-1 justify-center px-8 lg:px-16">
            <div className="relative w-full max-w-md">
              <Input type="search" placeholder="Buscar servicios..." className="pr-10" />
              <Button variant="ghost" size="icon" className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8">
                  <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  <span className="hidden md:inline">Entrar</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem>
                  <Heart className="mr-2 h-4 w-4" />
                  <span>Favoritos</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  <span>Carrito</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
             <Button variant="ghost" size="icon" className="md:hidden">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      <div className="hidden md:flex h-12 items-center justify-center border-t bg-gray-50">
        <Menubar className="border-none bg-transparent p-0">
          <MenubarMenu>
              <Link
                href="#"
                className="px-3 py-1.5 text-sm font-medium transition-colors text-gray-600 hover:text-gray-900"
              >
                Inicio
              </Link>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="cursor-pointer">
              Categorías <ChevronDown className="ml-1 h-4 w-4" />
            </MenubarTrigger>
            <MenubarContent>
                {categoryLinks.map(link => (
                    <MenubarItem key={link.label}>
                         <Link href={link.href}>{link.label}</Link>
                    </MenubarItem>
                ))}
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
          <Link
                href="#"
                className="px-3 py-1.5 text-sm font-medium transition-colors text-gray-600 hover:text-gray-900"
              >
                Oferta
              </Link>
          </MenubarMenu>
        </Menubar>
      </div>
    </header>
  );
}
