"use client"
import { useSession } from '@/lib/auth-client';
import React from 'react';

const RecruiterDashboard = () => {
  const {data:session,isPending}=useSession()
  if(isPending){
    <h1>Loading..</h1>
  }
  const user=session?.user;
  console.log(user,'i got user');
  return (
    <div>
    <h1>I am a recruiter</h1>
    </div>
  );
};

export default RecruiterDashboard;