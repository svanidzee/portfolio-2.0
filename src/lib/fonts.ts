import { Archivo } from 'next/font/google';
import { Poppins } from 'next/font/google';
import { Montserrat } from 'next/font/google';
import { Playfair_Display } from 'next/font/google';
import { Rokkitt } from 'next/font/google';

export const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const rokkitt = Rokkitt({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  // weight: ["400" | "700" | ("400" | "700")]
});

export const playfair_display = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['italic'],
  // weight: ["400" | "700" | ("400" | "700")]
});

// ROKKIT
// lora
// QUICKSAND
// IBM_Plex_Mono
// Bitter
// OUTFIT
// URBANIST
// LEXEND
