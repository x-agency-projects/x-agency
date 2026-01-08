"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Clock,
  Linkedin,
  Twitter,
  Instagram,
  Dribbble,
  ArrowRight,
} from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(
      "Merci pour votre message ! Nous vous répondrons dans les plus brefs délais."
    );
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="section-padding bg-primary-dark">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-accent/20 text-accent text-sm font-semibold rounded-full mb-4  tracking-wider">
            Contact
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Discutons de votre <span className="text-accent">projet</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Vous avez une idée, un projet ou simplement des questions ? Notre
            équipe est là pour vous accompagner.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8 bg-primary-card rounded-2xl p-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Nos coordonnées
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm mb-1">Email</p>
                    <a
                      href="mailto:hello@x-agency.fr"
                      className="text-white hover:text-accent transition-colors"
                    >
                      hello@x-agency.fr
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm mb-1">Téléphone</p>
                    <a
                      href="tel:+33123456789"
                      className="text-white hover:text-accent transition-colors"
                    >
                      +33 1 23 45 67 89
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm mb-1">Adresse</p>
                    <p className="text-white">
                      123 Avenue des Champs-Élysées, 75008 Paris
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm mb-1">Horaires</p>
                    <p className="text-white">Lun - Ven : 9h - 18h</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Suivez-nous
              </h4>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: Linkedin, label: "LinkedIn" },
                  { icon: Twitter, label: "Twitter" },
                  { icon: Instagram, label: "Instagram" },
                  { icon: Dribbble, label: "Dribbble" },
                ].map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href="#"
                      aria-label={social.label}
                      className="px-4 py-2 bg-primary border border-primary-light/20 rounded-lg text-white hover:border-accent hover:text-accent transition-all duration-300 flex items-center space-x-2"
                    >
                      <Icon size={16} />
                      <span className="text-sm">{social.label}</span>
                      <ArrowRight size={12} />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-primary-card rounded-2xl p-8"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                Envoyez-nous un message
              </h3>
              <p className="text-white/70">
                Remplissez le formulaire ci-dessous et nous vous répondrons sous
                24h.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("firstName")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Jean"
                    className={`w-full px-4 py-3 bg-primary-light border rounded-lg text-white placeholder-white/50 focus:outline-none transition-all ${
                      focusedField === "firstName"
                        ? "border-accent"
                        : "border-primary-light/20"
                    }`}
                  />
                  <label className="block text-white/60 text-sm mt-1">
                    Prénom
                  </label>
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("lastName")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Dupont"
                    className={`w-full px-4 py-3 bg-primary-light border rounded-lg text-white placeholder-white/50 focus:outline-none transition-all ${
                      focusedField === "lastName"
                        ? "border-accent"
                        : "border-primary-light/20"
                    }`}
                  />
                  <label className="block text-white/60 text-sm mt-1">
                    Nom
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="jean@exemple.fr"
                    className={`w-full px-4 py-3 bg-primary-light border rounded-lg text-white placeholder-white/50 focus:outline-none transition-all ${
                      focusedField === "email"
                        ? "border-accent"
                        : "border-primary-light/20"
                    }`}
                  />
                  <label className="block text-white/60 text-sm mt-1">
                    Email
                  </label>
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("phone")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="+33 6 12 34 56 78"
                    className={`w-full px-4 py-3 bg-primary-light border rounded-lg text-white placeholder-white/50 focus:outline-none transition-all ${
                      focusedField === "phone"
                        ? "border-accent"
                        : "border-primary-light/20"
                    }`}
                  />
                  <label className="block text-white/60 text-sm mt-1">
                    Téléphone (optionnel)
                  </label>
                </div>
              </div>

              <div>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("company")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Nom de votre entreprise"
                  className={`w-full px-4 py-3 bg-primary-light border rounded-lg text-white placeholder-white/50 focus:outline-none transition-all ${
                    focusedField === "company"
                      ? "border-accent"
                      : "border-primary-light/20"
                  }`}
                />
                <label className="block text-white/60 text-sm mt-1">
                  Entreprise (optionnel)
                </label>
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("subject")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Comment pouvons-nous vous aider?"
                  className={`w-full px-4 py-3 bg-primary-light border rounded-lg text-white placeholder-white/50 focus:outline-none transition-all ${
                    focusedField === "subject"
                      ? "border-accent"
                      : "border-primary-light/20"
                  }`}
                />
                <label className="block text-white/60 text-sm mt-1">
                  Sujet
                </label>
              </div>

              <div>
                <textarea
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Décrivez votre projet en détail..."
                  className={`w-full px-4 py-3 bg-primary-light border rounded-lg text-white placeholder-white/50 focus:outline-none transition-all resize-none ${
                    focusedField === "message"
                      ? "border-accent"
                      : "border-primary-light/20"
                  }`}
                />
                <label className="block text-white/60 text-sm mt-1">
                  Message
                </label>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-all duration-300 hover-lift flex items-center justify-center space-x-2 shadow-lg"
              >
                <span>Envoyer le message</span>
                <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
