import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiMapPin, FiDollarSign, FiBriefcase, FiFilter, 
FiX, FiChevronDown, FiChevronUp,FiClock,FiExternalLink,FiBookmark,
FiLoader} from 'react-icons/fi';
import { Job, ArbeitnowApiResponse } from '../type';

type FilterOptions = {
    search: string;
    location: string;
    jobType: string;
    remoteOnly: boolean;
};

const JobSearchPage = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [filters, setFilters] = useState<FilterOptions>({
    search: '',
    location: '',
    jobType: '',
    remoteOnly: false
  });
  const [showFilters, setShowFilters] = useState(false);
  const [savedJobs, setSavedJobs] = useState<string[]>([]);

  // Fetch jobs from API
  const fetchJobs = async (pageNumber: number, currentFilters: FilterOptions) => {
    setLoading(true);
    setError(null);

    // query parameters based on filters
    const params = new URLSearchParams({
      page: pageNumber.toString(),
      ...(currentFilters.search && { search: currentFilters.search }),
      ...(currentFilters.location && { location: currentFilters.location }),
      ...(currentFilters.jobType && { job_types: currentFilters.jobType }),
      ...(currentFilters.remoteOnly && { remote: 'true' })
    });

    try {
      const response = await fetch(
        `https://www.arbeitnow.com/api/job-board-api?${params.toString()}`
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch jobs: ${response.status}`);
      }

      const data: ArbeitnowApiResponse = await response.json();

      if (!data?.data || !Array.isArray(data.data)) {
        throw new Error('Invalid API response structure');
      }

      const transformedJobs: Job[] = data.data.map((job) => ({
        id: job.slug,
        title: job.title,
        company: job.company_name,
        location: job.location,
        salary: 'Negotiable',
        type: job.job_types.join(', '),
        posted: formatDate(job.created_at),
        description: job.description,
        skills: job.tags,
        url: job.url,
        remote: job.remote,
        isFeatured: Math.random() > 0.8
      }));

      // Replace jobs when filters change, append when loading more
      setJobs(prev => pageNumber === 1 ? transformedJobs : [...prev, ...transformedJobs]);
      setHasMore(data.data.length > 0);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
        console.error('Fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

  // date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Load initial jobs
  useEffect(() => {
    fetchJobs(1, filters);
    // Load saved jobs from localStorage
    const saved = localStorage.getItem('savedJobs');
    if (saved) {
      setSavedJobs(JSON.parse(saved));
    }
  }, [filters]);

  // Load more jobs
  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchJobs(nextPage, filters);
  };

  // Toggle saved job
  const toggleSavedJob = (jobId: string) => {
    const newSavedJobs = savedJobs.includes(jobId)
      ? savedJobs.filter(id => id !== jobId)
      : [...savedJobs, jobId];

    setSavedJobs(newSavedJobs);
    localStorage.setItem('savedJobs', JSON.stringify(newSavedJobs));
  };

  // Clear all filters
  const clearFilters = () => {
    setFilters({
      search: '',
      location: '',
      jobType: '',
      remoteOnly: false
    });
  };

  // Extract unique filter options
  const locations = [...new Set(jobs.map(job => job.location))];
  const jobTypes = [...new Set(jobs.flatMap(job => job.type.split(', ')))];
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-16
        px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Find Your Dream Job
            </h1>
            <p className="text-lg sm:text-xl max-w-3xl">
              Browse thousands of job listings from top companies worldwide.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center
                pointer-events-none">
                <FiSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Job title, company, or keywords"
                className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg
                  focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={filters.search}
                onChange={(e) => setFilters({...filters, search: e.target.value})}
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center justify-center px-4 py-3 bg-gray-100 
              hover:bg-gray-200 rounded-lg transition-colors md:w-auto"
            >
              <FiFilter className="mr-2" />
              Filters
              {showFilters ? <FiChevronUp className="ml-2" /> : <FiChevronDown className="ml-2" />}
            </button>
          </div>

          {/* Expanded Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t 
                  border-gray-200">
                  {/* Location Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Location
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center
                        pointer-events-none">
                        <FiMapPin className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        placeholder="Any location"
                        className="pl-10 pr-4 py-2 w-full border border-gray-300
                        rounded-lg focus:ring-2 focus:ring-blue-500 
                        focus:border-blue-500"
                        value={filters.location}
                        onChange={(e) => setFilters({...filters, location: e.target.value})}
                        list="locations"
                      />
                      <datalist id="locations">
                        {locations.map((location) => (
                          <option key={location} value={location} />
                        ))}
                      </datalist>
                    </div>
                  </div>

                  {/* Job Type Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Job Type
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center
                      pointer-events-none">
                        <FiBriefcase className="text-gray-400" />
                      </div>
                      <select
                        className="pl-10 pr-4 py-2 w-full border border-gray-300
                        rounded-lg focus:ring-2 focus:ring-blue-500 
                        focus:border-blue-500"
                        value={filters.jobType}
                        onChange={(e) => setFilters({...filters, jobType: e.target.value})}
                      >
                        <option value="">All Types</option>
                        {jobTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Remote Filter */}
                  <div className="flex items-end">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 
                        border-gray-300 rounded"
                        checked={filters.remoteOnly}
                        onChange={(e) => setFilters({...filters, remoteOnly: e.target.checked})}
                      />
                      <span className="text-sm text-gray-700">Remote only</span>
                    </label>
                  </div>
                </div>

                {(filters.location || filters.jobType || filters.remoteOnly) && (
                  <div className="flex justify-end mt-4">
                    <button
                      onClick={clearFilters}
                      className="flex items-center text-sm text-blue-600 
                      hover:text-blue-800"
                    >
                      <FiX className="mr-1" />
                      Clear all filters
                    </button>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Results Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start 
          sm:items-center mb-6 gap-4">
          <h2 className="text-xl font-semibold text-gray-800">
            {jobs.length} {jobs.length === 1 ? 'Job' : 'Jobs'} Found
            {filters.search && ` for "${filters.search}"`}
            {filters.remoteOnly && " (Remote only)"}
            {filters.jobType && ` in ${filters.jobType}`}
            {filters.location && ` near ${filters.location}`}
          </h2>
          <div className="text-sm text-gray-500">
            Showing {jobs.length} of {jobs.length} total jobs
          </div>
        </div>

        {/* Job Listings */}
        {error ? (
          <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6 rounded">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">Error loading jobs</h3>
                <div className="mt-2 text-sm text-red-700">
                  <p>{error}</p>
                  <button
                    onClick={() => fetchJobs(page, filters)}
                    className="mt-2 inline-flex items-center text-sm font-medium 
                    text-red-800 hover:text-red-700"
                  >
                    Try again
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : loading && jobs.length === 0 ? (
          <div className="space-y-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow-md p-6 animate-pulse">
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3 mb-4"></div>
                <div className="flex flex-wrap gap-2">
                  <div className="h-6 bg-gray-200 rounded-full w-20"></div>
                  <div className="h-6 bg-gray-200 rounded-full w-16"></div>
                  <div className="h-6 bg-gray-200 rounded-full w-24"></div>
                </div>
              </div>
            ))}
          </div>
        ) : jobs.length > 0 ? (
          <>
            <div className="space-y-6">
              {jobs.map((job) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  layout
                >
                  <div className={`bg-white rounded-lg shadow-md overflow-hidden 
                    border-l-4 ${job.isFeatured ? 'border-blue-500' : 'border-transparent'} hover:shadow-lg transition-shadow`}>
                    <div className="p-6">
                      <div className="flex flex-col md:flex-row md:justify-between
                      md:items-start gap-4">
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <h3 className="text-xl font-bold text-gray-900">
                              {job.title}
                            </h3>
                            {job.isFeatured && (
                              <span className="bg-blue-100 text-blue-800 text-xs
                              font-medium px-2 py-0.5 rounded">
                                Featured
                              </span>
                            )}
                            {job.remote && (
                              <span className="bg-green-100 text-green-800 text-xs
                              font-medium px-2 py-0.5 rounded">
                                Remote
                              </span>
                            )}
                          </div>
                          <p className="text-gray-600 mb-2">{job.company} • {job.location}</p>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full flex items-center">
                              <FiBriefcase className="mr-1" /> {job.type}
                            </span>
                            <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full flex items-center">
                              <FiDollarSign className="mr-1" /> {job.salary}
                            </span>
                            <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full flex items-center">
                              <FiClock className="mr-1" /> {job.posted}
                            </span>
                          </div>
                          
                          <p className="text-gray-700 mb-4 line-clamp-2">{job.description}</p>
                          
                          {job.skills.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                              {job.skills.slice(0, 5).map((skill) => (
                                <span key={skill} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                                  {skill}
                                </span>
                              ))}
                              {job.skills.length > 5 && (
                                <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
                                  +{job.skills.length - 5} more
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                        
                        <div className="flex flex-col items-start md:items-end gap-3">
                          <button
                            onClick={() => toggleSavedJob(job.id)}
                            className={`text-sm flex items-center ${savedJobs.includes(job.id) ? 'text-blue-600' : 'text-gray-500 hover:text-blue-600'}`}
                          >
                            <FiBookmark className={`mr-1 ${savedJobs.includes(job.id) ? 'fill-current' : ''}`} />
                            {savedJobs.includes(job.id) ? 'Saved' : 'Save'}
                          </button>
                          <a
                            href={job.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center whitespace-nowrap"
                          >
                            Apply Now <FiExternalLink className="ml-2" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Load More Button */}
            {hasMore && (
              <div className="mt-8 text-center">
                <button
                  onClick={loadMore}
                  disabled={loading}
                  className="inline-flex items-center px-4 py-2 border border-transparent
                  text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 
                  hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
                  focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <FiLoader className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                      Loading...
                    </>
                  ) : (
                    'Load More Jobs'
                  )}
                </button>
              </div>
            )}
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-lg shadow-md p-12 text-center"
          >
            <div className="mx-auto max-w-md">
              <FiSearch className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-lg font-medium text-gray-900">No jobs found</h3>
              <p className="mt-1 text-gray-500">
                {filters.search || filters.location || filters.jobType || filters.remoteOnly
                  ? "Try adjusting your search or filter criteria"
                  : "No jobs available at the moment. Please check back later."}
              </p>
              {(filters.search || filters.location || filters.jobType || filters.remoteOnly) && (
                <div className="mt-6">
                  <button
                    onClick={clearFilters}
                    className="inline-flex items-center px-4 py-2 border border-transparent
                    text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 
                    hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
                    focus:ring-blue-500"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default JobSearchPage






