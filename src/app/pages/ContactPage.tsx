import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Contact } from '../components/Contact';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-32">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
