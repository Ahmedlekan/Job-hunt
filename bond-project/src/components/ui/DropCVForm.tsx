import React, { useState } from 'react';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  cvOption: string;
  message: string;
  privacyAgree: boolean;
  policyAgree: boolean;
};

const DropCVForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    cvOption: '',
    message: '',
    privacyAgree: false,
    policyAgree: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacyAgree || !formData.policyAgree) {
      alert('Please agree to the terms before submitting.');
      return;
    }
    console.log('Form submitted:', formData);
    alert('Thank you for submitting your CV!');
  };

  return (
    <div className="min-h-screen bg-black/85 pb-12 pt-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Content Section */}
          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-xl shadow-sm h-full">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Find Your Next Opportunity</h2>
              <p className="text-lg text-gray-600 mb-6">
                Submit your CV and let our expert recruiters match
                you with the perfect role in your field.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
                    <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-800">
                        Exclusive Opportunities
                    </h3>
                    <p className="mt-1 text-gray-600">
                      Access roles that aren't advertised publicly
                      through our extensive network.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
                    <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-800">
                        Expert Guidance
                    </h3>
                    <p className="mt-1 text-gray-600">
                      Our consultants provide tailored advice to
                      help you stand out in the job market.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
                    <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-800">
                        Industry Specialists
                    </h3>
                    <p className="mt-1 text-gray-600">
                      We have dedicated teams for each sector who
                      understand your specific market.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 border-t border-gray-200 pt-6">
                <h3 className="text-lg font-medium text-gray-900">
                    What happens next?
                </h3>
                <ol className="mt-4 space-y-4">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 bg-blue-600 text-white rounded-full h-6 w-6 flex items-center justify-center">1</span>
                    <p className="ml-3 text-gray-600">
                        We'll review your CV and contact you within
                        2 business days
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 bg-blue-600 text-white rounded-full h-6 w-6 flex items-center justify-center">2</span>
                    <p className="ml-3 text-gray-600">One of our consultants
                        will schedule a call to discuss your goals
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 bg-blue-600 text-white rounded-full h-6 w-6 flex items-center justify-center">3</span>
                    <p className="ml-3 text-gray-600">We'll match you with
                        suitable opportunities and guide you through the
                        process
                    </p>
                  </li>
                </ol>
              </div>
            </div>
          </div>

          {/* Right Form Section */}
          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Submit Your CV</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm
                        font-medium text-gray-700 mb-1"
                    >
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300
                        rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium 
                    text-gray-700 mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 
                      rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium 
                  text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md 
                    focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium 
                  text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md 
                    focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="cvOption" className="block text-sm font-medium 
                  text-gray-700 mb-1">
                    How would you like to share your CV? *
                  </label>
                  <select
                    id="cvOption"
                    name="cvOption"
                    value={formData.cvOption}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md 
                    focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="upload">I'll upload my CV</option>
                    <option value="url">I'll provide a LinkedIn/portfolio URL</option>
                    <option value="later">I'll share it later</option>
                  </select>
                </div>

                {formData.cvOption === 'upload' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Upload CV (PDF/DOC) *
                    </label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 
                    border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer bg-white rounded-md
                            font-medium text-blue-600 hover:text-blue-500
                            focus-within:outline-none"
                          >
                            <span>Upload a file</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">
                            PDF, DOC, DOCX up to 5MB
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {formData.cvOption === 'url' && (
                  <div>
                    <label htmlFor="cvUrl" className="block text-sm font-medium 
                    text-gray-700 mb-1">
                      Profile URL *
                    </label>
                    <input
                      type="url"
                      id="cvUrl"
                      name="cvUrl"
                      className="w-full px-4 py-2 border border-gray-300
                      rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="https://linkedin.com/in/yourprofile"
                    />
                  </div>
                )}

                <div>
                  <label htmlFor="message" className="block text-sm font-medium
                  text-gray-700 mb-1">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md
                    focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Tell us about your skills, experience, and what
                    you're looking for..."
                  ></textarea>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="privacyAgree"
                        name="privacyAgree"
                        type="checkbox"
                        checked={formData.privacyAgree}
                        onChange={handleChange}
                        className="focus:ring-blue-500 h-4 w-4 text-blue-600 
                        border-gray-300 rounded"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="privacyAgree" className="font-medium 
                      text-gray-700">
                        I agree to the{' '}
                        <a href="#" className="text-blue-600 hover:underline">
                          Privacy Policy
                        </a>{' '}
                        *
                      </label>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="policyAgree"
                        name="policyAgree"
                        type="checkbox"
                        checked={formData.policyAgree}
                        onChange={handleChange}
                        className="focus:ring-blue-500 h-4 w-4 text-blue-600 
                        border-gray-300 rounded"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="policyAgree" className="font-medium 
                      text-gray-700">
                        I consent to Job Hunt storing my details to contact
                        me about opportunities *
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border
                    border-transparent rounded-md shadow-sm text-sm font-medium 
                    text-white bg-blue-600 hover:bg-blue-700
                    focus:outline-none focus:ring-2 focus:ring-offset-2 
                    focus:ring-blue-500"
                  >
                    Submit CV
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropCVForm;

