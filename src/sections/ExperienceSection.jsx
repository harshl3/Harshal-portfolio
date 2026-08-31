import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import SectionWrapper, { SectionHeader, FadeInUp } from "../components/ui/SectionWrapper";
import { experiences } from "../data/experience";

export default function ExperienceSection() {
  return (
    <SectionWrapper id="experience" style={{ background: "var(--bg-secondary)" }}>
      <div className="section-container">
        <SectionHeader
          label="Work Experience"
          title="Internships & Engineering Roles"
          subtitle="Real-world engineering internships delivering production-grade Android and Flutter applications."
        />

        {/* Timeline with Perfect Line & Dot Alignment and Generous Vertical Spacing */}
        <div className="max-w-5xl mx-auto mt-10">
          {experiences.map((exp, i) => {
            const isLast = i === experiences.length - 1;

            return (
              <FadeInUp key={exp.id} delay={i * 0.1}>
                <div className="flex items-start gap-4 sm:gap-6 relative">
                  
                  <div className="flex flex-col items-center shrink-0 w-6 sm:w-8 self-stretch">
                    <div className="w-4 h-4 sm:w-4.5 sm:h-4.5 rounded-full bg-[#1d9bf0] border-4 border-[#090d18] shadow-[0_0_10px_rgba(29,155,240,0.8)] mt-7 shrink-0 z-10" />
                    {!isLast && (
                      <div
                        className="w-[2px] flex-1 my-2"
                        style={{
                          background: "linear-gradient(to bottom, rgba(29,155,240,0.9) 0%, rgba(29,155,240,0.45) 100%)",
                        }}
                      />
                    )}
                  </div>

                  <div className="flex-1 pb-8 sm:pb-10">
                    <div className="glass-card p-5 sm:p-7 rounded-2xl border border-slate-800/90 hover:border-[#38bdf8]/30 transition-all shadow-xl">
                      
                      {/* Top Row: Title, Company, Type Badge, Date & Location */}
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                        <div>
                          <h3
                            className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug"
                            style={{ fontFamily: "var(--font-display)" }}
                          >
                            {exp.position}
                          </h3>
                          <div className="flex items-center gap-2.5 mt-1.5 flex-wrap">
                            <span className="text-sm sm:text-base font-semibold text-[#38bdf8]">
                              {exp.company}
                            </span>
                            <span className="px-2.5 py-0.5 rounded-full text-[0.7rem] font-bold font-mono bg-[#0070f3]/15 border border-[#0070f3]/35 text-[#38bdf8] uppercase tracking-wider">
                              {exp.type}
                            </span>
                          </div>
                        </div>

                        {/* Date & Location */}
                        <div className="flex flex-row sm:flex-col items-start sm:items-end gap-3 sm:gap-1 text-xs text-slate-400 font-mono">
                          <span className="flex items-center gap-1.5 text-slate-300">
                            <Calendar size={13} className="text-[#38bdf8]" />
                            {exp.duration}
                          </span>
                          <span className="flex items-center gap-1.5 text-slate-500">
                            <MapPin size={13} />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Key Responsibilities */}
                      {exp.responsibilities && (
                        <ul className="space-y-2 mb-5">
                          {exp.responsibilities.map((resp, rIdx) => (
                            <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] shrink-0 mt-2" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Technologies */}
                      {exp.technologies && (
                        <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-800/80">
                          {exp.technologies.map((tech) => (
                            <span key={tech} className="tech-tag text-xs">
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}

                    </div>
                  </div>

                </div>
              </FadeInUp>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
