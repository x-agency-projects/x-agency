"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap, Users, BarChart3, CheckSquare } from "lucide-react";

const products = [
  {
    id: 1,
    name: "NexFlow",
    type: "Plateforme Web",
    status: "Disponible",
    statusColor: "bg-green-500",
    icon: Zap,
    iconColor: "bg-accent",
    description: "Plateforme de gestion de projet tout-en-un",
    fullDescription:
      "Une solution complète pour gérer vos projets, équipes et workflows. Collaboration en temps réel, tableaux Kanban, et analytics avancés.",
    features: [
      "Gestion de tâches",
      "Collaboration temps réel",
      "Rapports automatisés",
      "Intégrations API",
    ],
    users: "2K+ utilisateurs",
    rating: "4.7",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    name: "ConnectHub",
    type: "Application Mobile",
    status: "Disponible",
    statusColor: "bg-green-500",
    icon: Users,
    iconColor: "bg-blue-500",
    description: "Application mobile de networking professionnel",
    fullDescription:
      "Connectez-vous avec des professionnels de votre secteur, partagez vos expertises et développez votre réseau de manière intelligente.",
    features: [
      "Matching intelligent",
      "Chat sécurisé",
      "Événements virtuels",
      "Profils vérifiés",
    ],
    users: "12K+ utilisateurs",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    name: "DataViz Pro",
    type: "Plateforme Web",
    status: "Beta",
    statusColor: "bg-green-500",
    icon: BarChart3,
    iconColor: "bg-green-500",
    description: "Visualisation de données en temps réel",
    fullDescription:
      "Transformez vos données brutes en insights visuels percutants. Dashboards personnalisables et rapports automatisés.",
    features: [
      "Dashboards dynamiques",
      "Export multi-format",
      "Alertes intelligentes",
      "Connecteurs data",
    ],
    users: "2K+ utilisateurs",
    rating: "4.7",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    name: "TaskMate",
    type: "Application Mobile",
    status: "Disponible",
    statusColor: "bg-green-500",
    icon: CheckSquare,
    iconColor: "bg-orange-500",
    description: "Assistant personnel de productivité",
    fullDescription:
      "Une application mobile qui vous aide à organiser votre quotidien, gérer vos habitudes et atteindre vos objectifs personnels.",
    features: [
      "Suivi d'habitudes",
      "Rappels intelligents",
      "Statistiques détaillées",
      "Mode focus",
    ],
    users: "8K+ utilisateurs",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
  },
];

function Products() {
  return (
    <div className="pt-20 bg-primary-dark">
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
              Nos Produits
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Des solutions <span className="text-accent">innovantes</span>{" "}
              créées par X Agency
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Découvrez nos plateformes et applications mobiles développées en
              interne, conçues pour répondre aux défis modernes des entreprises
              et des particuliers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-primary-dark">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[#121214] rounded-2xl p-8 border border-[#1a1a1e] hover:border-accent/50 transition-all duration-300 hover-lift"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-14 h-14 ${product.iconColor} rounded-xl flex items-center justify-center`}
                      >
                        <Icon className="text-white" size={28} />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-white">
                          {product.name}
                        </h2>
                        <p className="text-white/60 text-sm">{product.type}</p>
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 ${product.statusColor} text-white text-xs font-semibold rounded-full`}
                    >
                      {product.status}
                    </span>
                  </div>

                  <p className="text-white/80 mb-4 font-medium">
                    {product.description}
                  </p>
                  <p className="text-white/60 mb-6 text-sm leading-relaxed">
                    {product.fullDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary-light/30 text-white/80 text-xs rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-primary-light/20">
                    <div className="flex items-center space-x-4">
                      <span className="text-white/60 text-sm">
                        {product.users}
                      </span>
                      <div className="flex items-center space-x-1">
                        <span className="text-white font-semibold">
                          {product.rating}
                        </span>
                        <span className="text-yellow-400">★</span>
                      </div>
                    </div>
                    <Link
                      href="#"
                      className="inline-flex items-center space-x-2 px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-all duration-300 text-sm font-semibold"
                    >
                      <span>Découvrir</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-accent text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Une idée de produit ?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Nous pouvons également développer des solutions sur mesure pour
              votre entreprise. Parlons de votre projet.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-primary-dark text-white rounded-lg font-semibold hover:bg-primary-light transition-all duration-300 hover-lift shadow-lg"
            >
              <span>Discutons de votre projet</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Products;
