"use client"

import { postData } from "../core/server"

export const createCompany = async (companyData) =>{
  return await postData("/api/companies",companyData)
}

// const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

// export const CreateCompanies = async (companisData)=>{
//     const res = await fetch(`${baseUrl}/api/companies`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(companisData)
//     });
//     return res.json();
// };