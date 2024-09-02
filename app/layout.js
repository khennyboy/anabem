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
    template: "%s / Anabel Lifestyle Limited",
    default: "Welcome / Anabel Lifestyle Limited"
  },
  description: `Luxurious cabin hotel, located in the heart of the
  Italian Dolomites, surrounded by beautiful mountains and dark forests`
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


// spacemono