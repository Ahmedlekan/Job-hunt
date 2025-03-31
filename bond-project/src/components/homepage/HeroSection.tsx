import { motion} from 'framer-motion';
import {Link} from "react-router-dom"
import herovd from "../../assets/hero-vid.mp4"


const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen">

      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={herovd} type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <img 
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1920" 
            alt="Fallback background" 
            className="w-full h-full object-cover"
          />
        </video>
      </div>
      
      {/* Gradient overlay at top */}      
      <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent z-10" />
      
      {/* Content container */}
      <div className="relative z-10 h-full flex items-center">
        <motion.div 
          className="max-w-7xl mx-auto px-8 w-full py-32"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-2xl md:text-5xl font-bold mb-6 text-white max-w-2xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Redefining financial sector recruitment through technology-driven
            talent
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-white mb-8 max-w-2xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Over seven years of recognized recruitment success, expanding our
            footprint across the continents to serve the finance and technology sectors
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 w-full max-w-lg"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <input
              type="text"
              placeholder="Keyword Search"
              className="flex-1 px-6 py-3 text-black
                rounded-lg sm:rounded-r-none outline-none text-base"
            />
            <Link to="/jobs"
              className="bg-blue-600 px-6 py-3 text-white
                rounded-lg sm:rounded-l-none text-base font-medium whitespace-nowrap"
            >
              Search Jobs
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
    </section>
  );
};

  export default HeroSection