"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="section-padding bg-accent text-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
              <Sparkles className="text-white" size={32} />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Prêt à donner vie à votre projet ?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-2xl mx-auto">
            Discutons de vos ambitions et transformons-les en réalité digitale.
          </p>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Premier rendez-vous gratuit et sans engagement.
          </p>
          
          {/* Two Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-primary-dark rounded-lg font-semibold hover:bg-neutral-offwhite transition-all duration-300 hover-lift shadow-lg"
            >
              <span>Planifier un appel</span>
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-accent/80 text-white rounded-lg font-semibold hover:bg-accent transition-all duration-300 hover-lift border border-white"
            >
              <span>Découvrir nos projets</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
