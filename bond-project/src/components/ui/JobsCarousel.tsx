// components/JobsCarousel.tsx
import { useRef } from 'react';
import { JobCard } from './JobCard';
import { JobProps } from './JobCard';

interface JobsCarouselProps {
  jobs: JobProps[];
}

export const JobsCarousel = ({ jobs }: JobsCarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex flex-col md:flex-row gap-6
        overflow-x-auto scrollbar-hide scroll-smooth
        pb-4"
      >
        {jobs.map((job, index) => (
          <JobCard key={`job-${index}`} {...job} />
        ))}
      </div>

      <button
        onClick={() => scroll('left')}
        className="absolute -left-4 top-1/2 -translate-y-1/2 
        bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 
        focus:outline-none border border-gray-200"
        aria-label="Scroll left"
      >
        <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => scroll('right')}
        className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white 
        p-3 rounded-full shadow-lg hover:bg-gray-50 focus:outline-none
        border border-gray-200"
        aria-label="Scroll right"
      >
        <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};