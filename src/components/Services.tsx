"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  Palette,
  Code,
  Smartphone,
  TrendingUp,
  BarChart3,
} from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    iconColor: "bg-yellow-500",
    title: "Stratégie Digitale",
    description:
      "Audit complet, analyse de marché et définition d'une roadmap digitale alignée avec vos objectifs business.",
  },
  {
    icon: Palette,
    iconColor: "bg-pink-500",
    title: "Design UI/UX",
    description:
      "Création d'interfaces élégantes et intuitives qui offrent une expérience utilisateur mémorable.",
  },
  {
    icon: Code,
    iconColor: "bg-blue-500",
    title: "Développement Web",
    description:
      "Solutions web performantes, scalables et sécurisées utilisant les dernières technologies.",
  },
  {
    icon: Smartphone,
    iconColor: "bg-green-500",
    title: "Applications Mobile",
    description:
      "Applications natives et cross-platform pour iOS et Android avec une expérience utilisateur optimale.",
  },
  {
    icon: TrendingUp,
    iconColor: "bg-accent",
    title: "Marketing Digital",
    description:
      "Stratégies de croissance, SEO, publicité ciblée et optimisation de conversion pour maximiser votre ROI.",
  },
  {
    icon: BarChart3,
    iconColor: "bg-blue-500",
    title: "Analytics & Data",
    description:
      "Analyse de données, tableaux de bord personnalisés et insights actionnables pour prendre des décisions éclairées.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Services() {
  return (
    <section id="services" className="section-padding bg-primary-dark">
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
              NOS SERVICES
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Une expertise complète pour vos{" "}
              <span className="text-accent">projets digitaux</span>
            </h2>
            <p className="text-white/60 text-lg max-w-3xl mx-auto">
              Des solutions sur-mesure pour transformer vos idées en succès digitaux.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group p-8 bg-[#121214] rounded-2xl border border-[#1a1a1e] hover:border-accent/50 transition-all duration-300 hover-lift"
              >
                <div
                  className={`w-14 h-14 ${service.iconColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
