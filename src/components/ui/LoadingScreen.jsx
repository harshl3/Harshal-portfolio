import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { personalInfo } from "../../data/personal";

export default function LoadingScreen({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#05070f]"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      >
        {/* Ambient Blue Halo */}
        <div
          className="absolute w-96 h-96 rounded-full pointer-events-none opacity-25"
          style={{
            background: "radial-gradient(circle, #0070f3, transparent 70%)",
            filter: "blur(70px)",
          }}
        />

        <motion.div
          className="relative flex flex-col items-center gap-6 z-10"
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Rotating Ring with HM Logo */}
          <div className="relative">
            <motion.div
              className="absolute -inset-2 rounded-2xl"
              style={{
                background: "conic-gradient(from 0deg, #0070f3, #38bdf8, transparent 70%, #0070f3)",
                padding: "2px",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            />
            
            <div className="w-24 h-24 rounded-2xl overflow-hidden p-1 bg-[#05070f] relative z-10 border border-slate-800 shadow-2xl flex items-center justify-center">
              <img src="/images/profile/logo.png" alt="HM" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Name & Title */}
          <div className="text-center">
            <h2
              className="text-xl font-bold text-white tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {personalInfo.name}
            </h2>
            <p className="text-[0.7rem] text-[#5cc8ff] font-mono mt-1 tracking-[0.2em] uppercase">
              Portfolio
            </p>
          </div>

          {/* Sleek Progress Bar */}
          <div className="w-44 h-1 rounded-full bg-slate-800 overflow-hidden mt-1">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-[#0070f3] to-[#38bdf8]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
