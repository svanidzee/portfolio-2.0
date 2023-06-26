import { Providers } from './providers';
import Footer from '../components/footer';
import SimpleSidebar from '../components/sidebar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          <SimpleSidebar />
          <main>{children}</main>
          {/* <Footer /> */}
        </Providers>
      </body>
    </html>
  );
}
