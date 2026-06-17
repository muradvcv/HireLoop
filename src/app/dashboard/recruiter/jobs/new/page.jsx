"use client"
import { Button, Form, Input, Label, TextField, ListBox, Select, TextArea } from "@heroui/react";
import { Chip } from "@heroui/react";
import { Calendar, Check } from '@gravity-ui/icons';

const PostNewJob = () => {
  const onSubmit=(e)=>{
    e.preventDefault()
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data,'data');
  }
  return (
    <Form className="flex max-w-228 flex-col gap-4 mx-auto border border-[#1e1d1d] px-4 md:px-16 pb-16 py-5 rounded-2xl my-10" onSubmit={onSubmit}>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Post a New Job</h1>
        <p className="mt-2 text-sm text-default-500 flex items-center gap-1">
          <span>Fill out the details below to publish your open position.</span>
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-2 max-w-80 py-1 pl-2 rounded-2xl bg-[#38303056]">
          <Calendar />
          <Chip variant="flat" size="sm" className="bg-default-100 text-default-600">
            Posting as Acme Corp (Auto-filled)
          </Chip>
          <Chip className="bg-[#4ecc910f] p-1 px-2" color="success" variant="flat" size="sm">
            Approved
          </Chip>
        </div>
      </div>

      <div className="h-px w-full bg-white/10" />
      <h2 className="text-2xl font-bold text-gray-400">Job Information</h2>

      {/* 1st line — Job Title + Job Category */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <TextField isRequired className="w-full">
          <Label className="mb-2">Job Title</Label>
          <Input name="jobTitle"
            placeholder="e.g. Senior Frontend Engineer"
            className="w-full bg-default-100/5 border border-default-100/10 h-12"
          />
        </TextField>

        <Select name="jobCategory" isRequired className="w-full" placeholder="Select category">
          <Label>Job Category</Label>
          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              <ListBox.Item id="technology" textValue="Technology">Technology</ListBox.Item>
              <ListBox.Item id="design" textValue="Design">Design</ListBox.Item>
              <ListBox.Item id="marketing" textValue="Marketing">Marketing</ListBox.Item>
              <ListBox.Item id="sales" textValue="Sales">Sales</ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>
      </div>

      {/* 2nd line — Job Type + Salary Range */}
      <div className="flex flex-col md:flex-row items-stretch gap-4">
        <Select name="jobType" isRequired className="w-full md:flex-1" placeholder="Select type">
          <Label>Job Type</Label>
          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              <ListBox.Item id="parttime" textValue="Part Time">Part Time</ListBox.Item>
              <ListBox.Item id="fulltime" textValue="Full Time">Full Time</ListBox.Item>
              <ListBox.Item id="contract" textValue="Contract">Contract</ListBox.Item>
              <ListBox.Item id="internship" textValue="Internship">Internship</ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>

        <div className="flex flex-col md:flex-1 min-w-0 gap-1">
          <Label className="text-sm text-default-500">
            Salary Range <span className="text-red-500">*</span>
          </Label>
          <div className="flex items-center gap-2">
            <TextField isRequired className="flex-1 min-w-0">
              <Input name="minSalary" type="number" placeholder="Min Salary" className="w-full" />
            </TextField>
            <TextField name="maxSalary" isRequired className="flex-1 min-w-0">
              <Input type="number" placeholder="Max Salary" className="w-full" />
            </TextField>
            <Select name="currency" isRequired className="flex-1 min-w-0" placeholder="Currency">
              <Select.Trigger>
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover>
                <ListBox>
                  <ListBox.Item id="usd" textValue="USD">USD</ListBox.Item>
                  <ListBox.Item id="bdt" textValue="BDT">BDT</ListBox.Item>
                  <ListBox.Item id="rs" textValue="RS">RS</ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>
          </div>
        </div>
      </div>

      {/* 3rd line — Location + Deadline */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <TextField isRequired className="w-full">
          <Label className="mb-2">Location</Label>
          <Input
          name="location"
            placeholder="e.g. Dhaka, Bangladesh / Remote"
            className="w-full bg-default-100/5 border border-default-100/10 h-12"
          />
        </TextField>
        <TextField isRequired className="w-full">
          <Label className="mb-2">Application Deadline</Label>
          <Input
          name="date"
            type="date"
            className="w-full bg-default-100/5 border border-default-100/10 h-12"
          />
        </TextField>
      </div>

      <div className="h-px w-full bg-white/10" />
      <h2 className="text-2xl font-bold text-gray-400">Job Details</h2>

      {/* Responsibility */}
      <TextField isRequired name="responsibility" className="w-full">
        <Label>Responsibility</Label>
        <TextArea
          placeholder="e.g. Lead frontend development, conduct code reviews, collaborate with design team..."
          variant="secondary"
        />
      </TextField>

      {/* Requirements */}
      <TextField isRequired name="requirements" className="w-full">
        <Label>Requirements</Label>
        <TextArea
          placeholder="e.g. 3+ years of React experience, proficiency in TypeScript, strong problem-solving skills..."
          variant="secondary"
        />
      </TextField>

      {/* Benefits — optional, no isRequired */}
      <TextField name="benefits" className="w-full">
        <Label>Benefits (Optional)</Label>
        <TextArea
          placeholder="e.g. Health insurance, remote work, flexible hours, annual bonus, learning budget..."
          variant="secondary"
        />
      </TextField>

      {/* Buttons */}
      <div className="flex gap-2 mt-4">
        <Button type="submit">
          <Check />
          Submit
        </Button>
        <Button type="reset" variant="secondary">
          Reset
        </Button>
      </div>

    </Form>
  );
};

export default PostNewJob;