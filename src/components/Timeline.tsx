"use client";

import { motion } from "framer-motion";
import {
  Search,
  PenTool,
  Code2,
  Rocket,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Audit & Stratégie",
    description:
      "Analyse approfondie de votre écosystème digital, identification des opportunités et définition d'une stratégie sur mesure.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Design & Prototypage",
    description:
      "Création de maquettes haute fidélité, prototypage interactif et validation des parcours utilisateurs avant développement.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Développement",
    description:
      "Développement agile avec technologies de pointe, tests continus et intégration des meilleures pratiques du marché.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Lancement & Optimisation",
    description:
      "Déploiement sécurisé, formation des équipes, suivi des performances et optimisation continue pour garantir le succès.",
  },
];

export default function Timeline() {
  return (
    <section id="process" className="section-padding bg-primary-dark text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="mb-4">
            <p className="text-accent text-sm uppercase tracking-wider font-semibold mb-2">
              NOTRE PROCESSUS
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Comment nous{" "}
              <span className="text-accent">travaillons</span>
            </h2>
            <p className="text-white/60 text-lg max-w-3xl mx-auto">
              Une méthodologie éprouvée pour transformer vos idées en solutions digitales performantes.
            </p>
          </div>
        </motion.div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Number Badge - Above the card */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex justify-center mb-4"
                  >
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {step.number}
                    </div>
                  </motion.div>

                  {/* Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="group bg-[#121214] rounded-2xl p-8 border border-primary-light/10 hover:border-accent/50 transition-all duration-300"
                  >
                    {/* Icon */}
                    <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6 mx-auto border border-accent/20 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="text-accent" size={28} />
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-white text-center">
                      {step.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed text-center">
                      {step.description}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
