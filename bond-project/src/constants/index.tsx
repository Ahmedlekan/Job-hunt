import tech from "../assets/tech.jpg"
import tranformation from "../assets/tranform.jpg"
import research from "../assets/research.jpg"
import finance from "../assets/finance.jpg"
import cyber from "../assets/cyber.jpg"
import risk from "../assets/risk.jpg"
import sales from "../assets/marketing.jpg"
import operations from "../assets/operations.jpg"
import montreal from "../assets/montreal.jpg"
import toronto from "../assets/Toronto.jpg"
import london from "../assets/london.jpg"


export type BlogProps = {
    title: string;
    date: string;
    imageUrl: string;
    link: string;
  };

  // Office type definition
export type OfficeProps = {
    city: string;
    phone: string;
    imageUrl: string;
  };
  
  // Office data
 export const offices: OfficeProps[] = [
    {
      city: 'Montreal',
      phone: '+1 438 994 4503',
      imageUrl: montreal
    },
    {
      city: 'Toronto',
      phone: '+1 438 994 4503',
      imageUrl: toronto
    },
    {
      city: 'London',
      phone: '+1 438 994 4503',
      imageUrl: london,
    },
  ];
  

export const sectors = [
    {
      title: 'Technology',
      image: tech,
      path: 'technology'
    },
    {
      title: 'Change and Transformation',
      image: tranformation,
      path: 'change-and-transformation'
    },
    {
      title: 'Quantitative Trading and Research',
      image: research,
      path: 'quantitative-trading-and-research'
    },
    {
      title: 'Finance',
      image: finance,
      path: 'finance'
    },
    {
      title: 'Information and Cyber Security',
      image: cyber,
      path: 'information-and-cyber-security'
    },
    {
      title: 'Risk & Governance',
      image: risk,
      path: 'risk-governance'
    },
    {
      title: 'Sales/Marketing/HR',
      image: sales,
      path: 'sales/marketing/hr'
    },
    {
      title: 'Operations',
      image: operations,
      path: 'operations'
    },
  ];

 export const blogs: BlogProps[] = [
    {
      title: 'The Hidden Job Market: Are You Missing Out?',
      date: 'March 20th, 2025',
      imageUrl: risk,
      link: '#',
    },
    {
      title: 'What is Change and Transformation in Business?',
      date: 'March 19th, 2025',
      imageUrl: tranformation,
      link: '#',
    },
    {
      title: "180 vs. 360 Recruitment – What's the Difference?",
      date: 'March 12th, 2025',
      imageUrl: sales,
      link: '#',
    },
  ];

export  const openPositions = [
    {
      id: 1,
      title: "Recruitment Consultant",
      department: "Technology",
      type: "Full-time",
      location: "London, UK",
      description: "Join our tech recruitment team to connect top talent with leading organizations."
    },
    {
      id: 2,
      title: "Senior HR Advisor",
      department: "Human Resources",
      type: "Full-time",
      location: "Remote",
      description: "Shape our talent strategy and employee experience as we grow."
    },
    {
      id: 3,
      title: "Business Development Manager",
      department: "Sales",
      type: "Full-time",
      location: "London, UK",
      description: "Develop new client relationships and expand our market presence."
    },
    {
      id: 4,
      title: "Marketing Specialist",
      department: "Marketing",
      type: "Contract",
      location: "Hybrid",
      description: "Drive our brand awareness and candidate engagement initiatives."
    }
  ];
  