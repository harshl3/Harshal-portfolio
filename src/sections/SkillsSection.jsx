import { motion } from "framer-motion";
import { Code2, Smartphone, Server, Wrench, Brain } from "lucide-react";
import SectionWrapper, { SectionHeader, FadeInUp } from "../components/ui/SectionWrapper";
import { skillCategories } from "../data/skills";

const iconMap = {
  Code2: Code2,
  Monitor: Smartphone,
  Server: Server,
  Wrench: Wrench,
  Brain: Brain,
};

export default function SkillsSection() {
  return (
    <SectionWrapper id="skills">
      <div className="section-container">
        <SectionHeader
          label="Skills & Expertise"
          title="Technical Stack & Tooling"
          subtitle="Core engineering toolkit for crafting cross-platform mobile apps and scalable backend architectures."
        />

        <div className="card-grid sm:grid-cols-2 lg:grid-cols-2">
          {skillCategories.map((category, catIdx) => {
            const Icon = iconMap[category.icon] || Code2;
            return (
              <FadeInUp key={category.id} delay={catIdx * 0.08}>
                <div className="glass-card p-6 h-full border border-slate-800/80 hover:border-[#38bdf8]/30 rounded-3xl flex flex-col shadow-lg">
                  <div className="flex items-center gap-3.5 mb-5 pb-3.5 border-b border-slate-800/80">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        background: "rgba(15, 23, 42, 0.82)",
                        border: "1px solid rgba(92, 200, 255, 0.18)",
                      }}
                    >
                      <Icon size={18} className="text-[#5cc8ff]" />
                    </div>
                    <h3
                      className="text-lg font-bold text-white tracking-tight"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {category.label}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2.5 flex-1 items-start">
                    {category.skills.map((skill) => (
                      <span key={skill} className="skill-pill">
                        {skill}
                      </span>
                    ))}
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
