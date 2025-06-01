import { motion } from 'framer-motion';
import { FaExchangeAlt, FaUsers, FaChartBar, FaLightbulb, FaHandshake } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Transformation = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Hero Section with Background Image */}
      <div className="relative h-[70vh] w-full">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1920')",
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
              Change & <span className="text-blue-400">Transformation</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Driving organizational evolution through strategic talent solutions and digital transformation expertise.
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
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1920"
              alt="Team Collaboration"
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
              In today's rapidly evolving business landscape, transformation is no longer optional. Our Change & Transformation practice helps organizations navigate complex transitions with confidence.
            </p>
            <p className="mb-6 text-lg">
              We specialize in placing professionals who can drive digital transformation, organizational change, and process improvement initiatives that deliver measurable results.
            </p>
            <p className="mb-6 text-lg">
              From agile coaches to transformation directors, we connect you with the right talent to ensure your change initiatives succeed.
            </p>
            <Link 
              to="/contact-us" 
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-lg transition-colors"
            >
              Start Your Transformation
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
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Transformation Specialists</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  We identify and place professionals who can lead and execute complex transformation programs across industries, with particular expertise in financial services and technology sectors.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Our consultants understand both the strategic and operational aspects of change management, ensuring we match you with candidates who can drive real business impact.
                </p>
                <Link 
                  to="/contact-us" 
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
                >
                  Speak With Our Experts
                </Link>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Core Competencies</h3>
                <ul className="space-y-3">
                  {['Digital Transformation', 'Organizational Change', 'Process Reengineering', 'Agile Transformation', 'Cultural Change'].map((item, i) => (
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
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Our Transformation Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaExchangeAlt className="text-4xl text-blue-500" />,
                title: "Change Management",
                description: "Leaders who can design and implement effective change strategies across your organization."
              },
              {
                icon: <FaUsers className="text-4xl text-blue-500" />,
                title: "Organizational Design",
                description: "Experts in restructuring organizations for maximum efficiency and agility."
              },
              {
                icon: <FaChartBar className="text-4xl text-blue-500" />,
                title: "Process Improvement",
                description: "Specialists in Lean, Six Sigma, and operational excellence methodologies."
              },
              {
                icon: <FaLightbulb className="text-4xl text-blue-500" />,
                title: "Digital Transformation",
                description: "Professionals who can lead technology-driven business transformations."
              },
              {
                icon: <FaHandshake className="text-4xl text-blue-500" />,
                title: "Stakeholder Engagement",
                description: "Experts in managing complex stakeholder landscapes during periods of change."
              },
              {
                icon: <div className="text-4xl font-bold text-blue-500">PMO</div>,
                title: "Transformation PMO",
                description: "Program managers who can establish and run effective transformation offices."
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
          className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 md:p-12 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Ready to Transform Your Organization?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Whether you're embarking on digital transformation or cultural change, we have the expertise to help you build the right team.
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
              View Transformation Roles
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Transformation;