import React from 'react';
import PostNewJob from './PostNewJob';
import { getLoggedInRecruiterCompany } from '@/lib/api/getCompanies';

const PostJobPage = async() => {
  const company=await getLoggedInRecruiterCompany()
  if (!company) {
    return (
      <div className="p-4 text-red-500">
        No company found for this recruiter
      </div>
    );
  }
  return (
    <div>
      <PostNewJob company={company} />
    </div>
  );
};

export default PostJobPage;