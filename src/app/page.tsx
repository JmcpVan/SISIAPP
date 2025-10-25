
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/layout/header';
import { ShieldCheck, User, Wrench, HeartHandshake, BookUser, HardHat, Dog, Scale, Star } from 'lucide-react';
import { FeaturedServices, FeaturedService, HeroSlides } from '@/lib/placeholder-images';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Footer } from '@/components/layout/footer';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const iconComponents: { [key: string]: React.ElementType } = {
  Wrench,
  HeartHandshake,
  BookUser,
  HardHat,
  Dog,
  Scale,
};

const colorClasses: { [key: string]: string } = {
  'pink-500': 'text-pink-500',
  'green-500': 'text-green-500',
  'purple-500': 'text-purple-500',
  'indigo-500': 'text-indigo-500',
  'google-blue': 'text-google-blue',
  'orange-500': 'text-orange-500'
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
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % HeroSlides.length);
    }, 5000); 

    return () => clearInterval(timer);
  }, []);

  const activeSlide = HeroSlides[currentSlide];


  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900/50">
      <Header />
      <main className="flex-1">
      <section className="grid md:grid-cols-2 min-h-[calc(100vh-80px)] overflow-hidden">
          <div className="flex flex-col justify-center p-8 md:p-12 animate-slide-in-left">
            <div className="w-full">
              <div className="max-w-md mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                  SisiApp
                </h1>
                <p className="mt-2 text-lg text-muted-foreground">
                  Profesionales verificados, tranquilidad garantizada.
                </p>
              </div>
              <div className="my-8">
                <Image src="/img/logo-circular.svg" alt="SisiApp Logo" width={200} height={200} className="mx-auto" />
              </div>
              <div className="max-w-md mx-auto">
                <p className="mt-4 text-muted-foreground text-justify">
                  En SisiApp creemos que la confianza y la comodidad van de la mano. Por eso, reunimos a los mejores profesionales verificados para que encuentres soluciones rápidas y seguras, desde el mantenimiento del hogar hasta el cuidado personal, todo en un solo lugar.
                </p>
                <Button size="lg" className="mt-8">
                  Reservar tu servicio
                </Button>
              </div>
            </div>
          </div>
          
          <div className="relative flex items-center justify-center p-8 animate-slide-in-right">
            <div className="relative w-full h-full max-w-lg mx-auto">
              <div
                className={cn(
                  'absolute inset-0 rounded-[2rem] transform -rotate-6 transition-colors duration-1000',
                  activeSlide.bgColor
                )}
              ></div>
              <div className="relative w-full h-[300px] md:h-[400px] rounded-[2rem] overflow-hidden">
                {HeroSlides.map((slide, index) => (
                  <Image
                    key={slide.id}
                    src={slide.imageUrl}
                    alt={slide.description}
                    fill
                    className={cn(
                      "object-cover transition-opacity duration-1000",
                      index === currentSlide ? "opacity-100" : "opacity-0"
                    )}
                    data-ai-hint={slide.imageHint}
                    priority
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
        
        <section id="servicios" className="py-12 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-foreground mb-8">Servicios más solicitados</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {FeaturedServices.map((service: FeaturedService) => {
                    const IconComponent = iconComponents[service.icon];
                    const iconColorClass = colorClasses[service.color] || 'text-primary';
                    return (
                      <div key={service.id} className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 bg-card">
                        <div className={`absolute top-0 left-0 w-full h-2 bg-${service.color}`}></div>
                        <div className="p-6">
                            <div className="flex justify-center mb-4">
                                {IconComponent && <IconComponent className={`h-16 w-16 ${iconColorClass}`} />}
                            </div>
                            <h3 className="text-xl font-semibold text-foreground text-center">{service.name}</h3>
                            <p className="mt-2 text-sm text-muted-foreground text-center">{service.description}</p>
                            <div className="flex items-center justify-between mt-4">
                              <Rating rating={service.rating} />
                              <div className="flex items-center">
                                <User className="h-4 w-4 mr-2 text-primary" />
                                <p className="text-sm font-medium text-foreground">{service.provider}</p>
                              </div>
                            </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
            </div>
        </section>

        <section className="bg-gray-50 dark:bg-gray-800/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Comunidad de Confianza</h2>
            <div className="text-muted-foreground">
              <p className="text-justify">En nuestra comunidad encontrarás profesionales verificados listos para ayudarte en lo que necesites. Desde mecánicos y cuidadores hasta tutores, paseadores y asesores legales, todos nuestros colaboradores han sido evaluados para garantizarte confianza, calidad y atención personalizada. Explora los servicios más solicitados y elige con tranquilidad, sabiendo que cada profesional ha sido validado por nuestro equipo.</p>
            </div>
          </div>
        </section>

        <section id="contacto" className="py-12 md:py-24 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Contacto</h2>
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
                        <Button type="submit" className="w-full">Enviar Mensaje</Button>
                    </form>
                </div>
            </div>
        </section>

        <section id="seguridad" className="py-12 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex mb-4">
                    <ShieldCheck className="h-12 w-12 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">SisiApp, tu seguridad garantizada</h2>
                <p className="mt-4 text-lg text-muted-foreground">Profesionales verificados, tranquilidad garantizada, enfocado en la validación y tu seguridad.</p>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
