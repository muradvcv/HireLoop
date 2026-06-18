"use client"
import DashboardStats from '@/components/dashboard/DashboardStats';
import { useSession } from '@/lib/auth-client';
import { FileText, Persons, Thunderbolt, CircleCheck } from "@gravity-ui/icons";
const RecruiterDashboard = () => {



  const {data:session,isPending}=useSession()
  if(isPending){
    <h1>Loading..</h1>
  }
  const statsData = [
    { title: "Total jobs", value: 48, icon: FileText, },
    { title: "people", value: "1,284", icon: Persons },
    { title: "Active jobs", value: 18, icon: Thunderbolt },
    { title: "Applications", value: 32, icon: CircleCheck },
  ];
  const user=session?.user;
  
  return (
    <div>
      <h1 className='text-4xl py-5 pl-5'>Welcome back, Alex Sterling</h1>
    <DashboardStats stats={statsData}/>
    </div>
  );
};

export default RecruiterDashboard;