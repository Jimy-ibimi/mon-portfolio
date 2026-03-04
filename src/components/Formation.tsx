import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const formations = [
  {
    icon: GraduationCap,
    title: "Licence en Informatique",
    institution: "Université des Sciences et Technologies",
    period: "2021 – 2024",
    description: "Formation complète en algorithmique, POO, bases de données et développement mobile.",
  },
  {
    icon: Award,
    title: "Certification Flutter & Dart",
    institution: "Udemy – Maximilian Schwarzmüller",
    period: "2024",
    description: "Formation complète Flutter : widgets, navigation, state management, Firebase, REST APIs.",
  },
  {
    icon: BookOpen,
    title: "Google Developer Essentials",
    institution: "Google – Coursera",
    period: "2024",
    description: "Fondamentaux du développement Android et bonnes pratiques Material Design.",
  },
];

const Formation = () => {
  return (
    <section id="formation" className="py-24 px-4">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <p className="font-mono text-sm text-primary tracking-widest uppercase">Formation</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Parcours <span className="text-gradient">académique</span>
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

            <div className="space-y-8">
              {formations.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative flex gap-4 md:gap-8"
                >
                  {/* Timeline dot */}
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-card border-2 border-primary/30 flex items-center justify-center shadow-glow md:absolute md:left-1/2 md:-translate-x-1/2">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>

                  <div className="flex-1 p-5 rounded-xl bg-card border border-border shadow-card md:w-[calc(50%-3rem)] md:ml-auto">
                    <span className="font-mono text-xs text-primary">{item.period}</span>
                    <h3 className="font-bold mt-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-0.5">{item.institution}</p>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Formation;
