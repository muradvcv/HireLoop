import { getJobById } from '@/lib/api/getCompanyJobs';
import { getUserSession } from '@/lib/core/session';
import { redirect } from 'next/navigation';
import React from 'react';
import JobApplyFrom from './JobApplyFrom';
import { getApplicationByApplicant } from '@/lib/api/applications';
import Link from 'next/link';

const ApplyPage = async ({ params }) => {
  const { id } = await params;

  const user = await getUserSession();

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
  const applications = await getApplicationByApplicant(user.id)
  const plan = {
    Name: "Free",
    MaxApplication: 3
  }
  const job = await getJobById(id);

  return (
    <div className="max-w-7xl mx-auto min-h-[70vh] py-10 space-y-6">

      {/* HEADER */}
      <h2 className="text-lg font-semibold text-white/80">
        You have applied {applications.length} out of {plan.MaxApplication}
      </h2>

      {/* FORM or UPGRADE UI */}
      {applications.length < plan.MaxApplication ? (
        <JobApplyFrom applicant={user} job={job} />
      ) : (
        <div className="flex items-center justify-center mt-10">
          <div className="max-w-md w-full bg-black/40 border border-white/10 rounded-2xl p-6 text-center space-y-4">

            <h3 className="text-xl font-bold text-white">
              Application Limit Reached 🚫
            </h3>

            <p className="text-white/70">
              You’ve used all {plan.MaxApplication} applications in your current plan.
              Upgrade your plan to apply for more jobs.
            </p>

            <Link href={'/plans'}>
              <button className="w-full py-3 rounded-xl bg-blue-500 hover:bg-blue-600 font-semibold">
                Upgrade Plan
              </button>
            </Link>

          </div>
        </div>
      )}

    </div>
  );
};

export default ApplyPage;