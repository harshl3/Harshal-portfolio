import { motion } from "framer-motion";
import { Award, CheckCircle2 } from "lucide-react";
import SectionWrapper, { SectionHeader, FadeInUp } from "../components/ui/SectionWrapper";
import { certifications } from "../data/certifications";

export default function CertificationsSection() {
  return (
    <SectionWrapper id="certifications" style={{ background: "var(--bg-secondary)" }}>
      <div className="section-container">
        <SectionHeader
          label="Certifications & Learning"
          title="Certificates"
          subtitle="Professional coursework and industry-recognized certifications in relevant Technologies."
        />

        <div className="card-grid sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {certifications.map((cert, i) => (
            <FadeInUp key={cert.id} delay={i * 0.08}>
              <div className="glass-card p-6 sm:p-7 border border-slate-800 hover:border-[#38bdf8]/40 transition-all rounded-2xl flex flex-col h-full shadow-lg group">
                
                {/* Certificate Icon Placeholder Area (Matching Image 3) */}
                <div className="w-full aspect-[16/9] rounded-xl bg-[#060a16] border border-slate-850 flex flex-col items-center justify-center p-4 mb-5 group-hover:border-[#38bdf8]/30 transition-colors">
                  <div className="w-12 h-12 rounded-2xl bg-[#0070f3]/10 border border-[#0070f3]/25 flex items-center justify-center mb-2">
                    <Award size={24} className="text-[#38bdf8]" />
                  </div>
                  <span className="text-xs text-slate-500 font-medium">
                    {cert.organization}
                  </span>
                </div>

                {/* Organization Label */}
                <p className="text-[0.72rem] font-bold uppercase tracking-wider text-[#38bdf8] mb-1.5 font-mono">
                  {cert.organization}
                </p>

                {/* Certificate Name */}
                <h3
                  className="text-base font-bold text-white leading-snug tracking-tight flex-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {cert.name}
                </h3>

              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
