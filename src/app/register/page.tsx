import { ServiceRegistrationForm } from "@/components/services/service-registration-form";

export default function RegisterPage() {
  return (
    <div className="container mx-auto max-w-3xl py-12 px-4 sm:px-6 lg:px-8">
      <div className="space-y-2 text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold font-headline">Registra Tu Servicio</h1>
        <p className="text-muted-foreground md:text-lg">
          Únete a nuestra red de proveedores locales de confianza. Completa el formulario para aparecer en SISIAPP.
        </p>
      </div>
      <ServiceRegistrationForm />
    </div>
  );
}
