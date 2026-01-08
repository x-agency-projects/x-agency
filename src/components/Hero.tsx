"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary-dark pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Additional abstract shapes */}
        <motion.div
          className="absolute top-1/2 left-1/4 w-32 h-32 bg-accent/10 rounded-lg blur-2xl"
          animate={{
            rotate: [0, 90, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            <p className="mb-4">
              <span className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-accent/20 text-accent text-sm tracking-wider font-semibold shadow-sm">
                <span className="inline-flex items-center justify-center w-3 h-3 bg-accent/10 rounded-full">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                </span>
                Agence digitale premium
              </span>
            </p>
            Créons ensemble des{" "}
            <span className="text-accent">expériences digitales</span>{" "}
            exceptionnelles
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto"
          >
            De la stratégie au déploiement, nous vous accompagnons à chaque
            étape avec une expertise pointue et une approche personnalisée.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <Link
              href="/services"
              className="group px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-all duration-300 hover-lift flex items-center space-x-2 shadow-lg"
            >
              <span>Découvrir nos services</span>
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-lg font-semibold hover:border-white hover:bg-white/10 transition-all duration-300 hover-lift flex items-center space-x-2"
            >
              <Play size={20} />
              <span>Voir nos réalisations</span>
            </Link>
          </motion.div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            {[
              { number: "150+", label: "Projets livrés" },
              { number: "50+", label: "Clients satisfaits" },
              { number: "17+", label: "Années cumulatives" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/70 text-lg">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
