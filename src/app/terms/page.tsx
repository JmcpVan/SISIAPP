
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <section id="terms" className="py-12 md:py-24 bg-gray-50 dark:bg-gray-800/20 px-8 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">Términos y Condiciones</h2>
            <div className="text-muted-foreground space-y-4 text-justify">
              <p>Bienvenido a SisiApp. Estos términos y condiciones describen las reglas y regulaciones para el uso de la aplicación SisiApp. Al acceder a esta aplicación, asumimos que aceptas estos términos y condiciones. No continúes usando SisiApp si no estás de acuerdo con todos los términos y condiciones establecidos en esta página.</p>
              
              <h3 className="text-xl font-semibold text-foreground pt-4">1. Cuentas de Usuario</h3>
              <p>Cuando creas una cuenta con nosotros, debes proporcionarnos información precisa, completa y actual en todo momento. El no hacerlo constituye una violación de los Términos, lo que puede resultar en la terminación inmediata de tu cuenta en nuestro servicio.</p>
              
              <h3 className="text-xl font-semibold text-foreground pt-4">2. Contenido</h3>
              <p>Nuestro servicio te permite publicar, enlazar, almacenar, compartir y de otra manera poner a disposición cierta información, texto, gráficos, videos u otro material. Eres responsable del Contenido que publiques en el servicio, incluida su legalidad, fiabilidad y adecuación.</p>

              <h3 className="text-xl font-semibold text-foreground pt-4">3. Terminación</h3>
              <p>Podemos terminar o suspender tu cuenta inmediatamente, sin previo aviso ni responsabilidad, por cualquier motivo, incluido, entre otros, si incumples los Términos. Tras la terminación, tu derecho a utilizar el servicio cesará inmediatamente.</p>

              <h3 className="text-xl font-semibold text-foreground pt-4">4. Cambios en el Servicio</h3>
              <p>Nos reservamos el derecho de retirar o modificar nuestro servicio, y cualquier servicio o material que proporcionemos a través del servicio, a nuestra entera discreción y sin previo aviso. No seremos responsables si por alguna razón todo o parte del servicio no está disponible en algún momento o por cualquier período.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
