import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages, FeaturedServices } from '@/lib/placeholder-images';
import { Star } from 'lucide-react';
import { Header } from '@/components/layout/header';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-1');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="relative w-full bg-background overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center py-12 md:py-24">
              <div className="space-y-6 text-center lg:text-left">
                <div className="inline-block bg-accent text-accent-foreground rounded-md px-3 py-1 text-sm font-medium">
                  Mejores precios
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                  Súper precios en tus servicios favoritos
                </h1>
                <p className="max-w-md mx-auto lg:mx-0 text-lg text-muted-foreground">
                  Gana más por tu dinero
                </p>
                <div>
                  <Button size="lg">regístrate</Button>
                </div>
              </div>
              <div className="relative mx-auto w-full max-w-2xl">
                 {heroImage && <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    width={600}
                    height={400}
                    className="w-full rounded-xl object-cover aspect-video"
                    data-ai-hint={heroImage.imageHint}
                  />
                 }
              </div>
            </div>
          </div>
        </section>
        
        <section className="w-full py-12 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Servicios Destacados</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Descubre nuestros servicios mejor valorados por la comunidad.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {FeaturedServices.map((service) => (
                <Card key={service.id} className="overflow-hidden group">
                  <CardContent className="p-0">
                    <div className="overflow-hidden">
                      <Image
                        src={service.imageUrl}
                        alt={service.name}
                        width={400}
                        height={300}
                        className="w-full object-cover aspect-video transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={service.imageHint}
                      />
                    </div>
                    <div className="p-4 space-y-2">
                      <h3 className="text-lg font-bold">{service.name}</h3>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < service.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground/30'
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-xl font-semibold">${service.price}</p>
                      <Button className="w-full">Contratar</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
