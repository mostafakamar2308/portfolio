"use client";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Code,
  Equal,
  FileText,
  Heart,
  Plus,
  Stethoscope,
} from "lucide-react";
import HeartbeatLine from "./HeartbeatLine";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center ecg-grid-bg overflow-hidden">
      <HeartbeatLine />
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Small stethoscope icon */}
          <div className="flex justify-center gap-2 mb-6">
            <Stethoscope className="text-primary" strokeWidth={3} size={48} />
            <Plus className="text-primary" strokeWidth={3} size={48} />
            <Code className="text-primary" strokeWidth={3} size={48} />
            <Equal className="text-primary" strokeWidth={3} size={48} />
            <Heart
              className="text-transparent animate-bounce"
              fill={"red"}
              size={48}
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-foreground tracking-tight mb-4">
            Mostafa <span className="text-primary">Kamar</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-medium mb-4">
            Full‑Stack Developer · Medical Student · EdTech Specialist
          </p>
          <p className="text-base text-muted-foreground max-w-xl mx-auto mb-8">
            I build intuitive, high‑impact interfaces for education and
            healthcare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="inline-flex justify-center items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              View Work <ArrowDown size={16} />
            </a>
            <a
              href="/Mostafa_Kamar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center gap-2 px-6 py-3 rounded-lg border border-border bg-background text-foreground font-semibold hover:bg-secondary transition-colors"
            >
              Resume <FileText size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
