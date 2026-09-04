import { motion } from "framer-motion";
import { ArrowUp, Mail } from "lucide-react";
import { personalInfo } from "../../data/personal";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      style={{
        borderTop: "1px solid rgba(56, 189, 248, 0.15)",
        background: "var(--bg-secondary)",
      }}
    >
      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-850">
          
          {/* Left: Brand / Name */}
          <div className="flex items-center gap-3.5 text-center md:text-left">
            <div className="w-10 h-10 rounded-xl overflow-hidden p-0.5 bg-gradient-to-tr from-[#0070f3] to-[#38bdf8] flex items-center justify-center">
              <img src="/images/profile/logo.png" alt="HM" className="w-full h-full object-contain bg-[#05070f] rounded-lg" />
            </div>
            <div>
              <h3
                className="text-base font-bold text-white tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {personalInfo.name}
              </h3>
              <p className="text-xs text-slate-400">{personalInfo.title} · Final Year B.Tech IT</p>
            </div>
          </div>

          {/* Center: Social Icons */}
          <div className="flex items-center gap-3">
            <FooterSocialLink
              href={personalInfo.linkedin}
              label="LinkedIn"
              icon={
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.761-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              }
            />
            <FooterSocialLink
              href={personalInfo.github}
              label="GitHub"
              icon={
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              }
            />
            <FooterSocialLink
              href={personalInfo.gfg}
              label="GeeksforGeeks"
              icon={<span className="font-bold text-xs text-[#2f8d46] font-mono">GFG</span>}
            />
            <FooterSocialLink
              href={personalInfo.leetcode}
              label="LeetCode"
              icon={<span className="font-bold text-sm text-[#ffa116] font-mono">LC</span>}
            />
            <FooterSocialLink
              href={`mailto:${personalInfo.email}`}
              label="Email"
              icon={<Mail size={16} />}
            />
          </div>

          {/* Right: Scroll to top */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400">Back to Top</span>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-xl bg-[#0b1222] border border-slate-800 text-slate-300 hover:text-white hover:border-[#38bdf8] hover:shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all flex items-center justify-center"
              aria-label="Back to Top"
            >
              <ArrowUp size={16} />
            </button>
          </div>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 text-center sm:text-left">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <p className="font-mono text-[0.7rem]"></p>
        </div>
      </div>
    </footer>
  );
}

function FooterSocialLink({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#0b1222] border border-slate-800 text-slate-400 hover:text-white hover:border-[#38bdf8] transition-all"
    >
      {icon}
    </a>
  );
}
