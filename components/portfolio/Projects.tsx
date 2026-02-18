"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github } from "lucide-react";

const projects = [
  {
    title: "AI Virtual Patient Simulator",
    description:
      "A complete full-stack application where medical students practice clinical situations. Integrated Gemini AI and Google Text-to-Speech for creation of voice based simulation to enhance realism. Integrated mutliple steps in each scenario from history, examination to investigation and diagnosis. Implemented of the feedback system for students.  Piloted with 250+ students.",
    tech: ["React", "Node.js", "WebSockets", "PostgreSQL", "Tailwind"],
    github: "https://github.com/mostafakamar2308/med-simulate",
  },
  {
    title: "El-Ameed LMS",
    description:
      "End-to-end learning management system supporting 250+ active students. Built with Next.js frontend, Prisma ORM, and PostgreSQL. Features: secure video hosting, exam creation and auto-grading, gamified leaderboards, WhatsApp notifications via baileys library, and role-based access for students, instructors, and admins.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Zustand", "Tailwind"],
    github: "https://github.com/mostafakamar2308/lms",
  },
  {
    title: "LiteSpace",
    description:
      "Cambly/Preply like Platform for learning English via 1 on 1 video calls with tutors. Implementing Real time Video Calls and Chats, Dynamic Booking systems End to End. Created Admin Dashboards for Analytics and Fine Tracking of the sessions to enhance business metrics",
    tech: [
      "React",
      "Node.js",
      "WebSockets",
      "Knex",
      "Tailwind Css",
      "PostgreSQL",
    ],
    github: "https://github.com/mostafakamar2308/lms",
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
              <div className="flex gap-4 items-center justify-center mt-auto">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-secondary px-4 py-2 rounded-lg gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
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
