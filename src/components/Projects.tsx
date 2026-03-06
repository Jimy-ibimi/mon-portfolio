import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import projectWeather from "@/assets/project-weather.jpg";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectTodo from "@/assets/project-todo.jpg";
import projectinscription from "@/assets/inscription.jpg";

const projects = [
  {
    title: "PokeDex",
    description: "Application de recherche de pokémons avec détails, images, statistiques et crie. Connectées à l'API PokeAPI.",
    image: projectWeather,
    techs: ["Flutter", "Dart", "Provider", "REST API"],
    github: "https://github.com/Jimy-ibimi/pokedex",
    learned: "Gestion d'APIs, gestion d'état, animations custom"
  },
  {
    title: "Devmoi",
    description: "Application de gestion des établissements commerciaux. Permet aux utilisateurs de consulter les établissements, de s'inscrire et  de creer des établissements. vous pouvez gerer les établissements, les utilisateurs comme administrateur en commençant par la création d'un compte administrateur cela vous permettra d'accéder à des fonctionnalités avancées de gestion des établissements et des utilisateurs. Vous pourrez créer, modifier et supprimer des établissements, ainsi que gérer les utilisateurs associés à ces établissements comme par exemple un caissier. Connectée à Firebase pour l'authentification et la base de données.",
    image: projectEcommerce,
    techs: ["Flutter", "Firebase", "Provider"],
    github: "https://github.com/Jimy-ibimi/devmoi_code_source",
    learned: "Architecture MVVM, Firebase Auth & Firestore"
  },
  {
    title: "todolist-sqlite",
    description: "Application de gestion de tâches avec catégories.",
    image: projectTodo,
    techs: ["Flutter", "SQLite", "Provider"],
    github: "https://github.com/Jimy-ibimi/todolist-sqlite",
    learned: "Stockage local, notifications push, Bloc pattern"
  },{
    title: "inscription",
    description: "Application de gestion des inscriptions des étudiants a l'université en ligne. Permet aux étudiants de s'inscrire en ligne, de consulter les sections disponibles et de suivre l'état de leur inscription. Connectée à Supabase pour le stockage des données. L'application offre également une interface d'administration pour gérer les sections, les inscriptions et les utilisateurs.",
    image: projectinscription,
    techs: ["Flutter", "SQLite", "Provider"],
    github: "https://github.com/Jimy-ibimi/inscription",
    learned: "Stockage en cloud, gestion des données image, authentification avec Supabase, gestion des rôles (étudiant, administrateur), gestion des sections et des inscriptions"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <p className="font-mono text-sm text-primary tracking-widest uppercase">Projets</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Mes <span className="text-gradient">réalisations</span>
            </h2>
          </div>

          <div className="space-y-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-xl bg-card border border-border shadow-card overflow-hidden hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-64 h-56 md:h-auto flex-shrink-0 overflow-hidden bg-secondary">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                        className="p-2 rounded-lg hover:bg-secondary transition-colors">
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.techs.map((tech) => (
                        <span key={tech} className="px-3 py-1 text-xs font-mono rounded-full bg-primary/10 text-primary border border-primary/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      <span className="text-primary font-mono">→</span> Apprentissage : {project.learned}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
