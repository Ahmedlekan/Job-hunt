import { motion } from 'framer-motion';
import { FaCode, FaServer, FaCloud, FaShieldAlt, FaChartLine } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Technology = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Hero Section with Background Image */}
      <div className="relative h-[70vh] w-full">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1920')",
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
              Technology <span className="text-blue-400">Recruitment</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Connecting world-class technology talent with innovative
              organizations across all industries.
            </p>
          </motion.div>
        </div>
      </div>

      {/* First Content with Overlay */}
      <div className="relative w-full py-20">
        
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black z-10"></div>
        
        {/* Content Container */}
        <div className="relative z-20 flex flex-col md:flex-row
            items-center justify-center max-w-6xl mx-auto px-4 space-y-8
            md:space-y-0 md:space-x-12">
          {/* Left Image Section */}
          <div className="w-full md:w-1/2">
            <motion.img
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1920"
              alt="Office Interior"
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
              Since launching Job Hunt in 2014, our founders Lee Ballen and Steve
              Perkins have aimed to instil the business with three core characteristics:
              passion, integrity, and quality.
            </p>
            <p className="mb-6 text-lg">
              From day one, they made it their goal to ensure every client knew how much
              they cared and how they would go above and beyond to deliver a quality
              service.
            </p>
            <p className="mb-6 text-lg">
              We're proud to offer permanent, retained, interim, and contract solutions
              across a range of sectors with a service that is specialised and
              tailor-made for your success.
            </p>
            <Link 
              to="about-us" 
              className="inline-block bg-blue-500 hover:bg-blue-600 
              text-white font-medium py-3 px-8 rounded-lg transition-colors"
            >
              About Us
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
                Technology Specialists
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  We specialize in placing top-tier technology professionals
                  across software development, cloud computing, cybersecurity,
                  and enterprise architecture roles.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Our consultants have deep technical expertise and understand
                  the specific skills required for success in today's rapidly
                  evolving tech landscape.
                </p>
                <Link 
                  to="/contact-us" 
                  className="inline-block bg-blue-600 hover:bg-blue-700 
                  text-white font-medium py-3 px-8 rounded-lg transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                    Key Areas
                </h3>
                <ul className="space-y-3">
                  {['Software Engineering', 'DevOps & Cloud', 'Data Science & AI', 'Cybersecurity', 'Blockchain'].map((item, i) => (
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
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Our Technology Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaCode className="text-4xl text-blue-500" />,
                title: "Software Development",
                description: "Placement of full-stack, frontend, and backend developers across all major languages and frameworks."
              },
              {
                icon: <FaServer className="text-4xl text-blue-500" />,
                title: "DevOps & Infrastructure",
                description: "Experts in CI/CD pipelines, containerization, and cloud infrastructure management."
              },
              {
                icon: <FaCloud className="text-4xl text-blue-500" />,
                title: "Cloud Specialists",
                description: "AWS, Azure, and GCP certified professionals for your cloud transformation needs."
              },
              {
                icon: <FaShieldAlt className="text-4xl text-blue-500" />,
                title: "Cybersecurity",
                description: "Security architects, penetration testers, and compliance specialists."
              },
              {
                icon: <FaChartLine className="text-4xl text-blue-500" />,
                title: "Data Engineering",
                description: "Building and optimizing your data pipelines and analytics infrastructure."
              },
              {
                icon: <div className="text-4xl font-bold text-blue-500">AI</div>,
                title: "AI & Machine Learning",
                description: "Specialists in ML engineering, NLP, computer vision, and generative AI."
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
            Ready to Build Your Tech Team?
        </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Whether you need a single specialist or an entire development
            team, we can help you find the perfect talent.
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
              View Tech Jobs
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Technology;