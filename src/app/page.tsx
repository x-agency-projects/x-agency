import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Timeline from "@/components/Timeline";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import BlogPreview from "@/components/BlogPreview";
import ContactForm from "@/components/ContactForm";
export default function Home() {
  return (
     <>
      <Hero />
      <Services />
      <Portfolio />
      <Timeline />
      <Testimonials />
      <CTA />
      <BlogPreview />
      <ContactForm />
    </>
  );
}
