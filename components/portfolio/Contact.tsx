"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, Phone } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-24 px-6 ecg-grid-bg">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Get in Touch
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid md:grid-cols-2 gap-14"
        >
          {/* Links */}
          <div className="flex flex-col gap-5">
            <p className="text-muted-foreground text-xl leading-relaxed font-semibold">
              Available for freelance projects and full-time opportunities.
            </p>
            <p className="text-muted-foreground text-xl leading-relaxed">
              Whether you have a project idea, a collaboration opportunity, or
              just want to say hello , I&apos;d love to hear from you.
            </p>
          </div>
          <div className="flex flex-col gap-5 justify-center">
            <a
              href="mailto:mostafakamar.dev@gmail.com"
              className="inline-flex items-center gap-3 text-foreground hover:text-primary transition-colors"
            >
              <Mail size={18} className="text-primary" />
              <span className="text-sm font-medium">
                mostafakamar.dev@gmail.com
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/mostafa-kamar/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={18} className="text-primary" />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
            <a
              href="https://github.com/mostafakamar2308"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-foreground hover:text-primary transition-colors"
            >
              <Github size={18} className="text-primary" />
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <a
              href="tel:+201018303125"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-foreground hover:text-primary transition-colors"
            >
              <Phone size={18} className="text-primary" />
              <span className="text-sm font-medium">+201018303125</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
