import { Inter, Lusitana } from 'next/font/google';

// Configure the Inter font with Latin subset
export const inter = Inter({
  subsets: ['latin'],
});

// Configure the Lusitana font with weight 400
export const lusitana = Lusitana({
  weight: ['400'], // '400' should be inside an array
  subsets: ['latin'], // It’s good practice to include subsets for better performance
});
