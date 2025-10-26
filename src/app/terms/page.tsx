
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <section id="terms" className="py-12 md:py-24 bg-gray-50 dark:bg-gray-800/20 px-8 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Términos y Condiciones</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl font-semibold">1. Relación contractual</AccordionTrigger>
                <AccordionContent>
                  <div className="text-muted-foreground space-y-4 text-justify pt-4">
                    <p>Las presentes Condiciones de uso (“Condiciones”) regulan el acceso o uso que usted haga, exclusivamente dentro del territorio de la República Dominicana, como persona, de aplicaciones, páginas web, contenido, productos y servicios (los “Servicios”) que pone a su disposición, una sociedad de responsabilidad limitada constituida en la República Dominicana, con domicilio social en calle praderas i, #4 Manoguayabo, Santo Domingo Oeste, debidamente registrada en la Cámara de Comercio y Producción de Santo Domingo con el número de registro mercantil 195526PSD.</p>
                    <p className="font-bold uppercase">USTED DEBERÁ LEER DETENIDAMENTE Y ACEPTAR ESTAS CONDICIONES DETENIDAMENTE ANTES DE ACCEDER O USAR LOS SERVICIOS.</p>
                    <p>Mediante su acceso y uso de los Servicios usted acuerda vincularse jurídicamente por estas Condiciones, que establecen una relación contractual entre usted y TECH-FIN-INVEST GLOBAL GROUP S.R.L. y su e-comerce: SISIApp. Si usted no acepta estas Condiciones, no podrá acceder o usar los Servicios. Estas Condiciones sustituyen expresamente los acuerdos o compromisos previos con usted. TECH-FIN-INVEST GLOBAL GROUP S.R.L y SISIApp podrá poner fin de inmediato a estas Condiciones o cualquiera de los Servicios respecto de usted en caso de que usted incumpla las obligaciones contenidas en las presentes Condiciones o, en general, dejar de ofrecer o denegar el acceso a los Servicios o cualquier parte de ellos.</p>
                    <p>Se podrán aplicar condiciones suplementarias a determinados Servicios, como políticas para un evento, una actividad o una promoción particular, y dichas condiciones suplementarias se le comunicarán en relación con los Servicios aplicables, al momento de usted acceder a tales Servicios. Las condiciones suplementarias se establecen además de las Condiciones, y se considerarán una parte de estas, para los fines de los Servicios aplicables. Las condiciones suplementarias prevalecerán sobre las Condiciones en el caso de conflicto con respecto a los Servicios aplicables.</p>
                    <p>SisiApp podrá modificar las Condiciones relativas a los Servicios cuando lo considere oportuno. Las modificaciones serán efectivas después de su publicación por parte de SisiApp de las citadas Condiciones actualizadas en esta ubicación o las políticas modificadas o condiciones suplementarias sobre el Servicio aplicable. Usted deberá aceptar las modificaciones a las Condiciones para poder continuar accediendo y utilizando los Servicios. La recopilación y el uso que hacemos de la información personal en relación con los Servicios es conforme se dispone en la Política de privacidad de SisiApp, disponible en https://www.SisiApp.com/privacy/notice. SisiApp podrá facilitar a un procesador de reclamaciones o a una aseguradora cualquier información necesaria (incluida su información de contacto) si hubiera quejas, disputas o conflictos, que pudieran incluir un accidente, implicándole a usted y a un tercero y dicha información o dichos datos fueran necesarios para resolver la queja, la disputa o el conflicto.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-xl font-semibold">2. Los Servicios</AccordionTrigger>
                <AccordionContent>
                  <div className="text-muted-foreground space-y-4 text-justify pt-4">
                    <p>Los Servicios constituyen una plataforma de tecnología que permite a los usuarios de la aplicación móvil de SisiApp o páginas web proporcionadas como parte de los Servicios (cada una, una “Aplicación”) podrá organizar y planear el servicios y/o logística con terceros proveedores independientes de dichos servicios, incluidos terceros proveedores y/o logísticos independientes, conforme a un acuerdo con SisiApp o algunos afiliados de SisiApp (“Terceros proveedores”). A no ser que SisiApp lo acepte mediante un contrato separado por escrito con usted, los Servicios se ponen a disposición solo para su uso personal, no comercial. USTED RECONOCE QUE SISIAPP NO PRESTA SERVICIOS DE TRANSPORTE, NI DE LIMPIEZA, PLOMERIA, ELECTRICIDAD, ETCÉTERA……. O DE LOGÍSTICA. NO FUNCIONA COMO UNA EMPRESA DE SERVICIOS VARIOS Y QUE DICHOS SERVICIOS O LOGÍSTICA SE PRESTAN POR TERCEROS CONTRATISTAS INDEPENDIENTES, QUE NO ESTÁN EMPLEADOS POR TECH-FIN-INVEST GLOBAL GROUP S.R.L (SISIAPP) NI POR NINGUNA DE SUS AFILIADOS. EN CONSECUENCIA, SON LOS TERCEROS CONTRATISTAS INDEPENDIENTES LOS RESPONSABLES POR LOS SERVICIOS O LOGÍSTICA QUE PRESTAN.</p>

                    <h4 className="text-lg font-semibold text-foreground pt-2">Licencia.</h4>
                    <p>Sujeto al cumplimiento de estas Condiciones, SisiApp le otorga una licencia limitada, no exclusiva, no sublicenciable, revocable, no transferible para: (i) el acceso y uso de las Aplicaciones en su dispositivo personal solo en relación con su uso de los Servicios; y (ii) el acceso y uso de cualquier contenido, información y material relacionado que pueda ponerse a disposición a través de los Servicios, en cada caso solo para su uso personal, no comercial. SisiApp y sus licenciantes se reservan cualquier derecho que no haya sido expresamente otorgado por el presente.</p>

                    <h4 className="text-lg font-semibold text-foreground pt-2">Restricciones.</h4>
                    <p>Usted no podrá: (i) retirar cualquier nota de derechos de autor, marca registrada u otra nota de propiedad de cualquier parte de los Servicios; (ii) reproducir, modificar, preparar obras derivadas sobre los Servicios, distribuir, licenciar, arrendar, revender, transferir, exhibir públicamente, presentar públicamente, transmitir, retransmitir o explotar de otra forma los Servicios, excepto como se permita expresamente por SisiApp; (iii) descompilar, realizar ingeniería inversa o desmontar los Servicios, excepto como se permita por la ley aplicable; (iv) enlazar, reflejar o enmarcar cualquier parte de los Servicios; (v) causar o lanzar cualquier programa o script con el objeto de extraer, indexar, analizar o de otro modo realizar prospección de datos de cualquier parte de los Servicios o sobrecargar o bloquear indebidamente la operación o funcionalidad de cualquier aspecto de los Servicios; o (vi) intentar obtener un acceso no autorizado o dañar cualquier aspecto de los Servicios o sus sistemas o redes relacionados.</p>

                    <h4 className="text-lg font-semibold text-foreground pt-2">Prestación de los Servicios.</h4>
                    <p>Usted reconoce que partes de los Servicios podrán ponerse a disposición bajo varias marcas u opciones de pedidos de SisiApp asociadas con servicios múltiples o los servicios logísticos, incluidas las marcas de servicios actualmente denominadas según su proveedor oferente. Asimismo, usted reconoce que los Servicios podrán ponerse a disposición bajo dichas marcas u opciones de pedidos por o en relación con: (i) ciertas subsidiarias o afiliados de SisiApp; o (ii) Terceros proveedores independientes, incluidos servicios múltiples de empresas de red de servicios varios, titulares de la licencia o permiso de trabajo técnico.</p>

                    <h4 className="text-lg font-semibold text-foreground pt-2">Servicios y contenido de Terceros.</h4>
                    <p>Los Servicios podrán ponerse a disposición o ser accesibles en relación con contenido de terceros (incluida la publicidad) que SisiApp no controle por tratarse de interacciones individuales de los usuarios a través de las Aplicaciones. Usted reconoce que podrán ser de aplicación diferentes condiciones y políticas de privacidad al uso que haga de dichos servicios. SisiApp no respalda el contenido de terceros y serán estos terceros los responsables de su contenido. Adicionalmente, Apple Inc., Google, Inc., Microsoft Corporation o BlackBerry Limited o sus correspondientes subsidiarias o afiliados internacionales serán terceros beneficiarios en este contrato si usted accede a los Servicios utilizando Aplicaciones desarrolladas para dispositivos móviles con sistema iOS, Android, Microsoft Windows, respectivamente. Estos terceros beneficiarios no son parte de este contrato y no son responsables de la prestación o apoyo de los Servicios de ninguna manera. Su acceso a los Servicios utilizando estos dispositivos se sujeta a las condiciones establecidas en las condiciones de servicio de terceros beneficiarios aplicables.</p>

                    <h4 className="text-lg font-semibold text-foreground pt-2">Titularidad.</h4>
                    <p>Los Servicios y todos los derechos relativos a estos son y permanecerán de la propiedad de SisiApp o de sus licenciantes. Ninguna de estas Condiciones ni su uso de los Servicios le transfieren u otorgan ningún derecho: (i) sobre o en relación con los Servicios, excepto en cuanto a la licencia limitada otorgada anteriormente; o bien (ii) a utilizar o mencionar en cualquier modo a los nombres de empresa, logotipos, nombres de producto y servicio, marcas comerciales o marcas de servicio de SisiApp o de sus licenciantes.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
