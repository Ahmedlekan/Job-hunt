import { motion } from 'framer-motion';
import { FaTrophy, FaHandshake, FaGlobeAmericas, FaChartLine, FaUserTie } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background with parallax effect */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1920')",
        }}
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent z-10" />
      
      {/* Content container */}
      <div className="relative z-20 py-24 px-4 sm:px-6 lg:px-8
        flex flex-col min-h-screen">
        <div className="max-w-7xl mx-auto w-full">
          {/* Headline section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-blue-400">Job Hunt</span>
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-8" />
            <p className="text-xl md:text-2xl text-white
                max-w-4xl mx-auto leading-relaxed">
              Pioneering excellence in finance and technology recruitment across global markets, we connect elite talent with world-class organizations through unparalleled sector expertise.
            </p>
          </motion.div>

          {/* Value cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: <FaTrophy className="w-full h-full" />,
                title: "Award-Winning Excellence",
                content: "Multi-award winning firm recognized for recruitment innovation and client satisfaction across EMEA, North America, and APAC regions."
              },
              {
                icon: <FaHandshake className="w-full h-full" />,
                title: "Strategic Methodology",
                content: "Proprietary assessment framework combining technical evaluation with cultural fit analysis for perfect candidate placements."
              },
              {
                icon: <FaGlobeAmericas className="w-full h-full" />,
                title: "Global Presence",
                content: "Strategic offices in London, New York, Singapore, and Dubai delivering seamless cross-border recruitment solutions."
              },
              {
                icon: <FaChartLine className="w-full h-full" />,
                title: "Market Intelligence",
                content: "Real-time compensation benchmarking and talent mapping for informed hiring decisions."
              },
              {
                icon: <FaUserTie className="w-full h-full" />,
                title: "Executive Search",
                content: "Specialized C-suite and leadership recruitment with 92% placement retention rate."
              },
              {
                icon: <div className="text-2xl md:text-5xl font-bold">10+</div>,
                title: "Years of Excellence",
                content: "Trusted partner to Fortune 500 companies and elite financial institutions since 2012."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/70 backdrop-blur-sm
                    p-8 rounded-xl border border-gray-800
                    hover:border-blue-400/30 transition-all duration-300"
                whileHover={{ y: -10 }}
              >
                <div className="w-16 h-16 text-blue-400 mb-6 mx-auto">
                  {item.icon}
                </div>
                <h3 className="text-2xl text-white font-bold mb-4 text-center">
                    {item.title}
                </h3>
                <p className="text-gray-200 text-center">{item.content}</p>
              </motion.div>
            ))}
          </div>

          {/* Story section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-900/40 to-black/60 p-0.5
            rounded-xl"
          >
            <div className="bg-gray-900/80 backdrop-blur-sm p-10 rounded-xl">
              <div className="max-w-5xl mx-auto">
                <motion.h3 
                  className="text-3xl text-white md:text-4xl font-bold
                  mb-8 text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Our <span className="text-blue-400">Evolution</span>
                </motion.h3>
                <div className="grid md:grid-cols-2 gap-10 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                      Founded in 2012 as a specialist quantitative finance
                      recruiter, Job Hunt has transformed into a global
                      leader in financial and technology talent solutions.
                    </p>
                    <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                      Our growth stems from a relentless focus on sector
                      specialization, with dedicated practices covering 
                      algorithmic trading, cybersecurity, fintech, and investment
                      management.
                    </p>
                    <div className="flex justify-center md:justify-start">
                      <motion.button
                        className="bg-blue-600 hover:bg-blue-700 
                        text-white font-medium py-3 px-8 rounded-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Meet Our Team
                      </motion.button>
                    </div>
                  </motion.div>
                  <motion.div
                    className="bg-gray-800/50 p-6 rounded-lg border 
                        border-gray-700"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-xl font-bold mb-4 text-blue-400">
                        Key Milestones
                    </h4>
                    <ul className="space-y-4">
                      {[
                        "2012: Founded in London",
                        "2015: Expanded to New York",
                        "2018: Launched Singapore office",
                        "2020: Recognized as Top Fintech Recruiter",
                        "2023: 100+ team members globally"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          </div>
                          <span className="ml-3 text-gray-200">
                            {item}
                        </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;