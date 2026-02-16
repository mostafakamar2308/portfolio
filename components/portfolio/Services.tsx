"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  BarChart3,
  GraduationCap,
  Stethoscope,
  MessageSquare,
  Rocket,
  Plug,
} from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Custom Dashboards",
    description:
      "Real‑time analytics with charts, live data feeds, and interactive visualizations.",
  },
  {
    icon: GraduationCap,
    title: "Learning Management Systems",
    description:
      "Complete platforms with video hosting, exams, progress tracking, and gamification.",
  },
  {
    icon: Stethoscope,
    title: "Medical Simulations",
    description:
      "Interactive 3D/VR tools for training, education, and clinical decision support.",
  },
  {
    icon: MessageSquare,
    title: "Real‑Time Applications",
    description:
      "Chat, collaboration, and live updates powered by WebSockets and modern APIs.",
  },
  {
    icon: Rocket,
    title: "MVP Development",
    description:
      "From idea to deployed product in weeks — full‑stack, production‑ready.",
  },
  {
    icon: Plug,
    title: "API Design & Integration",
    description:
      "RESTful APIs, third‑party services, payment gateways, and webhook systems.",
  },
];

const Services = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl font-bold text-foreground mb-2">
            What I Can Build For You
          </h2>
          <p className="text-sm text-muted-foreground">
            End‑to‑end solutions — from database to polished UI
          </p>
          <div className="w-12 h-1 bg-primary rounded-full mx-auto mt-2" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card rounded-xl border border-border p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <s.icon
                  size={22}
                  className="text-primary group-hover:text-primary-foreground transition-colors"
                />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity text-base"
          >
            Let&apos;s discuss your project →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
