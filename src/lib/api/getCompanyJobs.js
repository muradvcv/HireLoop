
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const getCompanyJobs=async(_id)=>{
  const res=await fetch(`${baseUrl}/api/jobs`)
  const data=await res.json();
  return data;

}