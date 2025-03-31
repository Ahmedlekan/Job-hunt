import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

type ProgressCircleProps = {
  percentage?: number;
  ratio?: string;
  label: string;
};

const ProgressCircle = ({ percentage = 0, label, ratio }: ProgressCircleProps) => {
  const circleRadius = 40;
  const circleCircumference = 2 * Math.PI * circleRadius;
  const progressOffset = circleCircumference - (percentage / 100) * circleCircumference;

  // Color variants
  const strokeColor = percentage === 98 ? '#3b82f6' : '#999999';

  return (
    <motion.div 
      className="flex flex-col items-center"
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <svg
        width="200"
        height="200"
        viewBox="0 0 120 120"
        className="mb-4"
      >
        {/* Background circle*/}
        <circle
          cx="60"
          cy="60"
          r={circleRadius}
          stroke="#2d3748"
          strokeWidth="8"
          fill="none"
        />
        {/* Progress circle*/}
        <motion.circle
          cx="60"
          cy="60"
          r={circleRadius}
          stroke={strokeColor}
          strokeWidth="8"
          fill="none"
          strokeDasharray={circleCircumference}
          strokeDashoffset={circleCircumference}
          transform="rotate(-90 60 60)"
          initial={{ strokeDashoffset: circleCircumference }}
          animate={{ strokeDashoffset: progressOffset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          strokeLinecap="round"
        />

        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          className="text-2xl font-bold"
          fill='white' 
        >
          {ratio || `${percentage}%`}
        </text>

      </svg>
      <p className="text-gray-300 text-sm md:text-base
        text-center font-medium max-w-[120px]">
        {label}
      </p>
    </motion.div>
  );
};

const WhyUs = () => {
  return (
    <section className="bg-black text-white py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2
      gap-12 lg:gap-16 items-center">
        {/* Left Content Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-blue-400 font-semibold tracking-wider mb-2 block">
            WHY CHOOSE US
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            The Job Hunt <br className="hidden sm:block" />Difference
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-lg">
            Our exceptional service speaks for itself. We deliver quick,
            fuss-free solutions tailored to every client and candidate we work with.
          </p>
          <Link to="/contact-us"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium
            py-3 px-8 rounded-lg transition-colors duration-300"
          >
            Discover Our Approach
          </Link>
        </motion.div>

        {/* Right Stats Section */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1
          xl:grid-cols-3 gap-6 sm:gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <ProgressCircle
            percentage={10}
            ratio="1.3:1"
            label="CVs to 1st Interview"
          />
          <ProgressCircle
            percentage={25}
            ratio="6.2:1"
            label="Interview to Placement"
          />
          <ProgressCircle
            percentage={98}
            label="Probation Success Rate"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;