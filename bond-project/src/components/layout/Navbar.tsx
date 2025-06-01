import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navItems = [
    { name: 'Job Search', path: '/jobs' },
    { name: 'CV Drop', path: '/cv-drop' },
    { name: 'Clients', path: '/clients' },
    { name: 'Join Our Team', path: '/careers' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Contact', path: '/contact-us' }
  ];

  return (
    <header className={`fixed w-full z-50 transition-colors
      duration-300 ${scrolled ? 'bg-black' : 'bg-transparent'}`}>
      <div className="flex justify-between items-center
        px-8 py-4 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <Link to="/" className="flex items-center">
            <span className="text-3xl font-bold text-blue-500">J</span>
            <span className="text-3xl font-bold text-white">ob Hunt</span>
          </Link>
        </motion.div>
        
        {/* Desktop Navigation - always visible on large screens */}
        <nav className="hidden lg:flex gap-8 items-center">
          {navItems.slice(0, 4).map((item) => (
            <motion.div
            key={item.path}
            whileHover={{ scale: 1.05 }}
            className="relative"
          >
            <Link
              to={item.path}
              className="text-white hover:text-blue-500 text-lg"
            >
              {item.name}
              <motion.span 
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500"
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </motion.div>
          ))}
          
          {/* Toggle button - always visible on large screens */}
          <motion.button 
            onClick={toggleMenu}
            className="ml-4 p-2 rounded-lg hover:bg-gray-800 transition-colors"
            whileTap={{ scale: 0.9 }}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </motion.button>
        </nav>
        
        {/* Mobile Toggle Button - visible on small screens */}
        <motion.button 
          onClick={toggleMenu}
          className="lg:hidden p-2 rounded-lg hover:bg-gray-800
            transition-colors"
          whileTap={{ scale: 0.9 }}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
          )}
        </motion.button>
      </div>

      {/* Fullscreen Menu Overlay*/}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-40
              flex items-center justify-center"
          >
            <button 
              onClick={toggleMenu} 
              className="absolute top-8 right-8 p-2 rounded-full 
                hover:bg-gray-800 transition-colors"
              aria-label="Close menu"
            >
              <X className="h-8 w-8 text-white" />
            </button>
            
            <div className="text-center space-y-8 w-full max-w-2xl px-4">
              {navItems.map((item, index) => (
                <motion.div
                key={item.path}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ 
                  delay: index * 0.1,
                  duration: 0.5
                }}
              >
                <Link
                  to={item.path}
                  className="block text-3xl md:text-4xl font-bold 
                    text-white py-2 hover:text-blue-500 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavBar;