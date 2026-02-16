"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StickyNote, X } from "lucide-react";

const notes = [
  '"Clean code is like good hygiene — essential for long‑term health."',
  '"I diagnose bugs the way I\'d diagnose a patient — systematically."',
  '"250+ students trained on my AI patient simulator 🩺"',
  '"From database to UI — I build the full stack 🔧"',
  '"Day shift: saving patients. Night shift: shipping features."',
  '"Prescription: React + Node.js + PostgreSQL + empathy."',
  '"Available for freelance — let\'s build something great 🚀"',
];

const DoctorNotes = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [noteIndex, setNoteIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setNoteIndex((prev) => (prev + 1) % notes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isOpen]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: 2 }}
            animate={{ opacity: 1, y: 0, rotate: -1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            className="relative w-64 rounded-lg bg-[hsl(48,100%,92%)] dark:bg-[hsl(48,40%,25%)] p-4 shadow-lg border border-[hsl(48,60%,80%)] dark:border-[hsl(48,30%,35%)]"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close note"
            >
              <X size={14} />
            </button>
            <p className="text-xs font-semibold text-primary mb-2 tracking-wide uppercase">
              Doctor&apos;s Notes 📋
            </p>
            <AnimatePresence mode="wait">
              <motion.p
                key={noteIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="text-sm text-foreground leading-relaxed italic"
              >
                {notes[noteIndex]}
              </motion.p>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {!isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center"
          aria-label="Open Doctor's Notes"
        >
          <StickyNote size={20} />
        </motion.button>
      )}
    </div>
  );
};

export default DoctorNotes;
