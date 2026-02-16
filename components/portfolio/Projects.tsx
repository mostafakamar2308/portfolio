"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AI Virtual Patient Simulator",
    description:
      "A complete full‑stack application where medical students practice patient interviews. Frontend: React/Three.js with 3D character animation and voice UI. Backend: Node.js API, WebSocket server for real‑time dialogue, PostgreSQL database for patient cases and student responses. Integrated Gemini AI and Google Text‑to‑Speech. Piloted with 250+ students.",
    tech: [
      "React",
      "Node.js",
      "WebSockets",
      "PostgreSQL",
      "Three.js",
      "Tailwind",
    ],
    demo: "#",
    github: "#",
  },
  {
    title: "El‑Ameed LMS",
    description:
      "End‑to‑end learning management system supporting 250+ active students. Built with Next.js frontend, Prisma ORM, and PostgreSQL. Features: secure video hosting, exam creation and auto‑grading, gamified leaderboards, WhatsApp notifications via webhooks, and role‑based access for students, instructors, and admins.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Zustand", "Tailwind"],
    demo: "#",
    github: "#",
  },
  {
    title: "Tutor Chat & Booking",
    description:
      "Real‑time communication and scheduling system for a 1‑on‑1 tutoring platform. Designed and implemented the full stack: WebSocket server for instant messaging, Node.js REST APIs for booking management, database schema for conversations and user availability, and responsive React UI. Mobile redesign increased bookings by 40%.",
    tech: ["React", "Node.js", "WebSockets", "Knex", "PostgreSQL"],
    github: "#",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-24 px-6 ecg-grid-bg">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Featured Projects
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group bg-card rounded-xl border border-border p-6 flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Thumbnail placeholder */}
              <div className="w-full h-40 rounded-lg bg-secondary mb-5 flex items-center justify-center overflow-hidden">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="hsl(var(--muted-foreground))"
                  strokeWidth="1"
                  className="opacity-40"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
              </div>

              <h3 className="text-lg font-bold text-foreground mb-2">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {p.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full bg-accent text-accent-foreground font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 mt-auto">
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                  >
                    Live Demo <ExternalLink size={14} />
                  </a>
                )}
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    GitHub <Github size={14} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
