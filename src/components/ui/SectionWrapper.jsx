import { motion } from "framer-motion";

/**
 * SectionWrapper — fluid scroll-reveal container
 */
export default function SectionWrapper({ id, className = "", style = {}, children }) {
  return (
    <motion.section
      id={id}
      className={`section-padding relative ${className}`}
      style={style}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}

/**
 * SectionHeader — consistent label + title + subtitle with smooth scroll reveal
 */
export function SectionHeader({ label, title, subtitle }) {
  return (
    <motion.div
      className="mb-8 sm:mb-11 lg:mb-14 text-center max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div className="flex justify-center mb-1">
        <span className="section-label">{label}</span>
      </div>
      <h2 className="section-heading">{title}</h2>
      {subtitle && (
        <p className="mt-3.5 text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

/**
 * FadeInUp — staggered scroll-triggered entrance
 */
export function FadeInUp({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
