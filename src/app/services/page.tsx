"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  Palette,
  Code,
  Smartphone,
  TrendingUp,
  BarChart3,
  Check,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Lightbulb,
    iconColor: "bg-yellow-500",
    title: "Stratégie Digitale",
    description:
      "Nous analysons votre marché et définissons une stratégie sur-mesure pour atteindre vos objectifs.",
    features: [
      "Audit complet",
      "Analyse concurrentielle",
      "Roadmap digitale",
      "KPIs & métriques",
    ],
  },
  {
    icon: Palette,
    iconColor: "bg-pink-500",
    title: "Design UI/UX",
    description:
      "Création d'interfaces utilisateur intuitives et esthétiques qui engagent vos utilisateurs.",
    features: [
      "User research",
      "Wireframes & maquettes",
      "Design system",
      "Prototypage interactif",
    ],
  },
  {
    icon: Code,
    iconColor: "bg-blue-500",
    title: "Développement Web",
    description:
      "Applications web performantes et évolutives avec les technologies les plus modernes.",
    features: [
      "Sites vitrines",
      "Applications web",
      "E-commerce",
      "API & intégrations",
    ],
  },
  {
    icon: Smartphone,
    iconColor: "bg-green-500",
    title: "Applications Mobile",
    description: "Applications natives et cross-platform pour iOS et Android.",
    features: [
      "iOS & Android natif",
      "React Native",
      "Flutter",
      "Progressive Web Apps",
    ],
  },
  {
    icon: TrendingUp,
    iconColor: "bg-accent",
    title: "Marketing Digital",
    description:
      "Stratégies d'acquisition et de fidélisation pour maximiser votre ROI.",
    features: [
      "SEO & SEA",
      "Content Marketing",
      "Email Marketing",
      "A/B Testing",
      "Reporting",
    ],
  },
  {
    icon: BarChart3,
    iconColor: "bg-blue-500",
    title: "Analytics & Data",
    description:
      "Analyse de données, tableaux de bord personnalisés et insights actionnables pour prendre des décisions éclairées.",
    features: ["Dashboards", "Reporting", "A/B testing", "Data visualization"],
  },
];

function Services() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-primary-dark">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-block px-4 py-2 bg-accent/20 text-accent text-sm font-semibold rounded-full mb-4  tracking-wider">
              Nos services
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Des solutions complètes pour votre{" "}
              <span className="text-accent">transformation digitale</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              De la stratégie au déploiement, nous vous accompagnons à chaque
              étape avec une expertise pointue et une approche personnalisée.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-primary-dark">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[#121214] rounded-2xl p-8 border border-[#1a1a1e] hover:border-accent/50 transition-all duration-300 hover-lift"
                >
                  <div
                    className={`w-14 h-14 ${service.iconColor} rounded-xl flex items-center justify-center mb-6`}
                  >
                    <Icon className="text-white" size={28} />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    {service.title}
                  </h2>
                  <p className="text-white/70 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full flex-shrink-0 mt-1">
                          <Check size={18} className="text-accent" />
                        </span>

                        <span className="text-white/90 text-base">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-dark">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Prêt à démarrer votre projet ?
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Contactez-nous pour discuter de vos besoins et obtenir un devis
              personnalisé.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-accent to-purple-600 text-white rounded-lg font-semibold hover:opacity-90 transition-all duration-300 hover-lift shadow-lg"
            >
              <span>Demander un devis</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Services;
