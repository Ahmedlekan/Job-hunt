import { motion } from 'framer-motion';
import { BlogProps } from '../../constants';


const BlogCard: React.FC<BlogProps> = ({ title, date, imageUrl, link }) => (
  <motion.a
    href={link}
    className="relative w-full max-w-xs rounded-lg
        overflow-hidden shadow-lg group cursor-pointer"
    whileHover={{ scale: 1.05 }}
  >
    {/* Background Image */}
    <div
      className="h-56 bg-cover bg-center"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t 
        from-black/70 to-transparent" />
    </div>

    {/* Content */}
    <div className="absolute bottom-0 left-0 p-4 text-white z-10">
      <p className="text-sm mb-1">{date}</p>
      <h3 className="text-lg font-bold leading-tight">{title}</h3>
    </div>
  </motion.a>
);

export default BlogCard