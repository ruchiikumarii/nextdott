import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const Contact = () => {
  return (
    <div className="min-h-screen bg-paper text-ink flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center pt-24">
        <h1 className="text-4xl md:text-6xl font-display font-medium tracking-tight">Contact</h1>
      </main>
      <Footer />
    </div>
  );
};
