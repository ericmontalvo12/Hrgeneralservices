import { Link } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen text-center px-8">
        <div className="w-12 h-px bg-[#d4af37] mb-8 mx-auto"></div>
        <h1 className="text-6xl lg:text-8xl text-black mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
          404
        </h1>
        <p className="text-lg text-gray-500 mb-10 max-w-sm">
          This page doesn't exist. Let's get you back on track.
        </p>
        <Link
          to="/"
          className="text-sm tracking-wider bg-black text-white px-10 py-4 hover:bg-[#d4af37] hover:text-black transition-all duration-300"
        >
          BACK TO HOME
        </Link>
      </main>
      <Footer />
    </div>
  );
}
