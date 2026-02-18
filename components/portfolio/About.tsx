"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6 border-t border-b border-accent">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          {/* Avatar placeholder */}
          <div className="shrink-0">
            <div className="w-60 h-60 relative overflow-hidden rounded-full bg-secondary flex items-center justify-center border-4 border-primary/20">
              <Image
                src="/me.jpg"
                alt="MK"
                fill
                className="object-cover object-right"
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">
              About Me
            </h2>
            <div className="w-12 h-1 bg-primary rounded-full mb-6" />
            <p className="text-muted-foreground leading-relaxed text-base">
              I&apos;m a full‑stack developer with a unique perspective,I&apos;m
              also a medical student. This combination drives my passion for
              creating tools that make learning and healing more accessible.
              Over the past 1.5 years, I&apos;ve built complete web applications
              from database to UI: real‑time educational platforms, AI‑powered
              medical simulations, and full‑featured learning management
              systems. I thrive at the intersection of clean code, user empathy,
              and domain expertise – and I&apos;m available for freelance
              projects that need end‑to‑end delivery.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
