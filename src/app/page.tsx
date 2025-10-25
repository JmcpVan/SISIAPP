
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/layout/header';
import { ShieldCheck } from 'lucide-react';
import { PlaceHolderImages, FeaturedServices } from '@/lib/placeholder-images';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay"

export default function Home() {

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <section className="grid md:grid-cols-2 min-h-[calc(100vh-80px)]">
          <div className="relative w-full h-full">
            <Carousel 
              className="w-full h-full"
              plugins={[
                Autoplay({
                  delay: 5000,
                }),
              ]}
              opts={{
                loop: true,
              }}
            >
              <CarouselContent className="h-[calc(100vh-80px)]">
                {PlaceHolderImages.map((image) => (
                  <CarouselItem key={image.id}>
                    <div className="relative w-full h-full">
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        fill
                        className="object-cover"
                        data-ai-hint={image.imageHint}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          <div className="flex items-center justify-center p-8 md:p-12">
            <div className="max-w-md text-center md:text-left">
              <h1 className="mt-2 text-4xl md:text-5xl font-bold text-primary tracking-tight">
                SisiApp
              </h1>
              <p className="mt-2 text-base text-primary/90">
                Profesionales verificados, tranquilidad garantizada.
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
                    <div className="border rounded-lg p-6 text-center shadow-lg bg-background">
                        <h3 className="text-xl font-semibold text-primary">Consulta General</h3>
                        <p className="mt-2 text-muted-foreground">Atención médica primaria para toda la familia.</p>
                    </div>
                    <div className="border rounded-lg p-6 text-center shadow-lg bg-background">
                        <h3 className="text-xl font-semibold text-primary">Seguimiento de Crónicos</h3>
                        <p className="mt-2 text-muted-foreground">Control y manejo de condiciones crónicas.</p>
                    </div>
                    <div className="border rounded-lg p-6 text-center shadow-lg bg-background">
                        <h3 className="text-xl font-semibold text-primary">Orientación Pediátrica</h3>
                        <p className="mt-2 text-muted-foreground">Consejos y cuidados para la salud de los niños.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="seguridad" className="py-12 md:py-24">
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
