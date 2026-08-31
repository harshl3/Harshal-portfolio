import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper, { SectionHeader, FadeInUp } from "../components/ui/SectionWrapper";
import ProjectCard from "../components/projects/ProjectCard";
import ProjectModal from "../components/projects/ProjectModal";
import { projects, projectCategories } from "../data/projects";
import { ChevronDown, ChevronUp, Sparkles } from "lucide-react";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);

  // Filter projects by category
  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  // Initially show 3 projects, or all if showAll is true
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);
  const hasMore = filteredProjects.length > 3;

  return (
    <SectionWrapper id="projects" style={{ background: "var(--bg-secondary)" }}>
      <div className="section-container">
        <SectionHeader
          label="Featured Projects"
          title="Engineered Mobile & AI Applications"
          subtitle="Production-grade mobile solutions built with Flutter & Firebase, and AI computer-vision healthcare tools."
        />

        {/* Category Filter Pills */}
        <FadeInUp delay={0.1}>
          <div className="flex items-center justify-center gap-2.5 flex-wrap mb-12">
            {projectCategories.map((cat) => {
              const isActive = activeFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveFilter(cat.id);
                    setShowAll(false);
                  }}
                  className="px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200"
                  style={{
                    background: isActive ? "rgba(29, 155, 240, 0.14)" : "rgba(15, 23, 42, 0.7)",
                    color: isActive ? "#ffffff" : "#a8b4c7",
                    border: isActive ? "1px solid rgba(92, 200, 255, 0.22)" : "1px solid rgba(148,163,184,0.12)",
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </FadeInUp>

        {/* Projects Grid with Consistent Card Spacing */}
        <motion.div className="card-grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7" layout>
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
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
            <div className="flex justify-center mt-14">
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
                    <span>View All Projects ({filteredProjects.length})</span>
                    <ChevronDown size={16} />
                  </>
                )}
              </button>
            </div>
          </FadeInUp>
        )}

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-slate-400 text-sm">No projects found in this category.</p>
          </div>
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
