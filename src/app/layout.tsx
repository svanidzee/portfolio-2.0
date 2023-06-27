import { Providers } from './providers';
import Footer from '../components/footer';
import SimpleSidebar from '../components/sidebar';
import { archivo } from '../lib/fonts';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          {/* <SimpleSidebar /> */}
          <main className={archivo.className}>{children}</main>
          {/* <Footer /> */}
        </Providers>
      </body>
    </html>
  );
}
