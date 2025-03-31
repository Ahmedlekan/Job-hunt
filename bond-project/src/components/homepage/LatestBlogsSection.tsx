import React from 'react';
import { blogs } from '../../constants';
import BlogCard from '../ui/BlogCard';

const LatestBlogsSection: React.FC = () => {
  return (
    <div className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Latest Blogs</h2>
          <button className="bg-blue-500 text-white px-6 py-3
            rounded-lg font-semibold hover:bg-blue-600 transition duration-300">
            Read More
          </button>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestBlogsSection;
