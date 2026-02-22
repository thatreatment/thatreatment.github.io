import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GoldTicker from "@/components/GoldTicker";
import Engine from "@/components/Engine";
import Capital from "@/components/Capital";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <section className="max-w-6xl mx-auto px-6 py-20">
        <GoldTicker />
      </section>
      <Engine />
      <Capital />
      <section id="contact" className="max-w-5xl mx-auto px-6 py-20">
        <ContactForm />
      </section>
    </main>
  );
}
