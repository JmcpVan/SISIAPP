
import Link from 'next/link';
import { Logo } from '@/components/icons/logo';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-white/70">
              Profesionales verificados, tranquilidad garantizada.
            </p>
          </div>
          <div className="col-span-1">
            <h3 className="text-lg font-semibold">Navegación</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#" className="text-sm hover:text-white/80 transition-colors">
                  Acerca de
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="text-sm hover:text-white/80 transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-sm hover:text-white/80 transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="#help" className="text-sm hover:text-white/80 transition-colors">
                  Ayuda
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#" className="text-sm hover:text-white/80 transition-colors">
                  Términos de Servicio
                </Link>
              </li>
              <li>
                <Link href="#privacy" className="text-sm hover:text-white/80 transition-colors">
                  Aviso de Privacidad
                </Link>
              </li>
              <li>
                <Link href="#legal" className="text-sm hover:text-white/80 transition-colors">
                  Aviso Legal
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-lg font-semibold">Síguenos</h3>
            <div className="flex mt-4 space-x-4">
              <Link href="#" className="text-white hover:text-white/80 transition-colors">
                <Facebook size={24} />
              </Link>
              <Link href="#" className="text-white hover:text-white/80 transition-colors">
                <Twitter size={24} />
              </Link>
              <Link href="#" className="text-white hover:text-white/80 transition-colors">
                <Instagram size={24} />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/20 pt-8 text-center text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} SisiApp. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
