import { motion } from 'framer-motion';
import { FaChartLine, FaCalculator, FaBrain, FaDatabase, FaRobot, FaMoneyBillWave } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const QuantitativeTrading = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Hero Section with Background Image */}
      <div className="relative h-[70vh] w-full">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1920')",
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent z-10" />
        
        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <motion.div
            className="text-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Quantitative <span className="text-blue-400">Trading & Research</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Connecting elite quantitative talent with leading hedge funds, prop trading firms, and investment banks.
            </p>
          </motion.div>
        </div>
      </div>

      {/* First Content with Overlay */}
      <div className="relative w-full py-20">
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black z-10"></div>
        
        {/* Content Container */}
        <div className="relative z-20 flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto px-4 space-y-8 md:space-y-0 md:space-x-12">
          {/* Left Image Section */}
          <div className="w-full md:w-1/2">
            <motion.img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1920"
              alt="Quantitative Analysis"
              className="rounded-lg shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />
          </div>

          {/* Right Text Section */}
          <motion.div 
            className="w-full md:w-1/2 text-white"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="mb-6 text-lg">
              Our Quantitative Trading & Research practice specializes in placing exceptional quantitative analysts, researchers, and developers across global financial markets.
            </p>
            <p className="mb-6 text-lg">
              We understand the unique blend of mathematical prowess, programming skills, and financial intuition required to excel in this competitive field.
            </p>
            <p className="mb-6 text-lg">
              With deep connections across hedge funds, proprietary trading firms, and investment banks, we identify talent that can drive alpha generation and risk management.
            </p>
            <Link 
              to="/contact-us" 
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-lg transition-colors"
            >
              Discuss Your Needs
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Quantitative Specialists</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  We place quants across all asset classes and strategies, from high-frequency trading to systematic macro, with particular expertise in equities, FX, and derivatives.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Our team includes former quants and trading technologists who understand the nuances of pricing models, signal research, and execution algorithms.
                </p>
                <Link 
                  to="/contact-us" 
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
                >
                  Connect With Us
                </Link>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Core Disciplines</h3>
                <ul className="space-y-3">
                  {['Quantitative Research', 'Algorithmic Trading', 'Risk Modeling', 'Execution Strategies', 'Machine Learning in Finance'].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      </div>
                      <span className="ml-3 text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Services Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Our Quantitative Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaChartLine className="text-4xl text-blue-500" />,
                title: "Quant Researchers",
                description: "PhD-level talent specializing in alpha research, signal development, and predictive modeling."
              },
              {
                icon: <FaCalculator className="text-4xl text-blue-500" />,
                title: "Quant Developers",
                description: "Experts in building and optimizing trading systems, backtest frameworks, and research infrastructure."
              },
              {
                icon: <FaBrain className="text-4xl text-blue-500" />,
                title: "AI/ML Specialists",
                description: "Professionals applying machine learning and deep learning techniques to financial markets."
              },
              {
                icon: <FaDatabase className="text-4xl text-blue-500" />,
                title: "Data Scientists",
                description: "Specialists in alternative data analysis, feature engineering, and large-scale financial datasets."
              },
              {
                icon: <FaRobot className="text-4xl text-blue-500" />,
                title: "Algo Traders",
                description: "Traders who develop and implement automated trading strategies across asset classes."
              },
              {
                icon: <FaMoneyBillWave className="text-4xl text-blue-500" />,
                title: "Risk Quants",
                description: "Experts in market risk modeling, portfolio construction, and stress testing methodologies."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 md:p-12 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Ready to Strengthen Your Quantitative Team?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Whether you need a single quant researcher or an entire desk, we can identify the specialized talent to drive your strategies forward.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact-us" 
              className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors"
            >
              Contact Our Team
            </Link>
            <Link 
              to="/jobs" 
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium py-3 px-8 rounded-lg transition-colors"
            >
              View Quant Opportunities
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default QuantitativeTrading;