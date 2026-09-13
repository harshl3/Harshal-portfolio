import { motion } from "framer-motion";
import SectionWrapper, { SectionHeader, FadeInUp } from "../components/ui/SectionWrapper";
import { personalInfo } from "../data/personal";
import { education } from "../data/education";
import { GraduationCap, Award, Smartphone, Briefcase, Trophy, Sparkles } from "lucide-react";

export default function AboutSection() {
  const highlights = [
    { label: "B.Tech IT CGPA", value: "9.41", icon: <Award size={18} className="text-[#38bdf8]" /> },
    { label: "Projects Built", value: "5+", icon: <Smartphone size={18} className="text-[#0070f3]" /> },
    { label: "Hackathons Won", value: "2", icon: <Trophy size={18} className="text-[#38bdf8]" /> },
    { label: "Internships & Roles", value: "3+", icon: <Briefcase size={18} className="text-[#0070f3]" /> },
  ];

  return (
    <SectionWrapper id="about" className="relative">
      <div className="section-container">
        <SectionHeader
          label="About Me"
          title="The Developer Behind The Code"
          subtitle="Passionate about building scalable mobile apps that solve practical, everyday challenges."
        />

        <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-start">
          
          {/* ─── LEFT COLUMN: Profile Visual + 4 Highlight Stats ─── */}
          <div className="lg:col-span-5 space-y-5">
            <FadeInUp delay={0.1}>
              {/* Profile Card */}
              <div className="relative rounded-3xl overflow-hidden glass-card p-3 border border-slate-800 shadow-2xl">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#070b16]">
                  <img
                    src="/images/profile/profile.jpg"
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = "/images/profile/logo.png";
                    }}
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#04060d] via-transparent to-transparent opacity-90" />
                  
                  {/* Bottom Name & Role Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3
                          className="text-lg sm:text-xl font-bold text-white tracking-tight"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {personalInfo.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#38bdf8] font-medium">
                          {personalInfo.title}
                        </p>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-[#0070f3]/20 border border-[#0070f3]/40 flex items-center justify-center p-1 shadow-lg">
                        <img src="/images/profile/logo.png" alt="HM" className="w-full h-full object-contain" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4 Stat Highlight Cards underneath image */}
              <div className="grid grid-cols-2 gap-3.5 mt-4">
                {highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="glass-card p-4 rounded-2xl border border-slate-800 hover:border-[#38bdf8]/40 transition-all flex flex-col justify-center"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="w-8 h-8 rounded-lg bg-[#0070f3]/10 border border-[#0070f3]/25 flex items-center justify-center">
                        {item.icon}
                      </div>
                      <span
                        className="text-xl font-bold text-white font-mono tracking-tight"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {item.value}
                      </span>
                    </div>
                    <span className="text-xs text-slate-400 font-medium mt-1">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </FadeInUp>
          </div>

          {/* ─── RIGHT COLUMN: Bio, Quotation, Education Card & Status ─── */}
          <div className="lg:col-span-7 space-y-6 pt-1">
            <FadeInUp delay={0.15}>
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>{personalInfo.about.intro}</p>
                <p>{personalInfo.about.focus}</p>
                <p>{personalInfo.about.interests}</p>
              </div>
            </FadeInUp>

            {/* Developer Quote */}
            <FadeInUp delay={0.2}>
              <div className="p-4 sm:p-5 rounded-2xl bg-[#081024] border-l-4 border-[#0070f3] text-xs sm:text-sm text-slate-300 italic shadow-md">
                "{personalInfo.about.statement}"
              </div>
            </FadeInUp>

            {/* Education Summary Card (Matching Reference Image 1) */}
            <FadeInUp delay={0.25}>
              <div className="glass-card p-5 sm:p-6 rounded-2xl border border-slate-800 hover:border-[#38bdf8]/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#0070f3]/15 border border-[#0070f3]/30 flex items-center justify-center shrink-0 mt-0.5">
                    <GraduationCap size={22} className="text-[#38bdf8]" />
                  </div>
                  <div>
                    <span className="text-[0.7rem] font-bold uppercase tracking-wider text-[#38bdf8] font-mono">
                      Education
                    </span>
                    <h4
                      className="text-base font-bold text-white tracking-tight mt-0.5"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {education[0]?.degree}
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {education[0]?.institution} ({education[0]?.duration})
                    </p>
                  </div>
                </div>

                <div className="sm:self-center shrink-0 pl-[60px] sm:pl-0">
                  <div className="px-3.5 py-1.5 rounded-xl bg-[#0070f3]/10 border border-[#0070f3]/30 text-right">
                    <span className="text-[0.65rem] text-slate-400 block font-mono">CGPA</span>
                    <span className="text-sm font-bold text-white font-mono">{education[0]?.score}</span>
                  </div>
                </div>
              </div>
            </FadeInUp>

            {/* Location & Status Footer */}
            <FadeInUp delay={0.3}>
              <div className="flex items-center justify-between gap-3 px-5 py-3.5 rounded-2xl bg-[#060b18] border border-slate-800 text-xs sm:text-sm">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                  <span className="text-slate-300">
                    <span className="font-semibold text-white">Based in:</span> {personalInfo.location}
                  </span>
                </div>
                <span className="text-xs text-[#38bdf8] font-medium hidden sm:inline">Open to Remote & Onsite</span>
              </div>
            </FadeInUp>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
}
