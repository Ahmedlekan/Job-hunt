import { motion } from 'framer-motion';
import { FaHandshake, FaChartLine, FaUsers, FaLightbulb, FaHeadset } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const clientServices = [
    {
      icon: <FaHandshake className="text-4xl text-blue-500" />,
      title: "Talent Acquisition",
      description: "End-to-end recruitment solutions tailored to your specific needs"
    },
    {
      icon: <FaChartLine className="text-4xl text-blue-500" />,
      title: "Market Intelligence",
      description: "Insights on compensation benchmarks and competitor analysis"
    },
    {
      icon: <FaUsers className="text-4xl text-blue-500" />,
      title: "Workforce Planning",
      description: "Strategic hiring plans aligned with your business objectives"
    },
    {
      icon: <FaLightbulb className="text-4xl text-blue-500" />,
      title: "Employer Branding",
      description: "Enhance your appeal to top-tier candidates"
    },
    {
      icon: <FaHeadset className="text-4xl text-blue-500" />,
      title: "Retained Search",
      description: "Dedicated partnership for your most critical hires"
    }
];

const testimonials = [
{
    quote: "Job Hunt transformed our tech hiring, delivering candidates we couldn't find through other channels.",
    author: "Sarah Chen, CTO at FinTech Innovations",
    company: "FinTech Innovations"
},
{
    quote: "Their understanding of our culture and requirements resulted in perfect placements every time.",
    author: "Michael Johnson, HR Director at NexaSystems",
    company: "NexaSystems"
},
{
    quote: "We've reduced our time-to-hire by 40% while improving candidate quality since partnering with them.",
    author: "David Wilson, Head of Talent at UrbanTech",
    company: "UrbanTech"
}
];

const industriesServed = [
"Financial Services",
"Technology",
"Healthcare",
"Professional Services",
"E-commerce",
"Cybersecurity",
"Artificial Intelligence",
"Clean Energy"
]

const ClientsPage = () => {

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1920')",
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r 
            from-black/75 to-black/75 z-10" />
        
        {/* Content */}
        <div className="relative z-20 h-full flex items-center
            justify-center">
          <motion.div
            className="text-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-blue-300">Clients</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Partnering with innovative organizations to build world-class teams
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Client Services Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
                Client Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive recruitment services designed to meet your
              unique talent needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5
            gap-6">
            {clientServices.map((service, index) => (
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
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                    {service.title}
                </h3>
                <p className="text-gray-600">
                    {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Industries Served Section */}
        <section className="mb-20">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                Industries We Serve
                </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Specialized expertise across multiple sectors
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3">
              {industriesServed.map((industry, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-blue-100 text-blue-800 text-lg font-medium
                  px-4 py-2 rounded-lg"
                >
                  {industry}
                </motion.span>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
                Client Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear what our clients say about working with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md border 
                border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="mb-6">
                  <svg className="w-12 h-12 mx-auto text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <blockquote className="mb-6">
                  <p className="text-lg text-gray-700 italic">
                    "{testimonial.quote}"
                    </p>
                </blockquote>
                <div className="text-right">
                  <p className="font-semibold text-gray-800">
                    {testimonial.author}
                </p>
                  <p className="text-gray-600">{testimonial.company}</p>
                </div>
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
          className="bg-gradient-to-r from-blue-600 to-blue-800
          rounded-xl p-12 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Ready to Transform Your Hiring?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Partner with us to access top talent and strategic recruitment solutions
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100
              font-medium py-3 px-8 rounded-lg transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              to="/services"
              className="bg-transparent border-2 border-white text-white 
              hover:bg-white/10 font-medium py-3 px-8 rounded-lg transition-colors"
            >
              Our Services
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ClientsPage;

