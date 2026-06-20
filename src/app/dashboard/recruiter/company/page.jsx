import React from 'react';
import RegisterCompanyModal from './RegisterCompanyModal';
import { getLoggedInRecruiterCompany } from '@/lib/api/getCompanies';
import { getUserSession } from '@/lib/core/session';

const CompanyPage = async() => {
  const user= await getUserSession();

 const company =await getLoggedInRecruiterCompany()
  
  return (
    <div>
      <RegisterCompanyModal recuiter={user} recruiterCompany={company || null}/>
    </div>
  );
};

export default CompanyPage;