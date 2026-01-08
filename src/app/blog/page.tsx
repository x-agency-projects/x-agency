"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight, Tag } from "lucide-react";

const featuredPost = {
  id: 1,
  title: "Les tendances UX/UI à adopter en 2024",
  excerpt:
    "Découvrez les nouvelles approches design qui transforment l'expérience utilisateur cette année. Des interfaces minimalistes aux micro-interactions sophistiquées.",
  date: "15 Jan 2024",
  readTime: "5 min",
  category: "Design",
  image:
    "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop",
};

const blogPosts = [
  {
    id: 2,
    title: "Comment l'IA révolutionne le développement web",
    excerpt:
      "Exploration des outils et techniques d'IA qui changent la façon dont nous développons.",
    date: "10 Jan 2024",
    readTime: "8 min",
    category: "Tech",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Stratégies de growth marketing pour startups",
    excerpt:
      "Les meilleures pratiques pour faire croître votre startup rapidement et efficacement.",
    date: "5 Jan 2024",
    readTime: "6 min",
    category: "Marketing",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Optimiser les performances de votre application React",
    excerpt:
      "Techniques avancées pour améliorer les performances et l'expérience utilisateur.",
    date: "28 Déc 2023",
    readTime: "7 min",
    category: "Tech",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    title: "Design system : Les meilleures pratiques",
    excerpt:
      "Comment créer et maintenir un design system efficace pour vos projets.",
    date: "20 Déc 2023",
    readTime: "9 min",
    category: "Design",
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    title: "Marketing digital 2024 : Tendances et stratégies",
    excerpt:
      "Les tendances marketing à suivre cette année pour maximiser votre impact.",
    date: "15 Déc 2023",
    readTime: "6 min",
    category: "Marketing",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
  },
];


function Blog() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-primary-dark">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-accent/20 text-accent text-sm font-semibold rounded-full mb-4  tracking-wider">
              Blog
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Actualités & <span className="gradient-text">Insights</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Découvrez nos derniers articles sur le design, le développement et
              les tendances du digital.
            </p>
          </motion.div>

          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#121214] rounded-2xl overflow-hidden border border-[#1a1a1e] mb-16"
          >
            <Link href={`/blog/${featuredPost.id}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 bg-accent text-white text-sm font-medium rounded-full mb-4 w-fit">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center space-x-4 text-white/60 text-sm mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{featuredPost.date}</span>
                    </div>
                    <span>•</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-white/70 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="inline-flex items-center space-x-2 text-accent font-semibold hover:space-x-3 transition-all">
                    <span>Lire l&apos;article</span>
                    <ArrowRight size={20} />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding bg-primary-dark">
        <div className="container-custom">
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
                      <span className="px-3 py-1 bg-accent text-white text-sm font-medium rounded-full flex items-center space-x-1">
                        <Tag size={12} />
                        <span>{post.category}</span>
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
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-white/70 mb-4 line-clamp-3 text-sm">
                      {post.excerpt}
                    </p>
                    <div className="inline-flex items-center space-x-2 text-accent font-semibold group-hover:space-x-3 transition-all text-sm">
                      <span>Lire</span>
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
