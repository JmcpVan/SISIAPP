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
  name: z.string().min(3, "Service name must be at least 3 characters long."),
  provider: z.string().min(2, "Provider name must be at least 2 characters long."),
  description: z.string().min(20, "Please provide a detailed description of at least 20 characters."),
  category: z.string().min(1, "Please select or enter a category."),
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
        title: "Service Registered!",
        description: `Your service "${values.name}" has been submitted for validation.`,
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
                  <FormLabel>Service Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Expert Lawn Mowing" {...field} />
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
                  <FormLabel>Your Name or Company Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., John Doe's Landscaping" {...field} />
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
                  <FormLabel>Service Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe the service you offer in detail. The more detail, the better our AI can suggest categories."
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
                  <FormLabel>Service Category</FormLabel>
                  <FormControl>
                    <Input placeholder="AI suggestions will appear below" {...field} />
                  </FormControl>
                  <FormDescription>
                    Select a suggested category or type your own.
                  </FormDescription>
                  <div className="pt-2 min-h-[50px]">
                    {isSuggesting && (
                      <div className="flex items-center text-sm text-muted-foreground mt-2 animate-pulse">
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Our AI is thinking...
                      </div>
                    )}
                    {!isSuggesting && suggestions.length > 0 && (
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Wand2 className="h-4 w-4 text-accent"/>
                          <p>Suggested categories (click to select):</p>
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
              Submit for Validation
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
