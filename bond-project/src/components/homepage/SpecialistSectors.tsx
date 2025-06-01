import { sectors } from "../../constants";
import {Link} from "react-router-dom"
import { motion } from 'framer-motion';

const SpecialistSectors = () => {

  // Helper function to generate path from title
  const getPathFromTitle = (title: string) => {
    return title.toLowerCase().replace(/[&\s]+/g, '-');
  };

  return (
    <div className="py-16 px-4 bg-gray-100">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Our Specialist Sectors
      </h2>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {sectors.map((sector, index) => (
          <Link 
            to={getPathFromTitle(sector.title)}
            key={index}
            className="block"
          >
            <motion.div
              className="relative w-full h-56 bg-cover bg-center rounded-lg
              shadow-lg overflow-hidden"
              style={{ backgroundImage: `url(${sector.image})` }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 hover:bg-opacity-40 transition-all duration-300 rounded-lg"></div>

              {/* Sector Title */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold text-center px-4">
                  {sector.title}
                </h3>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialistSectors;
