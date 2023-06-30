import { Providers } from './providers';
import { archivo } from '../lib/fonts';
import Header from '../components/header';
import Footer from '../components/footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
