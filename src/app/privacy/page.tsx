
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <section id="privacy" className="py-12 md:py-24 bg-gray-50 dark:bg-gray-800/20 px-8 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">Aviso de Privacidad</h2>
            <div className="text-muted-foreground space-y-4 text-justify">
              <p>En SisiApp, tu privacidad es nuestra prioridad. Este Aviso de Privacidad explica cómo recopilamos, usamos, divulgamos y protegemos tu información personal cuando utilizas nuestra aplicación y servicios. Al acceder o utilizar SisiApp, aceptas las prácticas descritas en este aviso.</p>
              <h3 className="text-xl font-semibold text-foreground pt-4">1. Información que Recopilamos</h3>
              <p>Recopilamos información que nos proporcionas directamente, como tu nombre, dirección de correo electrónico, número de teléfono y detalles de pago. También recopilamos información automáticamente cuando usas la app, como tu ubicación, dirección IP y datos de uso del servicio.</p>
              <h3 className="text-xl font-semibold text-foreground pt-4">2. Uso de la Información</h3>
              <p>Utilizamos tu información para proporcionar y mejorar nuestros servicios, procesar transacciones, comunicarnos contigo, personalizar tu experiencia y garantizar la seguridad de nuestra plataforma. No compartiremos tu información personal con terceros para fines de marketing sin tu consentimiento explícito.</p>
              <h3 className="text-xl font-semibold text-foreground pt-4">3. Seguridad de los Datos</h3>
              <p>Implementamos medidas de seguridad técnicas y organizativas para proteger tu información personal contra el acceso no autorizado, la alteración, la divulgación o la destrucción. Sin embargo, ningún método de transmisión por Internet o de almacenamiento electrónico es 100% seguro.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
