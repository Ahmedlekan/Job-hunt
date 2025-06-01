import { motion } from 'framer-motion';
import { FaCogs, FaWarehouse, FaTruck, FaClipboardCheck, FaChartPie, FaExchangeAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Operations = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Hero Section with Background Image */}
      <div className="relative h-[70vh] w-full">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1486401899868-0e435ed85128?q=80&w=1920')",
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
              Operations <span className="text-blue-400">Recruitment</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Connecting exceptional operations talent with organizations driving efficiency and excellence
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
              src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1920"
              alt="Operations Team"
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
            <h2 className="text-3xl font-bold mb-6">Operational Excellence Specialists</h2>
            <p className="mb-6 text-lg">
              We specialize in placing high-caliber operations professionals across manufacturing, 
              logistics, supply chain, and business operations. Our consultants understand the 
              critical role operations play in organizational success.
            </p>
            <p className="mb-6 text-lg">
              From frontline supervisors to COOs, we've helped build operations teams that 
              drive efficiency, reduce costs, and enhance productivity across multiple industries.
            </p>
            <p className="mb-6 text-lg">
              Our industry-specific approach ensures we match not just technical skills but also 
              leadership qualities and cultural fit for long-term success.
            </p>
            <Link 
              to="about-us" 
              className="inline-block bg-blue-500 hover:bg-blue-600 
              text-white font-medium py-3 px-8 rounded-lg transition-colors"
            >
              Our Approach
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
              Operations Recruitment Experts
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  We place professionals across all operational functions including supply chain management, 
                  manufacturing operations, logistics, and business process improvement. Our extensive 
                  network includes both hands-on operators and strategic leaders.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Whether you need a single key hire or are building an entire operations team, 
                  our sector-specialized consultants deliver candidates who make a measurable impact.
                </p>
                <Link 
                  to="/contact-us" 
                  className="inline-block bg-blue-600 hover:bg-blue-700 
                  text-white font-medium py-3 px-8 rounded-lg transition-colors"
                >
                  Contact Our Team
                </Link>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Core Disciplines
                </h3>
                <ul className="space-y-3">
                  {['Supply Chain Management', 'Manufacturing Operations', 'Logistics & Distribution', 'Process Improvement', 'Quality Assurance', 'Inventory Control'].map((item, i) => (
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
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Our Operations Recruitment Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaCogs className="text-4xl text-blue-500" />,
                title: "Manufacturing",
                description: "Plant managers, production supervisors, and process engineers across industries."
              },
              {
                icon: <FaWarehouse className="text-4xl text-blue-500" />,
                title: "Supply Chain",
                description: "Procurement specialists, supply chain managers, and inventory control experts."
              },
              {
                icon: <FaTruck className="text-4xl text-blue-500" />,
                title: "Logistics",
                description: "Transportation managers, warehouse supervisors, and distribution specialists."
              },
              {
                icon: <FaClipboardCheck className="text-4xl text-blue-500" />,
                title: "Quality Control",
                description: "QA managers, quality engineers, and compliance specialists."
              },
              {
                icon: <FaChartPie className="text-4xl text-blue-500" />,
                title: "Operations Strategy",
                description: "Operations directors and COOs who transform business performance."
              },
              {
                icon: <FaExchangeAlt className="text-4xl text-blue-500" />,
                title: "Process Improvement",
                description: "Lean Six Sigma experts and continuous improvement professionals."
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
            Optimize Your Operations Team
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            From frontline managers to executive leadership, we help you find the operations 
            talent that drives efficiency and business success.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact-us" 
              className="bg-white text-blue-600 hover:bg-gray-100 font-medium
              py-3 px-8 rounded-lg transition-colors"
            >
              Contact Our Specialists
            </Link>
            <Link 
              to="/jobs" 
              className="bg-transparent border-2 border-white text-white 
              hover:bg-white/10 font-medium py-3 px-8 rounded-lg transition-colors"
            >
              View Operations Jobs
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Operations;