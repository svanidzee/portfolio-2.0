import { Archivo } from 'next/font/google';
import { Poppins } from 'next/font/google';
import { Lexend } from 'next/font/google';
import localFont from 'next/font/local';

// Font files can be colocated inside of `pages`
export const myFont = localFont({ src: '../fonts/Amble-Bold.ttf' });

export const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const kanit = Lexend({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
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
