import { useState } from "react";
import { ExternalLink, Eye, Smartphone, Brain, Globe, ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project, onSelect }) {
  const [imgError, setImgError] = useState(false);

  const getCategoryBadge = (cat) => {
    switch (cat) {
      case "mobile":
        return { label: "Mobile App", icon: <Smartphone size={12} className="text-[#38bdf8]" /> };
      case "ai-ml":
        return { label: "AI / ML Platform", icon: <Brain size={12} className="text-[#38bdf8]" /> };
      default:
        return { label: "Web App", icon: <Globe size={12} className="text-[#38bdf8]" /> };
    }
  };

  const badge = getCategoryBadge(project.category);

  return (
    <div
      className="glass-card overflow-hidden flex flex-col group cursor-pointer border border-slate-800/80 hover:border-[#38bdf8]/40 transition-all duration-300 rounded-3xl shadow-xl flex-1 w-full h-full"
      onClick={() => onSelect(project)}
    >
      {/* Visual Header / Banner Area */}
      <div className="relative overflow-hidden aspect-[16/9] bg-[#070b16] border-b border-slate-800/80">
        {!imgError && project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#0a1228] to-[#050814]">
            <div className="w-12 h-12 rounded-2xl bg-[#0070f3]/15 border border-[#0070f3]/30 flex items-center justify-center mb-2 shadow-inner">
              <Smartphone size={22} className="text-[#38bdf8]" />
            </div>
            <h4
              className="text-base font-bold text-white tracking-wide"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {project.title}
            </h4>
            <p className="text-xs text-slate-400 mt-1 line-clamp-1">{project.subtitle}</p>
          </div>
        )}

        {/* Category Pill on top left */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center gap-1.5 text-[0.72rem] font-semibold px-3 py-1.5 rounded-full bg-[#05070f]/90 backdrop-blur-md border border-slate-700/80 text-slate-200 shadow-md">
            {badge.icon}
            <span>{badge.label}</span>
          </span>
        </div>

        {/* Hover View Button Overlay */}
        <div className="absolute inset-0 bg-[#04060d]/65 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-[#0070f3] text-white shadow-2xl">
            <Eye size={14} />
            <span>Open App Details</span>
          </div>
        </div>
      </div>

      {/* Card Content with Generous Padding */}
      <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
        
        <div className="min-w-0">
          {/* Title & Subtitle */}
          <div className="flex items-start justify-between gap-2 mb-2 min-w-0">
            <h3
              className="text-xl font-bold text-white group-hover:text-[#5cc8ff] transition-colors leading-snug tracking-tight break-words min-w-0"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {project.title}
            </h3>
            <div className="w-7 h-7 rounded-full bg-slate-800/60 flex items-center justify-center shrink-0 group-hover:bg-[#0070f3]/20 transition-colors mt-0.5">
              <ArrowUpRight size={15} className="text-slate-400 group-hover:text-[#38bdf8] transition-colors" />
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#5cc8ff] font-medium mb-3 break-words min-w-0">
            {project.subtitle}
          </p>

          {/* Short Description */}
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 break-words min-w-0">
            {project.shortDescription}
          </p>
        </div>

        <div>
          {/* Technologies Tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.slice(0, 4).map((tech) => (
              <span key={tech} className="tech-tag">
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-[0.7rem] px-2 py-0.5 rounded-md text-slate-400 self-center font-mono">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Bottom Action Bar */}
          <div
            className="flex items-center justify-between pt-4 border-t border-slate-800/80 text-xs font-semibold text-slate-400 group-hover:text-[#38bdf8] transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="inline-flex items-center gap-1.5">
              <Eye size={14} />
              <span>Open App Details</span>
            </span>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0a1122] border border-slate-800 text-slate-300 hover:text-white hover:border-[#38bdf8] transition-colors"
                onClick={(e) => e.stopPropagation()}
                title="GitHub Repository"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
                <span>Code</span>
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
