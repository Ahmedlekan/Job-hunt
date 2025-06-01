// components/LatestJobsSection.tsx
import { JobsCarousel } from '../ui/JobsCarousel';
import { JobProps } from '../ui/JobCard';
import { Link } from 'react-router-dom';

const jobs: JobProps[] = [
  {
    title: 'Project Manager',
    salary: 'Up to $250,000',
    location: 'Chicago, IL',
    type: 'Permanent',
    description: 'My leading Financial Services client is looking for a talented and motivated Security Project Manager to take responsibility for security initiatives across their global infrastructure.',
    tags: ['Security', 'Project Management']
  },
  {
    title: 'Java Developer',
    salary: 'Up to $180,000 SGD',
    location: 'Singapore',
    type: 'Permanent',
    description: 'An Elite Trading Firm is looking for highly talented Software Engineers to work in a top team working on high-performance applications for their trading platform.',
    tags: ['Java', 'Trading', 'Low Latency']
  },
  {
    title: 'Linux Engineer',
    salary: 'Up to $120,000',
    location: 'Singapore',
    type: 'Permanent',
    description: 'My client is looking for a talented Linux Engineer to join their growing tech team. The ideal candidate will have experience in high-availability systems and cloud infrastructure.',
    tags: ['Linux', 'DevOps', 'Cloud']
  },
  {
    title: 'Frontend Developer',
    salary: '£80,000 - £100,000',
    location: 'London, UK',
    type: 'Permanent',
    description: 'Join a fast-growing fintech startup as a Frontend Developer working with modern React, TypeScript and Next.js to build their customer-facing applications.',
    tags: ['React', 'TypeScript', 'Fintech']
  }
];

const LatestJobsSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Latest Opportunities</h2>
            <p className="text-gray-600 max-w-lg">
              Browse our current openings and find your next career move in finance and technology.
            </p>
          </div>
          <Link to="/jobs"
            className="inline-flex items-center justify-center px-6 py-3
            border border-transparent text-base font-medium rounded-md 
            text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm"
          >
            View All Jobs
          </Link>
        </div>

        <JobsCarousel jobs={jobs} />
      </div>
    </section>
  );
};

export default LatestJobsSection