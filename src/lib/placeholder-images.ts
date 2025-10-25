import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export type FeaturedProduct = {
  id: string;
  name: string;
  price: string;
  rating: number;
  imageUrl: string;
  imageHint: string;
};

export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages;
export const FeaturedProducts: FeaturedProduct[] = data.featuredProducts;
