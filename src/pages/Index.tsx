import { motion } from "framer-motion";
import content from "@/content/index.json";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-40 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          <div className="w-64 h-64 rounded-full overflow-hidden flex-shrink-0">
            <img
              src={content.profile.image}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-6xl font-bold mb-6 text-white">{content.profile.name}</h1>
            <div className="text-2xl text-white">
              {content.profile.Bio.map((paragraph, index) => (
                <p key={index} className="mb-6">{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Index;
