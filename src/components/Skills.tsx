import { motion } from "framer-motion";

const skills = [
  { category: "Mobile", items: [
    { name: "Flutter", level: 80 },
    { name: "Dart", level: 75 },
    { name: "Android (Kotlin)", level: 40 },
  ]},
  { category: "State Management", items: [
    { name: "Provider", level: 75 },
    { name: "Riverpod", level: 60 },
    { name: "Bloc/Cubit", level: 50 },
  ]},
  { category: "Backend & Outils", items: [
    { name: "Firebase", level: 70 },
    { name: "REST APIs", level: 75 },
    { name: "Git / GitHub", level: 80 },
  ]},
  { category: "Autres", items: [
    { name: "UI/UX Design", level: 60 },
    { name: "Tests unitaires", level: 50 },
    { name: "CI/CD", level: 35 },
  ]},
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <p className="font-mono text-sm text-primary tracking-widest uppercase">Compétences</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Stack <span className="text-gradient">technique</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((category, ci) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: ci * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border shadow-card space-y-4"
              >
                <h3 className="font-mono text-sm text-primary font-semibold tracking-wider">{category.category}</h3>
                <div className="space-y-3">
                  {category.items.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex justify-between text-sm">
                        <span>{skill.name}</span>
                        <span className="text-muted-foreground font-mono">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                          className="h-full rounded-full bg-gradient-primary"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
