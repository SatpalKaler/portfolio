import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import content from "@/content/writing.json";

const Writing = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-40 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.writings.map((writing) => (
            <ProjectCard key={writing.title} {...writing} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Writing;
