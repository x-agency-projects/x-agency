import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const footerLinks = {
  company: [
    { name: "À propos", href: "/about" },
    { name: "Carrières", href: "/careers" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Stratégie", href: "/services#strategie" },
    { name: "Design", href: "/services#design" },
    { name: "Développement", href: "/services#developpement" },
    { name: "Marketing", href: "/services#marketing" },
  ],
  legal: [
    { name: "Politique de confidentialité", href: "/privacy" },
    { name: "Conditions d'utilisation", href: "/terms" },
    { name: "Mentions légales", href: "/legal" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">X</span>
              </div>
              <span className="text-white text-xl font-semibold">Agency</span>
            </Link>
            <p className="text-white/70 mb-6 text-sm leading-relaxed">
              Nous transformons vos idées en expériences digitales
              exceptionnelles. Stratégie, design et développement au service de
              votre croissance.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-accent transition-colors duration-300"
                  >
                    <Icon size={18} className="text-white" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Entreprise
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Légal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-light/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">
            © 2026 X Agency. Tous droits réservés.
          </p>
          <p className="text-white/50 text-sm mt-4 md:mt-0">
            Créé avec passion à Paris FR
          </p>
        </div>
      </div>
    </footer>
  );
}
