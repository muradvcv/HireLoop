"use client";

import { submitApplication } from "@/lib/action/application";
import { Button, Card, Form, Input, TextArea, Label } from "@heroui/react";
import { Sparkles} from "lucide-react";

export default function ApplyForm({ applicant, job }) {
  const handleSubmit = async(e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
   
    const submission={
      ...data,
      jobId:job._id,
      applicantName:applicant.name,
      applicantEmail:applicant.email,
      jobTitle:job.jobTitle
    }
    console.log(submission, 'dadaaaaaaaaaa');
    const res = await submitApplication(submission)
    if(res.insertedId){
      alert("dta submitted")
    }
  };

  if (!applicant || !job) {
    return <div className="text-white text-center py-20">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black px-4 py-12 text-white">
      <div className="mx-auto max-w-2xl space-y-8">

        {/* HEADER */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-lg">
          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-blue-500/10 p-3">
              <Sparkles className="text-blue-400" size={22} />
            </div>

            <div>
              <h1 className="text-2xl font-bold tracking-tight">
                Apply for {job.jobTitle}
              </h1>

              <p className="text-sm text-white/60 mt-1">
                {job.companyName} • {job.location}
              </p>
            </div>
          </div>
        </div>

        {/* FORM CARD */}
        <Card className="border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-2xl rounded-2xl">

          <Form onSubmit={handleSubmit} className="space-y-6 w-full">

            {/* wrapper center + max width */}
            <div className="w-full flex justify-center">
              <div className="w-full max-w-xl space-y-6">

                {/* EMAIL */}
                <div className="space-y-2">
                  <Label className="text-white/70">Email</Label>
                  <Input
                    name="email"
                    defaultValue={applicant?.email || ""}
                    className="w-full bg-black/30 border-white/10 text-white"
                  />
                </div>

                {/* PHONE */}
                <div className="space-y-2">
                  <Label className="text-white/70">Phone</Label>
                  <Input
                    name="phone"
                    placeholder="+8801XXXXXXXXX"
                    className="w-full bg-black/30 border-white/10 text-white"
                  />
                </div>

                {/* RESUME */}
                <div className="space-y-2">
                  <Label className="text-white/70">Resume Link</Label>
                  <Input
                    name="resume"
                    placeholder="https://drive.google.com/..."
                    className="w-full bg-black/30 border-white/10 text-white"
                  />
                </div>

                {/* COVER LETTER */}
                <div className="space-y-2">
                  <Label className="text-white/70">Cover Letter</Label>
                  <TextArea
                    name="coverLetter"
                    placeholder={`Why join ${job.companyName}?`}
                    className="w-full min-h-[140px] bg-black/30 border-white/10 text-white"
                  />
                </div>

                {/* BUTTON */}
                <Button
                  type="submit"
                  className="w-full py-6 text-base font-semibold bg-blue-500 hover:bg-blue-600 rounded-xl"
                >
                  Submit Application
                </Button>

              </div>
            </div>

          </Form>
        </Card>

      </div>
    </div>
  );
}