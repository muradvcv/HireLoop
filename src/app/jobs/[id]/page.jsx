import { getJobs } from "@/lib/api/getCompanyJobs";
import { Card, Button, Chip } from "@heroui/react";
import {
  MapPin,
  BriefcaseBusiness,
  CalendarDays,
  DollarSign,
  Building2,
} from "lucide-react";
import Link from "next/link";

export default async function JobDetails({ params }) {
  const { id } = await params;

  const jobs = await getJobs();
  const job = jobs.find((item) => item._id === id);

  if (!job) {
    return (
      <div className="max-w-7xl mx-auto py-20 text-center">
        <h1 className="text-2xl font-bold">Job Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left Side */}
          <div className="lg:col-span-2">
            {/* Company */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-xl font-bold">
                {job.companyName?.charAt(0)}
              </div>

              <div>
                <p className="text-gray-400 text-sm">
                  {job.jobCategory}
                </p>

                <h2 className="text-xl font-semibold">
                  {job.companyName}
                </h2>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-5xl font-bold mb-4">
              {job.jobTitle}
            </h1>

            <div className="flex flex-wrap gap-3 mb-8">
              <Chip color="secondary" variant="flat">
                {job.jobType}
              </Chip>

              <Chip color="success" variant="flat">
                {job.jobCategory}
              </Chip>

              <Chip color="warning" variant="flat">
                {job.status}
              </Chip>
            </div>

            {/* Responsibilities */}
            <section className="mb-10">
              <h3 className="text-xl font-semibold mb-4">
                Core Responsibilities
              </h3>

              <Card className="bg-zinc-900 border border-zinc-800">
                <Card>
                  <div className="whitespace-pre-line text-gray-300 leading-8">
                    {job.responsibility}
                  </div>
                </Card>
              </Card>
            </section>

            {/* Requirements */}
            <section className="mb-10">
              <h3 className="text-xl font-semibold mb-4">
                Requirements & Credentials
              </h3>

              <Card className="bg-zinc-900 border border-zinc-800">
                <Card>
                  <div className="whitespace-pre-line text-gray-300 leading-8">
                    {job.requirements}
                  </div>
                </Card>
              </Card>
            </section>

            {/* Benefits */}
            <section>
              <h3 className="text-xl font-semibold mb-4">
                Benefits & Perks
              </h3>

              <Card className="bg-zinc-900 border border-zinc-800">
                <Card>
                  <div className="whitespace-pre-line text-gray-300 leading-8">
                    {job.benefits}
                  </div>
                </Card>
              </Card>
            </section>
          </div>

          {/* Right Sidebar */}
          <div>
            <Card className="sticky top-24 bg-zinc-900 border border-zinc-800 rounded-3xl">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-6">
                  Job Overview
                </h3>

                <div className="space-y-5">
                  <div className="flex gap-3">
                    <MapPin className="w-5 h-5 text-purple-400" />
                    <div>
                      <p className="text-xs text-gray-400">
                        Location
                      </p>
                      <p>{job.location}</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <BriefcaseBusiness className="w-5 h-5 text-purple-400" />
                    <div>
                      <p className="text-xs text-gray-400">
                        Job Type
                      </p>
                      <p>{job.jobType}</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <DollarSign className="w-5 h-5 text-purple-400" />
                    <div>
                      <p className="text-xs text-gray-400">
                        Salary Range
                      </p>
                      <p>
                        ${job.minSalary} - ${job.maxSalary} / year
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <CalendarDays className="w-5 h-5 text-purple-400" />
                    <div>
                      <p className="text-xs text-gray-400">
                        Application Deadline
                      </p>
                      <p>
                        {new Date(job.date).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Building2 className="w-5 h-5 text-purple-400" />
                    <div>
                      <p className="text-xs text-gray-400">
                        Company
                      </p>
                      <p>{job.companyName}</p>
                    </div>
                  </div>
                </div>

                <Link href={`/jobs/${id}/apply`}>
                  <Button
                    color="secondary"
                    size="lg"
                    className="w-full mt-8 font-semibold"
                  >
                    Apply For This Job
                  </Button>
                </Link>
              </Card>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}