import { Providers } from './providers';
import { archivo } from '../lib/fonts';
import Header from '../components/header';
import Footer from '../components/footer';
import { usePathname } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // const pathname = usePathname();
  // const searchParams = useSearchParams();

  // console.log(searchParams);
  return (
    <html lang='en'>
      <body>
        <Providers>
          <Header />
          <main className={archivo.className}>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
