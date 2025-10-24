import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ServiceCard } from '@/components/services/service-card';
import { services } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-services');

  return (
    <>
      <section className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center text-center text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            data-ai-hint={heroImage.imageHint}
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 p-4 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold font-headline drop-shadow-lg">
            Descubre y Ofrece Servicios Locales
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto drop-shadow-md">
            SISIAPP te conecta con proveedores de servicios locales de confianza, validados por nuestro equipo para garantizar calidad y fiabilidad.
          </p>
          <Button asChild size="lg">
            <Link href="/register">Registra Tu Servicio</Link>
          </Button>
        </div>
      </section>

      <section id="services" className="py-12 md:py-20 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">
              Servicios Destacados
            </h2>
            <p className="text-muted-foreground mt-2 text-lg">Explora los servicios ofrecidos en tu comunidad.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
