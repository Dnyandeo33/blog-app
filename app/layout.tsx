import { Open_Sans } from 'next/font/google';
import Footer from './(shared)/Footer';
import Navbar from './(shared)/Navbar';
import './globals.css';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'Blog AI App',
  description: 'Blog built in next js that uses AI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
