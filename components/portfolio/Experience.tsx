"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Full‑Stack Developer",
    company: "KodHub",
    location: "Remote",
    period: "Jan 2026 – Present",
    bullets: [
      "Building dashboards and data-driven interfaces for enterprise clients.",
      "Helped build plugins for LMS systems, extending platform capabilities.",
    ],
  },
  {
    role: "Full‑Stack Web Developer",
    company: "LiteSpace",
    location: "Remote",
    period: "Oct 2024 – Oct 2025",
    bullets: [
      "Implemented a 1-on-1 real-time chat system using WebSockets, enhancing tutor–student communication and engagement.",
      "Led the redesign of mobile layout and navigation flow, improving user experience and increasing mobile lesson bookings by 40%.",
      "Directed the pricing model transformation from concept through execution and UI redesign, effectively avoiding high operational costs.",
      "Developed analytics dashboards to track lesson attendance, providing data-driven insights for performance monitoring.",
      "Contributed to optimizing video call quality from a UX perspective, reducing user complaints by 80% and improving session reliability.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 ecg-grid-bg">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Experience
          </h2>
          <p className="text-muted-foreground">
            Where I&apos;ve made an impact
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-primary/30" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative mb-12 last:mb-0 pl-12 md:pl-0 w-full `}
            >
              {/* Dot */}
              <div
                className={`absolute top-1 left-2.5 md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full bg-primary ring-4 ring-background`}
              />

              <div
                className={cn(
                  "rounded-xl md:w-45/100 border border-border bg-card p-5 shadow-sm hover:shadow-md transition-shadow",
                  i % 2 === 0
                    ? "md:ml-auto md:text-left"
                    : "mr-auto md:text-left",
                )}
              >
                <div className="flex items-center gap-2 text-primary font-semibold text-lg mb-1">
                  <Briefcase size={16} />
                  {exp.role}
                </div>
                <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-3">
                  <span className="font-medium text-foreground">
                    {exp.company}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={12} />
                    {exp.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-2">
                  {exp.bullets.map((b, j) => (
                    <li
                      key={j}
                      className="text-sm text-muted-foreground leading-relaxed flex gap-2"
                    >
                      <span className="text-primary mt-1 shrink-0">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
