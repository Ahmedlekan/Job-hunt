import { motion } from 'framer-motion';
import { FaShieldAlt, FaBalanceScale, FaChartLine, FaGavel, FaLock, FaUserShield } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const RiskGovernance = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Hero Section with Background Image */}
      <div className="relative h-[70vh] w-full">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1920')",
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
              Risk & <span className="text-blue-400">Governance</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Expert recruitment for risk management, compliance, and corporate governance professionals
            </p>
          </motion.div>
        </div>
      </div>

      {/* First Content with Overlay */}
      <div className="relative w-full py-20 bg-gray-900">
        {/* Content Container */}
        <div className="relative z-20 flex flex-col md:flex-row
            items-center justify-center max-w-6xl mx-auto px-4 space-y-8
            md:space-y-0 md:space-x-12">
          {/* Left Image Section */}
          <div className="w-full md:w-1/2">
            <motion.img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1920"
              alt="Risk Management"
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
            <h2 className="text-3xl font-bold mb-6">Building Resilient Organizations</h2>
            <p className="mb-6 text-lg">
              In today's complex regulatory environment, effective risk management and governance 
              are critical to organizational success. We specialize in connecting companies with 
              top-tier professionals who can navigate these challenges.
            </p>
            <p className="mb-6 text-lg">
              Our team understands the nuanced requirements of risk and governance roles across 
              financial services, healthcare, technology, and other regulated industries.
            </p>
            <p className="mb-6 text-lg">
              We take pride in our ability to identify professionals who not only meet technical 
              requirements but also align with your organization's culture and strategic objectives.
            </p>
            <Link 
              to="about-us" 
              className="inline-block bg-blue-500 hover:bg-blue-600 
              text-white font-medium py-3 px-8 rounded-lg transition-colors"
            >
              Learn About Our Approach
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
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Risk & Governance Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  We place professionals across all areas of risk management and governance, 
                  from operational risk specialists to board-level governance advisors. Our 
                  network includes professionals with deep expertise in regulatory frameworks 
                  across multiple jurisdictions.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Whether you need interim support for a specific project or are building 
                  a permanent risk management function, we can connect you with the right talent.
                </p>
                <Link 
                  to="/contact-us" 
                  className="inline-block bg-blue-600 hover:bg-blue-700 
                  text-white font-medium py-3 px-8 rounded-lg transition-colors"
                >
                  Contact Our Specialists
                </Link>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Core Disciplines
                </h3>
                <ul className="space-y-3">
                  {['Enterprise Risk Management', 'Regulatory Compliance', 'Internal Audit', 'Corporate Governance', 'Financial Crime', 'Third-Party Risk'].map((item, i) => (
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
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Our Risk & Governance Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaShieldAlt className="text-4xl text-blue-500" />,
                title: "Enterprise Risk",
                description: "Chief Risk Officers, risk managers, and specialists in operational, credit, and market risk."
              },
              {
                icon: <FaBalanceScale className="text-4xl text-blue-500" />,
                title: "Compliance",
                description: "Experts in regulatory compliance across financial services, healthcare, and other regulated sectors."
              },
              {
                icon: <FaChartLine className="text-4xl text-blue-500" />,
                title: "Internal Audit",
                description: "Senior auditors and internal control specialists with industry-specific experience."
              },
              {
                icon: <FaGavel className="text-4xl text-blue-500" />,
                title: "Corporate Governance",
                description: "Board advisors, company secretaries, and governance professionals."
              },
              {
                icon: <FaLock className="text-4xl text-blue-500" />,
                title: "Financial Crime",
                description: "AML, fraud prevention, and financial crime investigation specialists."
              },
              {
                icon: <FaUserShield className="text-4xl text-blue-500" />,
                title: "Cyber Risk",
                description: "Professionals bridging the gap between cybersecurity and enterprise risk management."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md border 
                border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                    {service.title}
                </h3>
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
          className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl
          p-8 md:p-12 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Strengthen Your Risk & Governance Capabilities
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            From regulatory compliance to enterprise risk frameworks, we help you 
            build teams that protect and enhance your organization's value.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact-us" 
              className="bg-white text-blue-600 hover:bg-gray-100 font-medium
              py-3 px-8 rounded-lg transition-colors"
            >
              Contact Our Team
            </Link>
            <Link 
              to="/jobs" 
              className="bg-transparent border-2 border-white text-white 
              hover:bg-white/10 font-medium py-3 px-8 rounded-lg transition-colors"
            >
              View Risk & Governance Jobs
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default RiskGovernance;