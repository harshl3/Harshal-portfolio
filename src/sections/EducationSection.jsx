import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award, CheckCircle2 } from "lucide-react";
import SectionWrapper, { SectionHeader, FadeInUp } from "../components/ui/SectionWrapper";
import { education } from "../data/education";

export default function EducationSection() {
  return (
    <SectionWrapper id="education" style={{ background: "var(--bg-secondary)" }}>
      <div className="section-container">
        <SectionHeader
          label="Academic Foundation"
          title="Educational Background"
          subtitle="Formal academic path in Information Technology and higher secondary education."
        />

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, i) => (
            <FadeInUp key={edu.id} delay={i * 0.1}>
              <div
                className="glass-card p-6 sm:p-8 border border-slate-800/80 hover:border-[#38bdf8]/40 transition-all rounded-3xl shadow-lg"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                  
                  {/* Degree & Institution */}
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 mt-0.5"
                      style={{
                        background: "rgba(0, 112, 243, 0.12)",
                        border: "1px solid rgba(56, 189, 248, 0.25)",
                      }}
                    >
                      <GraduationCap size={22} className="text-[#38bdf8]" />
                    </div>

                    <div>
                      <h3
                        className="text-base sm:text-lg font-bold text-white tracking-tight"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {edu.degree}
                      </h3>
                      <p className="text-sm font-semibold text-[#38bdf8] mt-1">
                        {edu.institution}
                      </p>
                      <div className="flex items-center gap-3 mt-2.5 text-xs text-slate-400 font-mono">
                        <span className="flex items-center gap-1.5 text-slate-300">
                          <Calendar size={13} className="text-[#38bdf8]" />
                          {edu.duration}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1 text-emerald-400 font-medium">
                          <CheckCircle2 size={13} />
                          {edu.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Score / CGPA Badge */}
                  <div className="sm:self-center shrink-0 pl-16 sm:pl-0">
                    <div
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl"
                      style={{
                        background: "rgba(56, 189, 248, 0.08)",
                        border: "1px solid rgba(56, 189, 248, 0.25)",
                      }}
                    >
                      <Award size={16} className="text-[#38bdf8]" />
                      <span
                        className="font-bold text-sm sm:text-base text-white tracking-wide font-mono"
                      >
                        {edu.score}
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
