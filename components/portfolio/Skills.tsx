"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    label: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 88 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind", level: 92 },
      { name: "Zustand", level: 80 },
      { name: "Three.js", level: 75 },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express", level: 85 },
      { name: "Prisma", level: 82 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 72 },
      { name: "WebSockets", level: 80 },
    ],
  },
  {
    label: "DevOps & Tools",
    skills: [
      { name: "Git", level: 92 },
      { name: "CI/CD", level: 75 },
      { name: "Docker", level: 65 },
      { name: "Vercel", level: 88 },
      { name: "Figma", level: 78 },
    ],
  },
  {
    label: "Domain Expertise",
    skills: [
      { name: "EdTech", level: 92 },
      { name: "Medical Sim", level: 88 },
      { name: "Product Thinking", level: 80 },
      { name: "Healthcare IT", level: 75 },
    ],
  },
];

const VitalBar = ({
  name,
  level,
  delay,
  inView,
}: {
  name: string;
  level: number;
  delay: number;
  inView: boolean;
}) => (
  <div className="mb-3">
    <div className="flex justify-between items-center mb-1">
      <span className="text-sm font-medium text-foreground">{name}</span>
      <span className="text-xs font-mono text-primary">{level}%</span>
    </div>
    <div className="h-2 rounded-full bg-vital-bg overflow-hidden relative">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent, transparent 8px, hsl(var(--ecg-grid)) 8px, hsl(var(--ecg-grid)) 9px)",
        }}
      />
      <motion.div
        className="h-full rounded-full bg-primary relative"
        initial={{ width: 0 }}
        animate={inView ? { width: `${level}%` } : { width: 0 }}
        transition={{ duration: 1.2, delay, ease: "easeOut" }}
      >
        {/* Pulse dot at end */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary-foreground shadow-sm" />
      </motion.div>
    </div>
  </div>
);

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Vital Signs
          </h2>
          <p className="text-sm text-muted-foreground">
            Skills & proficiency monitor
          </p>
          <div className="w-12 h-1 bg-primary rounded-full mx-auto mt-2" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: gi * 0.15 }}
              className="bg-card rounded-xl border border-border p-6"
            >
              <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-5">
                {group.label}
              </h3>
              {group.skills.map((s, si) => (
                <VitalBar
                  key={s.name}
                  name={s.name}
                  level={s.level}
                  delay={gi * 0.15 + si * 0.08}
                  inView={inView}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
