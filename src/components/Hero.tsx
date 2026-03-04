import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-primary/5 blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/5 blur-[120px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container relative z-10 flex flex-col items-center text-center gap-8 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="w-36 h-36 rounded-full overflow-hidden border-2 border-primary/30 shadow-glow">
            <img src={profilePhoto} alt="Photo de profil" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
            <span className="text-xs font-mono font-bold text-primary-foreground">✓</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <p className="font-mono text-sm text-primary tracking-widest uppercase">Salut, je suis</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Ahmed <span className="text-gradient">Benali</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-xl mx-auto">
            Développeur <span className="text-gradient">Flutter</span> Junior passionné par la création d'applications mobiles élégantes
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex gap-4"
        >
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"
            className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors hover:shadow-glow">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
            className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors hover:shadow-glow">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:ahmed.benali@email.com"
            className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors hover:shadow-glow">
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 animate-float"
        >
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
