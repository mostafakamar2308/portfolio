"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Linkedin, Github, Send } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });

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
          className="grid md:grid-cols-2 gap-10"
        >
          {/* Links */}
          <div className="flex flex-col gap-5">
            <p className="text-muted-foreground text-sm leading-relaxed font-semibold">
              Available for freelance projects and full‑time opportunities.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Whether you have a project idea, a collaboration opportunity, or
              just want to say hello — I&apos;d love to hear from you.
            </p>
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
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-foreground hover:text-primary transition-colors"
            >
              <Github size={18} className="text-primary" />
              <span className="text-sm font-medium">GitHub</span>
            </a>
          </div>

          {/* Contact form */}
          <form
            action="#"
            method="POST"
            className="flex flex-col gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="px-4 py-3 rounded-lg bg-card border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <input
              type="email"
              placeholder="Your email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="px-4 py-3 rounded-lg bg-card border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <textarea
              rows={4}
              placeholder="Your message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="px-4 py-3 rounded-lg bg-card border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              Send Message <Send size={16} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
