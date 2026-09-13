import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper, { SectionHeader, FadeInUp } from "../components/ui/SectionWrapper";
import ProjectCard from "../components/projects/ProjectCard";
import ProjectModal from "../components/projects/ProjectModal";
import { projects } from "../data/projects";
import { ChevronDown, ChevronUp, Sparkles } from "lucide-react";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.slice(0, 3);
  const hasMore = projects.length > 3;

  return (
    <SectionWrapper id="projects" className="relative">
      {/* Subtle Ambient Radial Lighting Accents */}
      <div
        className="absolute top-1/3 -right-24 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0, 112, 243, 0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute bottom-1/4 -left-24 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.06) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="section-container relative z-10">
        <SectionHeader
          label="Featured Projects"
          title="Engineered Mobile & AI Applications"
          subtitle="Production-grade mobile solutions built with Flutter & Firebase, and AI computer-vision healthcare tools."
        />

        {/* Projects Grid with Consistent Card Spacing */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          layout
        >
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.28 }}
                className="flex h-full"
              >
                <ProjectCard
                  project={project}
                  onSelect={setSelectedProject}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More / Show Less Toggle Button */}
        {hasMore && (
          <FadeInUp delay={0.2}>
            <div className="flex justify-center mt-10 sm:mt-14">
              <button
                onClick={() => setShowAll((prev) => !prev)}
                className="btn-secondary px-7 py-3.5 rounded-full flex items-center gap-2 text-sm font-semibold hover:border-[#38bdf8] hover:text-[#38bdf8] shadow-lg"
              >
                {showAll ? (
                  <>
                    <span>Show Less</span>
                    <ChevronUp size={16} />
                  </>
                ) : (
                  <>
                    <Sparkles size={15} className="text-[#38bdf8]" />
                    <span>View All Projects ({projects.length})</span>
                    <ChevronDown size={16} />
                  </>
                )}
              </button>
            </div>
          </FadeInUp>
        )}

      </div>

      {/* Detailed Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
