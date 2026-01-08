"use client";

import { motion } from "framer-motion";
// import Link from "next/link";
import Image from "next/image";
// import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Fintech Dashboard",
    client: "NeoBank",
    category: "WEB",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "E-commerce Luxe",
    client: "Maison Élégance",
    category: "E-COMMERCE",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "App Santé Mobile",
    client: "HealthTech Pro",
    category: "MOBILE",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-padding bg-primary-dark">
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
              PORTFOLIO
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Nos dernières{" "}
              <span className="text-accent">réalisations</span>
            </h2>
            <p className="text-white/60 text-lg max-w-3xl mx-auto">
              Découvrez une sélection de projets qui illustrent notre expertise et notre engagement envers l&apos;excellence.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-[#121214] border border-[#1a1a1e] hover:border-accent/50 hover:shadow-2xl transition-all duration-300 hover-lift"
            >
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
                <p className="text-white/60">
                  {project.client}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
