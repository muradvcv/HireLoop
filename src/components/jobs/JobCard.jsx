import { getJobs } from "@/lib/api/getCompanyJobs";
import { Button, Card, Chip } from "@heroui/react";
import { MapPin, Briefcase, ArrowRight, ArrowBigRight } from "lucide-react";
import Link from "next/link";

const JobCard = async () => {
  const jobs = await getJobs();
  console.log(jobs,"jobs");

  const getPostedTime = (createdAt) => {
    const now = new Date();
    const created = new Date(createdAt);

    const diffDays = Math.floor(
      (now - created) / (1000 * 60 * 60 * 24)
    );

    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";

    return `${diffDays} days ago`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {jobs?.map((job) => (
        <Card
          key={job._id}
          className="group bg-[#0B0B0F] border border-zinc-800 hover:border-violet-500/50 hover:-translate-y-1 transition-all duration-300"
        >
          <div className="p-6 h-full flex flex-col">
            {/* company name */}
            <h2>Company Name:{job.companyName}</h2>
            {/* Title */}
            <h2 className="text-2xl font-bold text-white line-clamp-1">
              {job.jobTitle}
            </h2>

            {/* Description */}
            <p className="mt-3 text-sm text-zinc-400 line-clamp-2">
              {job.responsibility}
            </p>


            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-5">
              <Chip size="sm" variant="flat" className="flex items-center gap-1">
                <MapPin size={12} />
                Location
              </Chip>

              <Chip
                size="sm"
                variant="flat"
                className="bg-zinc-900 text-zinc-300 capitalize"
              >
                {job.jobType}
              </Chip>
            </div>

            {/* Salary */}
            <div className="mt-5">
              <p className="text-lg font-semibold text-violet-400">
                ${Number(job.minSalary).toLocaleString()} - $
                {Number(job.maxSalary).toLocaleString()}
              </p>
              <span className="text-xs text-zinc-500">
                per year
              </span>
            </div>

            {/* Footer */}
            <div className="mt-auto pt-6 flex items-center justify-between">
              <span className="text-xs text-zinc-500">
                Posted -{getPostedTime(job.createdAt)}
              </span>

             <Link href={`/jobs/${job._id}`}>
                <Button
                  size="sm"
                  variant="light"
                  className="text-white group-hover:text-violet-400 transition-colors"
                  endContent={
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  }
                >
                  <ArrowBigRight size={16} className="mr-1" />
                  Apply
                </Button>
                </Link>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default JobCard;