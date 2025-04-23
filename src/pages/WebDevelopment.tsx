import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import content from "@/content/development.json";

const Development = () => {
  // Add technology information to your projects
  const projectsWithTech = content.projects.map(project => ({
    ...project,
    technologies: project.technologies || [] // Make sure your JSON includes this field
  }));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen p-6 pt-40 border-t"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsWithTech.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Development;
