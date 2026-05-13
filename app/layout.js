import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'The Uncomfortable Narrative',
  description: 'Official website for The Uncomfortable Narrative podcast.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="container-shell py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
