"use client";
import React, { useEffect, useState } from 'react';
import { BsHandbagFill } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { MdAttachMoney } from 'react-icons/md';
import { motion } from "motion/react"
const JobSection = () => {
  const [jobs, setJob] = useState([]);
  useEffect(() => {
    fetch('/devData.json')
      .then((res) => res.json())
      .then((data) => setJob(data))
  }, [])

  return (
    <div className=' bg-[#000000]'>

      <div className='flex justify-center items-center flex-col py-15'>
        <div className='flex items-center gap-2'>
          <p className='w-2 h-2 bg-[#d537fc]'></p>
          <p className='uppercase tracking-[5px] text-[#f2efef59]'>Smart job discovery</p>
          <p className='w-2 h-2 bg-[#d54af8]'></p>
        </div>
        <h1 className='text-2xl md:text-4xl max-w-4xl text-center font-bold'>The roles you would never <br /> find by searching</h1>
      </div>

      {
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-[#615d5d35] text-white p-6 rounded-3xl hover:shadow-[0px_0px_5px_#8B5CF6] transition-all duration-300"
            >
              <h2 className="text-xl font-semibold">{job.title}</h2>

              <p className="text-gray-400 mt-3">
                {job.description}
              </p>

              <div className="flex gap-2 mt-4">
                <span className="bg-zinc-800 px-3 py-1 rounded-full text-xs flex items-center gap-1">
                  <CiLocationOn className='text-[#f80fe1fb]' /> {job.location}
                </span>

                <span className="bg-zinc-800 px-3 py-1 rounded-full text-xs flex items-center gap-1">
                  <BsHandbagFill className='text-[#dd31f4]' />{job.type}
                </span>
              </div>

              <div className='flex items-center gap-1 '>
                <MdAttachMoney className='text-black bg-[#e443f9c7] rounded-2xl mt-2.5 w-5 h-5' />
                <motion.p initial={{scale:0}} animate={{scale:1}} className="mt-3 text-sm">{job.salary}</motion.p>
              </div>

              <button className="mt-6">
                Apply Now →
              </button>
            </div>
          ))}

        </div>
      }
      <div className='flex justify-center items-center py-10'>
        <button className='bg-white py-2 px-4 my-5 text-black rounded-2xl font-bold'>View ALL Jobs</button>
      </div>
    </div>
  );
};

export default JobSection;