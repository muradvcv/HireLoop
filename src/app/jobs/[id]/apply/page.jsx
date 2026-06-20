import { getUserSession } from '@/lib/core/session';
import { redirect } from 'next/navigation';
import React from 'react';

const ApplyPage = async ({ params }) => {
  const { id } = params;

  const user = await getUserSession();
  console.log(user,"users");

  if (!user) {
    redirect(`/auth/login?redirect=/jobs/${id}/apply`);
  }

  if (user.role !== 'seeker') {
    return (
      <div className="max-w-7xl mx-auto min-h-[70vh] py-10 text-center">
        <h1 className="text-2xl font-bold">Access Denied</h1>
        <p className="text-gray-500 mt-2">
          Only job seekers can apply for jobs.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto min-h-[70vh] py-10">
      <h1>Apply for Job</h1>
    </div>
  );
};

export default ApplyPage;