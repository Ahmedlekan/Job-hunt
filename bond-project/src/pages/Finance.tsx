import { motion } from 'framer-motion';
import { FaChartPie, FaPiggyBank, FaHandHoldingUsd, FaBalanceScale, FaBuilding, FaPercentage } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Finance = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Hero Section with Background Image */}
      <div className="relative h-[70vh] w-full">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1468254095679-bbcba94a7066?q=80&w=1920')",
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
              Finance <span className="text-blue-400">Recruitment</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Connecting exceptional financial talent with leading institutions across global markets.
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
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1920"
              alt="Financial District"
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
              Our Finance practice specializes in placing top-tier professionals across investment banking, asset management, private equity, and corporate finance.
            </p>
            <p className="mb-6 text-lg">
              With deep sector expertise and an extensive network, we identify candidates who combine technical excellence with commercial acumen.
            </p>
            <p className="mb-6 text-lg">
              From analysts to C-suite executives, we deliver tailored recruitment solutions for financial institutions of all sizes.
            </p>
            <Link 
              to="/contact" 
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
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Financial Specialists</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  We place professionals across all financial disciplines, with particular expertise in front-office revenue generators and strategic finance leadership.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Our consultants have direct industry experience and understand the unique demands of financial markets and institutions.
                </p>
                <Link 
                  to="/contact-us" 
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
                >
                  Connect With Us
                </Link>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Core Areas</h3>
                <ul className="space-y-3">
                  {['Investment Banking', 'Asset Management', 'Private Equity', 'Corporate Finance', 'Risk & Compliance'].map((item, i) => (
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
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Our Financial Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaChartPie className="text-4xl text-blue-500" />,
                title: "Investment Banking",
                description: "M&A, ECM, DCM, and industry specialists across all levels from Analyst to MD."
              },
              {
                icon: <FaPiggyBank className="text-4xl text-blue-500" />,
                title: "Asset Management",
                description: "Portfolio managers, research analysts, and distribution professionals across all asset classes."
              },
              {
                icon: <FaHandHoldingUsd className="text-4xl text-blue-500" />,
                title: "Private Equity",
                description: "Deal professionals, operating partners, and investor relations specialists."
              },
              {
                icon: <FaBalanceScale className="text-4xl text-blue-500" />,
                title: "Risk & Compliance",
                description: "Market risk, credit risk, operational risk, and regulatory compliance experts."
              },
              {
                icon: <FaBuilding className="text-4xl text-blue-500" />,
                title: "Corporate Finance",
                description: "FP&A, treasury, investor relations, and financial control professionals."
              },
              {
                icon: <FaPercentage className="text-4xl text-blue-500" />,
                title: "Wealth Management",
                description: "Private bankers, investment advisors, and family office specialists."
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
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Ready to Strengthen Your Finance Team?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Whether you need a single specialist or an entire team, we can identify the financial talent to drive your business forward.
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
              View Finance Jobs
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Finance;