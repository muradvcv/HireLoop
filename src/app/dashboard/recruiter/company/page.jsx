import React from 'react';
import RegisterCompanyModal from './RegisterCompanyModal';
import { getUserSession } from '@/lib/core/session';
import { getCompanies } from '@/lib/api/getCompanies';

const CompanyPage = async() => {
  const user=await getUserSession();
  const company=await getCompanies(user.id);
  
  return (
    <div>
      <RegisterCompanyModal recuiter={user} recruiterCompany={company || null}/>
    </div>
  );
};

export default CompanyPage;