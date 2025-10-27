

'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/layout/header';
import { ShieldCheck, User, Wrench, HeartHandshake, BookUser, HardHat, Dog, Scale, Star, Zap, Dumbbell, Mail, HelpCircle, Users } from 'lucide-react';
import { FeaturedServices, PlaceHolderImages } from '@/lib/placeholder-images';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Footer } from '@/components/layout/footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const iconComponents: { [key: string]: React.ElementType } = {
  Wrench,
  HeartHandshake,
  BookUser,
  HardHat,
  Dog,
  Scale,
  Zap,
  Dumbbell
};

const colorClasses: { [key: string]: string } = {
  'pink-500': 'text-pink-500',
  'green-500': 'text-green-500',
  'purple-500': 'text-purple-500',
  'indigo-500': 'text-indigo-500',
  'google-blue': 'text-google-blue',
  'orange-500': 'text-orange-500',
  'yellow-400': 'text-yellow-400',
  'red-500': 'text-red-500'
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
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900/50">
      <Header />
      <main className="flex-1">
      <section id="acerca-de" className="w-full md:pb-24">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center animate-slide-in-left">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                  SisiApp
                </h1>
                <p className="mt-2 text-lg text-muted-foreground">
                  Profesionales verificados, tranquilidad garantizada.
                </p>
              </div>
              <div className="my-8">
                <Image src="/img/logo-circular.svg" alt="SisiApp Logo" width={256} height={256} className="mx-auto w-40 h-40 md:w-48 md:h-48" />
              </div>
              <div>
                <p className="mt-4 text-muted-foreground text-justify">
                  En SisiApp creemos que la confianza y la comodidad van de la mano. Por eso, reunimos a los mejores profesionales verificados para que encuentres soluciones rápidas y seguras, desde el mantenimiento del hogar hasta el cuidado personal, todo en un solo lugar.
                </p>
                <Button size="lg" className="mt-8">
                  Reservar tu servicio
                </Button>
              </div>
            </div>
            <div className="relative animate-slide-in-right overflow-hidden min-h-[300px] md:h-[600px] flex items-center justify-center">
              <div className="absolute inset-8 transform -rotate-6 rounded-[2rem] bg-primary/80 backdrop-blur-sm animate-rotate-slow"></div>
            </div>
          </div>
        </section>

        <section id="servicios" className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:mt-16">
          <div className="flex items-center gap-2 mb-4">
            <Users className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Servicios más solicitados</h2>
          </div>
          <div className="text-muted-foreground mb-8">
            <p className="text-justify">En nuestra comunidad encontrarás profesionales verificados listos para ayudarte en lo que necesites. Desde mecánicos y cuidadores hasta tutores, paseadores y asesores legales, todos nuestros colaboradores han sido evaluados para garantizarte confianza, calidad y atención personalizada. Explora los servicios más solicitados y elige con tranquilidad, sabiendo que cada profesional ha sido validado por nuestro equipo.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FeaturedServices.map((service: any) => {
              const IconComponent = iconComponents[service.icon];
              const iconColorClass = colorClasses[service.color] || 'text-primary';
              return (
                <div key={service.id} className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 bg-card">
                  <div className={`absolute top-0 left-0 w-full h-2 bg-${service.color}`}></div>
                  <div className="p-4 md:p-6">
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
        </section>

        <section id="contacto" className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-8">
                <Mail className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold text-foreground">Contacto</h2>
              </div>
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
            <div id="legal">
              <div className="flex items-center gap-2 mb-8">
                <ShieldCheck className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold text-foreground">Aviso Legal</h2>
              </div>
              <div className="text-muted-foreground space-y-4 text-justify">
                <p>El uso de SisiApp está sujeto a los términos y condiciones descritos en este aviso. Al utilizar la aplicación, aceptas cumplir con todas las políticas y regulaciones aplicables. La información proporcionada en esta plataforma no constituye asesoramiento profesional y debe ser utilizada únicamente con fines informativos.</p>
                <p>SisiApp no se hace responsable de los acuerdos o transacciones realizadas entre usuarios y proveedores de servicios. Recomendamos a los usuarios verificar las credenciales y la idoneidad de los profesionales antes de contratar cualquier servicio. Todos los profesionales registrados en la plataforma han pasado por un proceso de verificación, pero la responsabilidad final recae en el usuario.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex justify-center">
            <HelpCircle className="h-16 w-16 text-primary" />
        </section>

        <section id="help" className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-24">
          <div className="flex items-center gap-2 mb-8">
            <h2 className="text-3xl font-bold text-foreground">Preguntas Frecuentes (Ayuda)</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>¿Cómo funciona la verificación de profesionales?</AccordionTrigger>
              <AccordionContent>
                Todos nuestros profesionales pasan por un riguroso proceso de verificación que incluye la validación de su identidad, antecedentes y credenciales profesionales para garantizar tu seguridad y confianza.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>¿Cómo se procesan los pagos?</AccordionTrigger>
              <AccordionContent>
                Los pagos se procesan de forma segura a través de nuestra plataforma. Puedes añadir tu tarjeta de crédito o débito y todos los pagos se realizarán una vez que confirmes que el servicio ha sido completado a tu satisfacción.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>¿Qué hago si tengo un problema con un servicio?</AccordionTrigger>
              <AccordionContent>
                Si tienes algún problema, puedes contactar a nuestro equipo de soporte 24/7 a través de la sección de "Contacto" o directamente desde el detalle del servicio en la aplicación. Estamos aquí para ayudarte a resolver cualquier inconveniente.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>¿Puedo cancelar un servicio?</AccordionTrigger>
              <AccordionContent>
                Sí, puedes cancelar un servicio. Por favor, consulta nuestras políticas de cancelación en los Términos de Servicio para entender los plazos y posibles cargos que podrían aplicarse.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

      </main>
      <Footer />
    </div>
  );
}
