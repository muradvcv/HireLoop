import { getData } from "../core/server"

export const getApplicationByApplicant=async(applicantId)=>{
  return getData(`/api/application?applicantId${applicantId}`)

}