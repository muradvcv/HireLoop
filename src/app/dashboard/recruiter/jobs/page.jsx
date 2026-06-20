import { getLoggedInRecruiterCompany } from '@/lib/api/getCompanies';
import { getCompanyJobs } from '@/lib/api/getCompanyJobs';
import { Eye, Pencil, TrashBin } from '@gravity-ui/icons';
import { Table } from '@heroui/react';
import React from 'react';

const ReqruiterJobs = async() => {
  const company=await getLoggedInRecruiterCompany()
  if (!company) {
    return (
      <div className="p-4 text-red-500">
        No company found for this recruiter
      </div>
    );
  }
  const jobs=await getCompanyJobs(company._id)
  
 console.log(jobs,"alllllllllll jobbbbbbbbbbbsssssssss");
  return (

    <div className="py-5 max-w-4xl p-4 rounded-xl">
      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label="Recruiter Jobs" className="bg-[#1a1a1a]">
            <Table.Header className="bg-[#222222]">
              <Table.Column isRowHeader className="text-gray-400 font-medium text-sm py-3 px-4">
                Job Title
              </Table.Column>
              <Table.Column className="text-gray-400 font-medium text-sm py-3 px-4">
                Role
              </Table.Column>
              <Table.Column className="text-gray-400 font-medium text-sm py-3 px-4">
                Expired Date
              </Table.Column>
              <Table.Column className="text-gray-400 font-medium text-sm py-3 px-4">
                Salary
              </Table.Column>
              <Table.Column className="text-gray-400 font-medium text-sm py-3 px-4">
                Status
              </Table.Column>
              {/* Actions column */}
              <Table.Column className="text-gray-400 font-medium text-sm py-3 px-4">
                Actions
              </Table.Column>
            </Table.Header>

            <Table.Body>
              {jobs.map((job) => (
                <Table.Row
                  key={job._id}
                  className="border-t border-gray-800 hover:bg-[#2a2a2a] transition-colors"
                >
                  <Table.Cell className="text-white text-sm py-3 px-4">
                    {job.jobTitle}
                  </Table.Cell>
                  <Table.Cell className="text-gray-300 text-sm py-3 px-4">
                    {job.jobCategory}
                  </Table.Cell>
                  <Table.Cell className="text-gray-300 text-sm py-3 px-4">
                    {job.date}
                  </Table.Cell>
                  <Table.Cell className="text-gray-300 text-sm py-3 px-4">
                    {job.minSalary} - {job.maxSalary} {job.currency}
                  </Table.Cell>
                  <Table.Cell className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${job.status === 'active'
                        ? 'bg-green-900 text-green-400'
                        : 'bg-red-900 text-red-400'
                      }`}>
                      {job.status}
                    </span>
                  </Table.Cell>

                  {/*  Actions Cell */}
                  <Table.Cell className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <button className="text-blue-400 hover:text-blue-300 transition-colors">
                        <Eye size={16} />
                      </button>
                      <button className="text-yellow-400 hover:text-yellow-300 transition-colors">
                        <Pencil size={16} />
                      </button>
                      <button className="text-red-400 hover:text-red-300 transition-colors">
                        <TrashBin size={16} />
                      </button>
                    </div>
                  </Table.Cell>

                </Table.Row>
              ))}
            </Table.Body>

          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
};

export default ReqruiterJobs;