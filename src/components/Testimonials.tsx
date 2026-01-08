"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Marie B.",
    role: "CEO",
    company: "TechSolutions",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    text: "Nexus a transformé notre vision en une plateforme exceptionnelle. Leur expertise technique et leur sens du design ont dépassé toutes nos attentes.",
  },
  {
    id: 2,
    name: "Thomas C.",
    role: "Directeur Digital",
    company: "Innovatech",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    text: "Un partenariat remarquable. L'équipe a su comprendre nos enjeux métier et livrer une solution parfaitement adaptée à nos besoins.",
  },
  {
    id: 3,
    name: "Thomas C.",
    role: "Directeur Digital",
    company: "Innovatech",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    text: "Un partenariat remarquable. L'équipe a su comprendre nos enjeux métier et livrer une solution parfaitement adaptée à nos besoins.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-primary-dark">
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
              TÉMOIGNAGES
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ce que disent{" "}
              <span className="text-accent">nos clients</span>
            </h2>
            <p className="text-white/60 text-lg">
              La satisfaction de nos clients est notre plus grande fierté.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#121214] rounded-2xl p-8 border border-primary-light/10 hover:border-accent/50 transition-all duration-300 hover-lift relative"
            >
              {/* Stars - Top Left */}
              <div className="flex space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-accent text-accent"
                  />
                ))}
              </div>
              
              {/* Quote Icon - Top Right */}
              <div className="absolute top-8 right-8">
                <Quote className="text-accent" size={56} strokeWidth={1.5} />
              </div>

              {/* Testimonial Text */}
              <p className="text-white text-base mb-8 leading-relaxed pr-12">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author Info */}
              <div className="flex items-center space-x-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">{testimonial.name}</h4>
                  <p className="text-white/60 text-xs">
                    {testimonial.role} <span className="text-accent">•</span> {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
