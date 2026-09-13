import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Download, ChevronLeft, ChevronRight, Smartphone } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  const [imgIndex, setImgIndex] = useState(0);
  const [imgError, setImgError] = useState({});

  const screenshots = project.screenshots || [];
  const hasScreenshots = screenshots.length > 0;

  const prevImg = useCallback(() => {
    setImgIndex((i) => (i - 1 + screenshots.length) % screenshots.length);
  }, [screenshots.length]);

  const nextImg = useCallback(() => {
    setImgIndex((i) => (i + 1) % screenshots.length);
  }, [screenshots.length]);

  const handleImgError = (src) => {
    setImgError((prev) => ({ ...prev, [src]: true }));
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        onClick={handleBackdropClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="modal-content"
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 30 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Mobile drag handle */}
          <div className="flex justify-center pt-3 pb-1 sm:hidden">
            <div className="w-10 h-1 rounded-full bg-slate-700" />
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-3 sm:top-5 right-3 sm:right-5 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center bg-[#070b16]/80 border border-slate-700 text-slate-300 hover:text-white hover:border-[#38bdf8] transition-all shadow-lg"
          >
            <X size={18} />
          </button>

          {/* ─── SCREENSHOTS GALLERY ─── */}
          {hasScreenshots && (
            <div className="relative bg-[#060b17] border-b border-slate-800">
              <div className="w-full aspect-[16/9] max-h-[380px] overflow-hidden rounded-t-3xl flex items-center justify-center">
                {imgError[screenshots[imgIndex]] ? (
                  <div className="w-full h-full flex flex-col items-center justify-center text-slate-500 gap-2 p-6">
                    <Smartphone size={36} className="text-[#38bdf8]/40" />
                    <span className="text-xs font-mono">{project.title} Screenshot Preview</span>
                  </div>
                ) : (
                  <motion.img
                    key={imgIndex}
                    src={screenshots[imgIndex]}
                    alt={`${project.title} screenshot ${imgIndex + 1}`}
                    className="w-full h-full object-contain"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    onError={() => handleImgError(screenshots[imgIndex])}
                  />
                )}
              </div>

              {/* Gallery Navigation Controls */}
              {screenshots.length > 1 && (
                <>
                  <button
                    onClick={prevImg}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl flex items-center justify-center bg-black/65 border border-slate-700 text-white hover:border-[#38bdf8] transition-all shadow-xl"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextImg}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl flex items-center justify-center bg-black/65 border border-slate-700 text-white hover:border-[#38bdf8] transition-all shadow-xl"
                  >
                    <ChevronRight size={20} />
                  </button>

                  <div className="absolute bottom-3.5 left-1/2 -translate-x-1/2 flex gap-2 bg-black/60 px-3.5 py-1.5 rounded-full border border-slate-800 backdrop-blur-md">
                    {screenshots.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setImgIndex(i)}
                        className="rounded-full transition-all"
                        style={{
                          width: i === imgIndex ? "20px" : "6px",
                          height: "6px",
                          background: i === imgIndex ? "#38bdf8" : "rgba(255,255,255,0.3)",
                        }}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          )}

          {/* ─── MODAL CONTENT ─── */}
          <div className="p-5 sm:p-8 space-y-5 sm:space-y-7">
            
            {/* Header: Title & Action Links */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-800">
              <div>
                <h2
                  className="text-2xl sm:text-3xl font-bold text-white tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {project.title}
                </h2>
                <p className="text-sm text-[#38bdf8] mt-1 font-medium">{project.subtitle}</p>
              </div>

              {/* Action Buttons: Prominent Download App APK */}
              <div className="flex items-center gap-3 flex-wrap">
                {project.apkUrl && (
                  <a
                    href={project.apkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-apk py-2.5 px-4 shadow-xl"
                  >
                    <Download size={16} />
                    <span>Download App APK</span>
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary py-2.5 px-4 text-xs font-semibold"
                  >
                    <svg className="w-4 h-4 fill-current mr-1.5" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                    Source Code
                  </a>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary py-2.5 px-4 text-xs font-semibold"
                  >
                    <ExternalLink size={15} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>

            {/* Overview */}
            <div>
              <h4 className="modal-sub-heading">Project Overview</h4>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Problem & Solution Grid */}
            <div className="grid md:grid-cols-2 gap-5">
              {project.problem && (
                <div className="p-5 rounded-2xl bg-[#091124] border border-slate-800 shadow-sm">
                  <h4 className="modal-sub-heading">The Problem</h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.problem}
                  </p>
                </div>
              )}

              {project.solution && (
                <div className="p-5 rounded-2xl bg-[#091124] border border-slate-800 shadow-sm">
                  <h4 className="modal-sub-heading">The Solution</h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              )}
            </div>

            {/* Technologies */}
            {project.technologies && (
              <div>
                <h4 className="modal-sub-heading">Tech Stack & Tools</h4>
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag text-xs py-1.5 px-3">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
