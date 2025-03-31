import { useState, useEffect } from 'react';
import { Mail } from 'react-feather';
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa6";

  // Footer links data for better organization
  const footerLinks = {
    quickLinks: [
      { name: 'Home', href: '/' },
      { name: 'Contact Us', href: '/contact-us' },
      { name: 'Job Search', href: '/jobs' },
      { name: 'Clients', href: '/clients' },
      { name: 'Candidates', href: '/careers' },
      { name: 'About Us', href: '/about-us' }
    ],
    sectors: [
      { name: 'Technology', href: '/technology' },
      { name: 'Change & Transformation', href: '/change-and-transformation' },
      { name: 'Quantitative Research & Trading', href: '/quantitative-trading-and-research' },
      { name: 'Finance', href: '/finance' },
      { name: 'Information Security/Cyber', href: '/information-and-cyber-security' }
    ],
    socialLinks: [
      { name: 'LinkedIn', icon: '🔗', href: '#' },
      { name: 'Instagram', icon: '📸', href: '#' },
      { name: 'Twitter', icon: '❌', href: '#' },
      { name: 'YouTube', icon: '▶️', href: '#' }
    ],
    legalLinks: [
      { name: 'Cookie Policy', href: '/#' },
      { name: 'Privacy Policy', href: '/#' },
      { name: 'Sitemap', href: '/#' }
    ]
  };

const Footer = () => {
    const [times, setTimes] = useState({Montreal: '', London: '',
      Amsterdam: '', Dubai: '', Singapore: ''});
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const updateTime = () => {

        const options: Intl.DateTimeFormatOptions = {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
            timeZoneName: 'short'
          };
        
        setTimes({
          Montreal: new Date().toLocaleTimeString('en-CA', { timeZone: 'America/Montreal', ...options }),
          London: new Date().toLocaleTimeString('en-GB', { timeZone: 'Europe/London', ...options }),
          Amsterdam: new Date().toLocaleTimeString('en-NL', { timeZone: 'Europe/Amsterdam', ...options }),
          Dubai: new Date().toLocaleTimeString('en-AE', { timeZone: 'Asia/Dubai', ...options }),
          Singapore: new Date().toLocaleTimeString('en-SG', { timeZone: 'Asia/Singapore', ...options })
        });
      };
  
      updateTime();
      const interval = setInterval(updateTime, 60000);
      return () => clearInterval(interval);
    }, []);

    // Show button when page is scrolled down
    useEffect(() => {
      const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
      window.addEventListener("scroll", toggleVisibility);
      return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    // Scroll to top smoothly
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
  
    return (
      <footer className="bg-gray-900 text-gray-300 px-4 py-12 md:px-8">
        {/* World Clock Section */}
        <div className="max-w-7xl mx-auto mb-12">
          <h2 className="text-xl font-bold text-white mb-6 text-center">Our Global Offices </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {Object.entries(times).map(([city, time]) => (
              <div key={city} className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-white">{city}</h3>
                <p className="text-2xl md:text-3xl font-semibold text-blue-400">
                    {time}
                </p>
              </div>
            ))}
          </div>
        </div>
  
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div>
            <h4 className="font-bold text-white mb-4">Contact Us</h4>
            <address className="not-italic">
              <p className="mb-2">Telephone: <a href="tel:+4389944503"
                className="hover:text-white">+1 438 994 4503</a></p>
              <p className="mb-4">Email: <a href="mailto:ahmedlekan011@gmail.com"
              className="hover:text-white">ahmedlekan011@gmail.com</a></p>
            </address>
            <div className="flex gap-4">
              {footerLinks.socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.href} 
                  aria-label={social.name}
                  className="text-2xl hover:text-white transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
  
          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
  
          {/* Sectors */}
          <div>
            <h4 className="font-bold text-white mb-4">Sectors</h4>
            <ul className="space-y-2">
              {footerLinks.sectors.map((sector) => (
                <li key={sector.name}>
                  <a href={sector.href} className="hover:text-white transition-colors">
                    {sector.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
  
          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-white mb-4">Sign up to our newsletter</h4>
            <form className="flex flex-col space-y-4">
              <div className="flex items-center border border-gray-600 rounded-lg
                overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="flex-1 px-4 py-3 bg-gray-800 text-white border-none
                    outline-none placeholder-gray-400"
                  aria-label="Email address for newsletter subscription"
                />
                <button 
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-3
                  transition-colors"
                  aria-label="Subscribe to newsletter"
                >
                  <Mail className="h-5 w-5 text-white" />
                </button>
              </div>
              <p className="text-sm text-gray-400">
                Stay updated with our latest news and opportunities
              </p>
            </form>
          </div>
        </div>
  
        {/* Copyright and Legal */}
        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Job Hunt. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {footerLinks.legalLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="text-sm hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Back to top button*/}
        {isVisible && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 
              text-white p-3 rounded-lg shadow-lg z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowUp />
          </motion.button>
        )}

      </footer>
    );
};

export default Footer;