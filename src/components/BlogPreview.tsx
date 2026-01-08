"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Les tendances UX/UI à adopter en 2024",
    excerpt:
      "Découvrez les nouvelles approches design qui transforment l'expérience utilisateur cette année.",
    date: "15 Jan 2024",
    readTime: "5 min",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
    category: "Design",
  },
  {
    id: 2,
    title: "Comment l'IA révolutionne le développement web",
    excerpt:
      "Exploration des outils et techniques d'IA qui changent la façon dont nous développons.",
    date: "10 Jan 2024",
    readTime: "8 min",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    category: "Tech",
  },
  {
    id: 3,
    title: "Stratégies de growth marketing pour startups",
    excerpt:
      "Les meilleures pratiques pour faire croître votre startup rapidement et efficacement.",
    date: "5 Jan 2024",
    readTime: "6 min",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    category: "Marketing",
  },
];

export default function BlogPreview() {
  return (
    <section id="blog" className="section-padding bg-primary-dark">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between mb-16"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Derniers <span className="gradient-text">articles</span>
            </h2>
            <p className="text-white/70 text-lg max-w-2xl">
              Découvrez nos derniers articles sur le design, le développement et
              les tendances du digital.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center space-x-2 text-accent hover:text-accent/80 font-semibold transition-colors mt-4 md:mt-0"
          >
            <span>Voir tous les articles</span>
            <ArrowRight size={20} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-[#121214] rounded-2xl overflow-hidden border border-[#1a1a1e] hover:border-accent/50 transition-all duration-300 hover-lift"
            >
              <Link href={`/blog/${post.id}`}>
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-accent text-white text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-white/60 text-sm mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-white/70 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="inline-flex items-center space-x-2 text-accent font-semibold group-hover:space-x-3 transition-all">
                    <span>Lire l&apos;article</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
