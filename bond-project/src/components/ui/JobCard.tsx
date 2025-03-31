// components/JobCard.tsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaMoneyBillWave, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export type JobProps = {
  title: string;
  salary: string;
  location: string;
  type: string;
  description: string;
  tags?: string[];
};

export const JobCard = ({ title, salary, location, type,
    description,tags = [] }: JobProps) => (
  <motion.div
    className="bg-white p-6 rounded-xl shadow-lg w-80flex-shrink-0
    border border-gray-100 hover:shadow-xl transition-all
    duration-300 flex flex-col h-full overflow-hidden"
    whileHover={{ y: -5 }}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
  >
    <div className="flex-grow">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl text-nowrap font-bold text-gray-900">{title}</h3>
        <span className="bg-blue-100 text-blue-800 text-xs font-medium
        px-2.5 py-0.5 rounded">
          {type}
        </span>
      </div>
      
      <div className="space-y-3 mb-4">
        <div className="flex items-center gap-2 text-gray-700">
            <span className="text-blue-500 flex-shrink-0">
             <FaMoneyBillWave />
            </span>
            <span>{salary}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-700">
            <span className="text-blue-500 flex-shrink-0">
            <FaMapMarkerAlt />
            </span>
            <span>{location}</span>
        
        </div>

        <div className="flex items-center gap-2 text-gray-700">
            <span className="text-blue-500 flex-shrink-0">
                <FaClock />
            </span>
          <span>{type}</span>
        </div>
      </div>
      
      <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
      
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, i) => (
            <span key={i} className="bg-gray-100 text-gray-800
            text-xs px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
    
    <Link to="/jobs" 
      className="mt-auto inline-block text-blue-600 font-medium 
      hover:text-blue-800 transition-colors"
    >
      View details →
    </Link>
  </motion.div>
);