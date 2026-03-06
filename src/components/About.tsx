import { motion } from "framer-motion";
import { Code2, Smartphone, Sparkles } from "lucide-react";

const About = () => {
  const highlights = [
    { icon: Code2, label: "Code propre", desc: "Passionné par les bonnes pratiques" },
    { icon: Smartphone, label: "Mobile First", desc: "Apps iOS & Android avec Flutter" },
    { icon: Sparkles, label: "UI/UX", desc: "Interfaces belles et intuitives" },
  ];

  return (
    <section id="about" className="py-24 px-4">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <p className="font-mono text-sm text-primary tracking-widest uppercase">À propos</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Qui suis-je<span className="text-gradient"> ?</span>
            </h2>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Développeur Flutter passionné par le développement mobile, je suis diplômé en informatique. Autodidacte et curieux, j'ai développé
            plusieurs projets personnels qui m'ont permis de maîtriser les fondamentaux de Flutter/Dart,
            la gestion d'état, et l'intégration d'APIs REST.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Je suis motivé par le travail d'équipe, l'apprentissage continu et la résolution de problèmes.
            Mon objectif est de rejoindre une équipe dynamique où je pourrai contribuer et évoluer rapidement.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors shadow-card group"
              >
                <item.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-1">{item.label}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
