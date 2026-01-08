"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Fintech Dashboard",
    client: "NeoBank",
    category: "WEB",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
  },
  {
    id: 2,
    title: "E-commerce Luxe",
    client: "Maison Élégance",
    category: "E-COMMERCE",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop",
  },
  {
    id: 3,
    title: "App Santé Mobile",
    client: "HealthTech Pro",
    category: "MOBILE",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=800&fit=crop",
  },
  {
    id: 4,
    title: "Plateforme SaaS",
    client: "CloudFlow",
    category: "WEB",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=800&fit=crop",
  },
  {
    id: 5,
    title: "Identité Visuelle",
    client: "Artisan Coffee",
    category: "BRANDING",
    image:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=1200&h=800&fit=crop",
  },
  {
    id: 6,
    title: "App Fitness",
    client: "FitLife",
    category: "MOBILE",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=800&fit=crop",
  },
];

const filters = ["Tous", "Web", "Mobile", "E-commerce", "Branding"];

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("Tous");

  const filteredProjects =
    activeFilter === "Tous"
      ? projects
      : projects.filter((p) =>
          p.category.toLowerCase().includes(activeFilter.toLowerCase())
        );
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
              Portfolio
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Nos <span className="text-accent">réalisations</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
              Découvrez une sélection de projets qui illustrent notre expertise
              et notre engagement envers l&apos;excellence.
            </p>

            {/* Filters */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeFilter === filter
                      ? "bg-accent text-white"
                      : "bg-[#121214] text-white/70 hover:text-white border border-[#1a1a1e] hover:border-accent/50"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-primary-dark">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-[#121214] border border-[#1a1a1e] hover:border-accent/50 hover:shadow-2xl transition-all duration-300 hover-lift"
              >
                <Link href={`/portfolio/${project.id}`}>
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-xs font-semibold rounded mb-3 uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-white/60">{project.client}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
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
              Votre projet pourrait être le prochain
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Parlons de vos ambitions et créons ensemble quelque chose
              d&apos;exceptionnel.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-all duration-300 hover-lift shadow-lg"
            >
              <span>Démarrer un projet</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio