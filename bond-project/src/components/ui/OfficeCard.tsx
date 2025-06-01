import { motion } from 'framer-motion';
import { OfficeProps } from '../../constants';


const OfficeCard: React.FC<OfficeProps> = ({ city, phone, imageUrl }) => (
  <motion.div
    className="relative w-full max-w-xs rounded-lg
      overflow-hidden shadow-lg group cursor-pointer"
    whileHover={{ scale: 1.05 }}
  >
    {/* Background Image */}
    <div
      className="h-64 bg-cover bg-center"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 
        group-hover:bg-black/40 transition duration-300" />
    </div>

    {/* Content */}
    <div className="absolute bottom-0 left-0 p-4 text-white z-10">
      <h3 className="text-lg font-bold mb-1">{city}</h3>
      <p className="text-lg">{phone}</p>
    </div>
  </motion.div>
);

export default OfficeCard