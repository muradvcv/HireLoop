

import { postData } from "../core/server";


export const submitApplication = async (companyData) => {
  return postData('/api/application', companyData)
}