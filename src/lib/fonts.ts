import { Rokkitt, Playfair_Display } from 'next/font/google';

export const rokkitt = Rokkitt({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const playfair_display = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['italic'],
});
