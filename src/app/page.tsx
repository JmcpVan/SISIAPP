import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { PlaceHolderImages, FeaturedProducts } from '@/lib/placeholder-images';
import { Star } from 'lucide-react';

export default function Home() {
  const heroImages = PlaceHolderImages.filter(img => img.id.startsWith('hero-'));

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="relative w-full overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center py-12 md:py-24">
              <div className="space-y-6 text-center lg:text-left">
                <div className="inline-block bg-accent text-accent-foreground rounded-md px-3 py-1 text-sm font-medium">
                  Mejores precios
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                  Súper precios en tus artículos favoritos
                </h1>
                <p className="max-w-md mx-auto lg:mx-0 text-lg text-muted-foreground">
                  Gana más por tu dinero
                </p>
                <div>
                  <Button size="lg">Regístrate</Button>
                </div>
              </div>
              <div className="relative mx-auto w-full max-w-2xl">
                 <Carousel className="w-full"
                  opts={{
                    loop: true,
                  }}
                  >
                  <CarouselContent>
                    {heroImages.map((image, index) => (
                      <CarouselItem key={index}>
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          width={600}
                          height={400}
                          className="w-full rounded-xl object-cover aspect-video"
                          data-ai-hint={image.imageHint}
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
                  <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
                </Carousel>
              </div>
            </div>
          </div>
        </section>
        
        <section className="w-full py-12 md:py-24 bg-muted/40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Servicios Destacados</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Descubre nuestros productos mejor valorados por la comunidad.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {FeaturedProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      width={400}
                      height={300}
                      className="w-full object-cover aspect-video"
                      data-ai-hint={product.imageHint}
                    />
                    <div className="p-4 space-y-2">
                      <h3 className="text-lg font-bold">{product.name}</h3>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < product.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground'
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-xl font-semibold">${product.price}</p>
                      <Button className="w-full">Añadir al carrito</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full">
            <div className="h-4 bg-accent" />
            <div className="h-4 bg-primary" />
        </section>
      </main>
    </div>
  );
}
