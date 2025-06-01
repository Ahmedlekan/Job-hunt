import React from 'react';
import { offices } from '../../constants';
import OfficeCard from '../ui/OfficeCard';
import {Link} from "react-router-dom"


const OurOfficesSection: React.FC = () => {
  return (
    <div className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Our Offices</h2>
          <Link to="/contact-us" className="bg-blue-500 text-white px-6 py-3
            rounded-lg font-semibold hover:bg-blue-600 transition
            duration-300"
          >
            Get in touch
          </Link>
        </div>

        {/* Office Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offices.map((office, index) => (
            <OfficeCard key={index} {...office} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurOfficesSection;

