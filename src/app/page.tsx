
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/layout/header';
import { ShieldCheck, User, Wrench, HeartHandshake, BookUser, HardHat, Dog, Scale, Star } from 'lucide-react';
import { PlaceHolderImages, FeaturedServices, FeaturedService } from '@/lib/placeholder-images';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay"
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';

const iconComponents: { [key: string]: React.ElementType } = {
  Wrench,
  HeartHandshake,
  BookUser,
  HardHat,
  Dog,
  Scale,
};

const colorClasses: { [key: string]: string } = {
  'blue-500': 'text-blue-500',
  'pink-500': 'text-pink-500',
  'green-500': 'text-green-500',
  'yellow-500': 'text-yellow-500',
  'purple-500': 'text-purple-500',
  'indigo-500': 'text-indigo-500',
};


const Rating = ({ rating, maxRating = 5 }: { rating: number, maxRating?: number }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(maxRating)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
};

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
              <CarouselContent className="h-full">
                {PlaceHolderImages.map((image) => (
                  <CarouselItem key={image.id} className="h-full">
                    <div className="relative w-full h-full">
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        fill
                        className="object-cover"
                        data-ai-hint={image.imageHint}
                        priority={image.id === 'doctor-hero'}
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
                Reservar un servicio online
              </Button>
            </div>
          </div>
        </section>
        
        <section id="servicios" className="py-12 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-primary mb-8">Servicios más solicitados</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {FeaturedServices.map((service: FeaturedService) => {
                    const IconComponent = iconComponents[service.icon];
                    const iconColorClass = colorClasses[service.color] || 'text-primary';
                    return (
                      <div key={service.id} className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 bg-white">
                        <div className={`absolute top-0 left-0 w-full h-2 bg-${service.color}`}></div>
                        <div className="p-6">
                            <div className="flex justify-center mb-4">
                                {IconComponent && <IconComponent className={`h-16 w-16 ${iconColorClass}`} />}
                            </div>
                            <h3 className="text-xl font-semibold text-primary text-center">{service.name}</h3>
                            <p className="mt-2 text-sm text-muted-foreground text-center">{service.description}</p>
                            <div className="flex items-center justify-between mt-4">
                              <Rating rating={service.rating} />
                              <div className="flex items-center">
                                <User className="h-4 w-4 mr-2 text-primary" />
                                <p className="text-sm font-medium text-primary">{service.provider}</p>
                              </div>
                            </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
            </div>
        </section>

        <section id="contacto" className="py-12 md:py-24 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-primary mb-8">Contacto</h2>
                <div className="max-w-2xl mx-auto">
                    <form className="space-y-6">
                        <div>
                            <Label htmlFor="name">Nombre</Label>
                            <Input id="name" type="text" placeholder="Tu nombre" />
                        </div>
                        <div>
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="Tu correo electrónico" />
                        </div>
                        <div>
                            <Label htmlFor="message">Mensaje</Label>
                            <Textarea id="message" placeholder="Escribe tu mensaje aquí" />
                        </div>
                        <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Enviar Mensaje</Button>
                    </form>
                </div>
            </div>
        </section>

        <section id="seguridad" className="py-12 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex mb-4">
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
