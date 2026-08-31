import { motion } from "framer-motion";
import { Trophy, Medal, Award, Users, HeartHandshake, Code2 } from "lucide-react";
import SectionWrapper, { SectionHeader, FadeInUp } from "../components/ui/SectionWrapper";
import { achievements } from "../data/achievements";

const getCategoryIcon = (category) => {
  switch (category) {
    case "hackathon":
      return <Trophy size={20} className="text-[#38bdf8]" />;
    case "competition":
      return <Medal size={20} className="text-[#38bdf8]" />;
    case "leadership":
      return <Users size={20} className="text-[#38bdf8]" />;
    default:
      return <Award size={20} className="text-[#38bdf8]" />;
  }
};

export default function AchievementsSection() {
  return (
    <SectionWrapper id="achievements">
      <div className="section-container">
        <SectionHeader
          label="Honors & Leadership"
          title="Achievements & Positions"
          subtitle="National competition awards, coding leaderboard rankings, and student leadership roles."
        />

        <div className="card-grid sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, i) => (
            <FadeInUp key={item.id} delay={i * 0.07}>
              <div className="glass-card p-6 sm:p-7 border border-slate-800/90 hover:border-[#38bdf8]/40 transition-all rounded-2xl flex flex-col h-full shadow-lg">
                
                {/* Top Row: Icon & Position Badge */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: "rgba(0, 112, 243, 0.12)",
                      border: "1px solid rgba(56, 189, 248, 0.25)",
                    }}
                  >
                    {getCategoryIcon(item.category)}
                  </div>

                  <span className="px-3 py-1 rounded-full text-xs font-bold font-mono bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                    {item.position}
                  </span>
                </div>

                {/* Title & Event */}
                <div className="mb-3">
                  <h3
                    className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-[#38bdf8] mt-1 font-mono">
                    {item.event}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed flex-1 mb-4">
                  {item.description}
                </p>

                {/* Prize / Recognition Tag */}
                {item.prize && (
                  <div className="pt-3 border-t border-slate-800/80">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#0070f3]/10 border border-[#0070f3]/30 text-[#38bdf8]">
                      🏆 {item.prize}
                    </span>
                  </div>
                )}

              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
