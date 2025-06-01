import {Link} from "react-router-dom"
import right from "../../assets/right.jpg"

const AboutSection = () => {
  return (
    <div className="bg-black text-white py-16 px-4">
      {/* Quote Section */}
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl md:text-4xl italic font-semibold leading-relaxed">
          "The name Job Hunt symbolises our passion for hunting the best possible
          candidates while creating long-lasting bonds with clients."
        </h2>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center
        justify-center max-w-6xl mx-auto space-y-8 md:space-y-0 md:space-x-12">
        {/* Left Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={right}
            alt="Office Interior"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Text Section */}
        <div className="w-full md:w-1/2 text-left">
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
            We’re proud to offer permanent, retained, interim, and contract solutions
            across a range of sectors with a service that is specialised and
            tailor-made for your success.
          </p>
          <Link to="about-us" className="bg-blue-500 hover:bg-blue-700 
            text-white font-bold py-3 px-6 rounded">
            About Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
