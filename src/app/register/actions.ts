"use server";

import { suggestServiceCategories } from "@/ai/flows/suggest-service-categories";

export async function getCategorySuggestions(serviceDescription: string): Promise<{ suggestedCategories: string[] }> {
  if (!serviceDescription || serviceDescription.trim().length < 20) {
    return { suggestedCategories: [] };
  }

  try {
    const result = await suggestServiceCategories({ serviceDescription });
    return result;
  } catch (error) {
    console.error("Error in getCategorySuggestions:", error);
    // In a production app, you might want to log this error to a monitoring service.
    return { suggestedCategories: [] };
  }
}
