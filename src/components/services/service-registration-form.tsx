"use client";

import { useState, useTransition, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Loader2, Wand2 } from "lucide-react";
import { getCategorySuggestions } from "@/app/register/actions";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";

const formSchema = z.object({
  name: z.string().min(3, "El nombre del servicio debe tener al menos 3 caracteres."),
  provider: z.string().min(2, "El nombre del proveedor debe tener al menos 2 caracteres."),
  description: z.string().min(20, "Por favor, proporciona una descripción detallada de al menos 20 caracteres."),
  category: z.string().min(1, "Por favor, selecciona o introduce una categoría."),
});

type FormData = z.infer<typeof formSchema>;

export function ServiceRegistrationForm() {
  const [isPending, startTransition] = useTransition();
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isSuggesting, setIsSuggesting] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      provider: "",
      description: "",
      category: "",
    },
  });

  const descriptionValue = form.watch("description");

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (descriptionValue && descriptionValue.length > 20) {
        setIsSuggesting(true);
        try {
          const result = await getCategorySuggestions(descriptionValue);
          setSuggestions(result.suggestedCategories);
        } catch (error) {
          console.error("Failed to fetch suggestions", error);
        } finally {
          setIsSuggesting(false);
        }
      } else {
        setSuggestions([]);
      }
    };

    const handler = setTimeout(() => {
      fetchSuggestions();
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  }, [descriptionValue]);

  function onSubmit(values: FormData) {
    startTransition(() => {
      console.log("Form submitted:", values);
      toast({
        title: "¡Servicio Registrado!",
        description: `Tu servicio "${values.name}" ha sido enviado para validación.`,
        className: "bg-success text-success-foreground border-0",
      });
      setTimeout(() => {
        router.push('/');
      }, 1500);
    });
  }

  const handleSuggestionClick = (category: string) => {
    form.setValue("category", category, { shouldValidate: true });
    setSuggestions([]);
  };

  return (
    <Card>
      <CardContent className="p-6 md:p-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre del Servicio</FormLabel>
                  <FormControl>
                    <Input placeholder="Ej: Jardinería Experta" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="provider"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tu Nombre o el de tu Empresa</FormLabel>
                  <FormControl>
                    <Input placeholder="Ej: Jardinería Juan Pérez" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descripción del Servicio</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe el servicio que ofreces en detalle. Cuanto más detalle, mejor nuestra IA podrá sugerir categorías."
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Categoría del Servicio</FormLabel>
                  <FormControl>
                    <Input placeholder="Las sugerencias de la IA aparecerán aquí" {...field} />
                  </FormControl>
                  <FormDescription>
                    Selecciona una categoría sugerida o escribe la tuya.
                  </FormDescription>
                  <div className="pt-2 min-h-[50px]">
                    {isSuggesting && (
                      <div className="flex items-center text-sm text-muted-foreground mt-2 animate-pulse">
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Nuestra IA está pensando...
                      </div>
                    )}
                    {!isSuggesting && suggestions.length > 0 && (
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Wand2 className="h-4 w-4 text-accent"/>
                          <p>Categorías sugeridas (haz clic para seleccionar):</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {suggestions.map((cat) => (
                            <Badge
                              key={cat}
                              variant="secondary"
                              onClick={() => handleSuggestionClick(cat)}
                              className="cursor-pointer transition-colors hover:bg-accent hover:text-accent-foreground"
                            >
                              {cat}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" disabled={isPending} size="lg" className="w-full md:w-auto">
              {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Enviar para Validación
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
