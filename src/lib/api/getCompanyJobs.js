
// const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

// export const getCompanyJobs=async(_id)=>{
//   const res=await fetch(`${baseUrl}/api/jobs`)
//   const data=await res.json();
//   return data;

// }
import { getData } from "../core/server";
export const getJobs=async()=>{
  return getData(`/api/jobs`);
}




export const getCompanyJobs = async (companyId) => {
  return getData(`/api/jobs?companyId=${companyId}`);
};