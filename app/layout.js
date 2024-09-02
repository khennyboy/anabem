import '@/app/_styles/globals.css';
import { Header } from "./_component/header";
import { Footer } from './_component/Footer';
import UseContext from './context/useContext';
import { Roboto } from 'next/font/google';


const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
});

export const metadata = {
  title: {
    template: "%s / ANABEM Lifestyle Ltd. | MEP Services, Bespoke Furniture, Real Estate Solutions",
    default: "Welcome / ANABEM Lifestyle Ltd. | MEP Services, Bespoke Furniture, Real Estate Solutions"
  },
  description: `Welcome to ANABEM Lifestyle Ltd., where innovation meets craftsmanship. We provide exceptional Mechanical, Electrical, and Plumbing (MEP) services, bespoke furniture design, and comprehensive real estate solutions to bring your vision to life`,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <UseContext>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </UseContext>
      </body>
    </html>
  );
}


