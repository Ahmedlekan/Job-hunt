// types/job.ts
export type Job = {
    id: string;
    title: string;
    company: string;
    location: string;
    salary: string;
    type: string;
    posted: string;
    description: string;
    skills: string[];
    url: string;
    isFeatured?: boolean;
    remote?: boolean;
  };
  
  // API Response Type
export  type ArbeitnowApiResponse = {
    data: {
      slug: string;
      title: string;
      company_name: string;
      location: string;
      job_types: string[];
      created_at: string;
      description: string;
      tags: string[];
      url: string;
      remote: boolean;
    }[];
  };