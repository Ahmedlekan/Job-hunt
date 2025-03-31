import { motion } from 'framer-motion';
import { FaUserTie, FaHandshake, FaChartLine, FaLightbulb, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { openPositions } from '../constants';

const benefits = [
    {
      icon: <FaUserTie className="text-4xl text-blue-500" />,
      title: "Career Growth",
      description: "Structured progression paths and leadership opportunities"
    },
    {
      icon: <FaHandshake className="text-4xl text-blue-500" />,
      title: "Competitive Packages",
      description: "Base salary + uncapped commission + bonuses"
    },
    {
      icon: <FaChartLine className="text-4xl text-blue-500" />,
      title: "Performance Rewards",
      description: "Quarterly incentives and annual awards"
    },
    {
      icon: <FaLightbulb className="text-4xl text-blue-500" />,
      title: "Learning Culture",
      description: "Ongoing training and development programs"
    },
    {
      icon: <FaUsers className="text-4xl text-blue-500" />,
      title: "Team Environment",
      description: "Collaborative culture with regular socials"
    }
  ];

const CareersPage = () => {  

  return (
    <div className="relative w-full min-h-screen overflow-hidden">

      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1920')",
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r 
            from-black/65 to-black/65 z-10" />
        
        {/* Content */}
        <div className="relative z-20 h-full flex items-center justify-center">
          <motion.div
            className="text-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join <span className="text-blue-300">Our Team</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Build your career with a recruitment firm that values your growth 
              and success
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Why Join Us Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
                Why Join Job Hunt?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're building a different kind of recruitment firm - one
              that invests in your long-term success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5
            gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md border 
                border-gray-100 hover:shadow-lg transition-shadow text-center"
              >
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                    {benefit.title}
                </h3>
                <p className="text-gray-600">
                    {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Open Positions Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
                Current Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our open positions and find where you fit in our growing team
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((position) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md overflow-hidden
                border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center
                  md:justify-between">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-2xl font-bold text-gray-800 mb-1">
                        {position.title}
                    </h3>
                      <div className="flex flex-wrap gap-3 mt-2">
                        <span className="bg-blue-100 text-blue-800
                        text-sm font-medium px-3 py-1 rounded-full">
                          {position.department}
                        </span>
                        <span className="bg-green-100 text-green-800
                        text-sm font-medium px-3 py-1 rounded-full">
                          {position.type}
                        </span>
                        <span className="bg-purple-100 text-purple-800
                        text-sm font-medium px-3 py-1 rounded-full">
                          {position.location}
                        </span>
                      </div>
                    </div>
                    <div>
                      <Link
                        to={`/careers/apply/${position.id}`}
                        className="inline-block bg-blue-600 hover:bg-blue-700 
                        text-white font-medium py-2 px-6 rounded-lg transition-colors"
                      >
                        Apply Now
                      </Link>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600">{position.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Culture CTA Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl
          p-12 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Experience Our Culture
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Not sure if we're the right fit? Come meet the team and see
            what makes Job Hunt special.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100
              font-medium py-3 px-8 rounded-lg transition-colors"
            >
              Arrange a Visit
            </Link>
            <Link
              to="/about"
              className="bg-transparent border-2 border-white text-white
              hover:bg-white/10 font-medium py-3 px-8 rounded-lg transition-colors"
            >
              Learn About Us
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default CareersPage;