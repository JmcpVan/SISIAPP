import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';

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
        
        <section className="w-full">
            <div className="h-4 bg-accent" />
            <div className="h-4 bg-primary" />
        </section>
      </main>
    </div>
  );
}
