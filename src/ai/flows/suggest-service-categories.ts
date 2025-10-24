'use server';

/**
 * @fileOverview This file defines a Genkit flow to suggest relevant service categories based on a service description.
 *
 * The file exports:
 *   - suggestServiceCategories: An async function that takes a service description and returns suggested categories.
 *   - SuggestServiceCategoriesInput: The input type for the suggestServiceCategories function.
 *   - SuggestServiceCategoriesOutput: The output type for the suggestServiceCategories function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestServiceCategoriesInputSchema = z.object({
  serviceDescription: z.string().describe('La descripción del servicio.'),
});
export type SuggestServiceCategoriesInput = z.infer<typeof SuggestServiceCategoriesInputSchema>;

const SuggestServiceCategoriesOutputSchema = z.object({
  suggestedCategories: z.array(z.string()).describe('Un array de categorías de servicio sugeridas.'),
});
export type SuggestServiceCategoriesOutput = z.infer<typeof SuggestServiceCategoriesOutputSchema>;

export async function suggestServiceCategories(input: SuggestServiceCategoriesInput): Promise<SuggestServiceCategoriesOutput> {
  return suggestServiceCategoriesFlow(input);
}

const suggestServiceCategoriesPrompt = ai.definePrompt({
  name: 'suggestServiceCategoriesPrompt',
  input: {schema: SuggestServiceCategoriesInputSchema},
  output: {schema: SuggestServiceCategoriesOutputSchema},
  prompt: `Eres un experto en categorización de servicios. Dada una descripción de un servicio, sugerirás categorías de servicio relevantes en español.

Descripción del Servicio: {{{serviceDescription}}}

Sugerir categorías de servicio:
`,
});

const suggestServiceCategoriesFlow = ai.defineFlow({
    name: 'suggestServiceCategoriesFlow',
    inputSchema: SuggestServiceCategoriesInputSchema,
    outputSchema: SuggestServiceCategoriesOutputSchema,
  },
  async input => {
    const {output} = await suggestServiceCategoriesPrompt(input);
    return output!;
  }
);
