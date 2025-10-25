
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/layout/header';
import { ShieldCheck } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import React from 'react';

export default function Home() {
  const [api, setApi] = React.useState<CarouselApi>();

  React.useEffect(() => {
    if (!api) {
      return;
    }

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1">
        <section className="grid md:grid-cols-2 min-h-[calc(100vh-80px)]">
          <div className="relative w-full h-full bg-[#d8edea]">
            <Carousel
              className="w-full h-full"
              opts={{ loop: true }}
              setApi={setApi}
            >
              <CarouselContent>
                {PlaceHolderImages.map((img) => (
                  <CarouselItem key={img.id}>
                    <div className="relative w-full h-[calc(100vh-80px)]">
                      <Image
                        src={img.imageUrl}
                        alt={img.description}
                        fill
                        className="object-cover"
                        data-ai-hint={img.imageHint}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          <div className="flex items-center justify-center p-8 md:p-12 bg-[#d8edea]">
            <div className="max-w-md text-center md:text-left">
              <p className="text-primary/80">Confiable y accesible para todos</p>
              <h1 className="mt-2 text-4xl md:text-5xl font-bold text-primary tracking-tight">
                SisiApp
              </h1>
              <p className="mt-2 text-base text-primary/90">
                Profesionales verificados, tranquilidad garantizada, enfocado en la validación y tu seguridad.
              </p>
              <p className="mt-4 text-3xl md:text-4xl text-primary/90">
                Servicio médico en línea
              </p>
              <Button size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground">
                Reservar una cita online
              </Button>
            </div>
          </div>
        </section>
        
        <section id="servicios" className="py-12 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-primary mb-8">Servicios más solicitados</h2>
                {/* Placeholder for featured services */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="border rounded-lg p-6 text-center shadow-lg">
                        <h3 className="text-xl font-semibold text-primary">Consulta General</h3>
                        <p className="mt-2 text-muted-foreground">Atención médica primaria para toda la familia.</p>
                    </div>
                    <div className="border rounded-lg p-6 text-center shadow-lg">
                        <h3 className="text-xl font-semibold text-primary">Seguimiento de Crónicos</h3>
                        <p className="mt-2 text-muted-foreground">Control y manejo de condiciones crónicas.</p>
                    </div>
                    <div className="border rounded-lg p-6 text-center shadow-lg">
                        <h3 className="text-xl font-semibold text-primary">Orientación Pediátrica</h3>
                        <p className="mt-2 text-muted-foreground">Consejos y cuidados para la salud de los niños.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="seguridad" className="py-12 md:py-24 bg-accent/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="flex justify-center mb-4">
                    <ShieldCheck className="h-12 w-12 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-primary">SisiApp, tu seguridad garantizada</h2>
                <p className="mt-4 text-lg text-muted-foreground">Profesionales verificados, tranquilidad garantizada, enfocado en la validación y tu seguridad.</p>
            </div>
        </section>

      </main>
    </div>
  );
}
