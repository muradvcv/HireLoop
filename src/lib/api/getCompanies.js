import { getData } from "../core/server";
import { getUserSession } from "../core/session";


export const getCompanies=async(recruiterId)=>{
  return getData(`/api/my/companies?recruiterId=${recruiterId}`);
}


export const getLoggedInRecruiterCompany=async(recruiterId)=>{
  const user= await getUserSession()
  return getCompanies(user?.id)
}