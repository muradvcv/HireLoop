import { getData } from "../core/server";


export const getCompanies=async(recruiterId)=>{
  return getData(`/api/my/companies?recruiterId=${recruiterId}`);
}
