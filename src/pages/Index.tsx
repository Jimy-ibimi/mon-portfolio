import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Formation from "@/components/Formation";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Formation />
      <Contact />
      <footer className="py-8 text-center border-t border-border">
        <p className="text-sm text-muted-foreground font-mono">
          © 2024 Ahmed Benali — Fait avec <span className="text-primary">Flutter</span> & passion
        </p>
      </footer>
    </div>
  );
};

export default Index;
