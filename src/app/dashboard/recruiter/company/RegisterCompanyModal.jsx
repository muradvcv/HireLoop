"use client";

import { Button, Form, Input, Label, ListBox, Modal, Select, toast} from "@heroui/react";
import { Xmark, Globe, LocationArrow, ArrowUpFromLine,Factory, CirclePlusFill } from "@gravity-ui/icons";
import { useState } from "react";
import { createCompany } from "@/lib/action/companis";

export default function RegisterCompanyModal({ recuiter, recruiterCompany }) {
  const [isOpen, setIsOpen] = useState(false);
  const company = recruiterCompany ?? null;
  console.log(recruiterCompany,'data paise re vai');
  
  const onSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const companyData = {
      name: data.companyName || "Unknown",
      industry: data.industry || "Technology",
      website: data.website,
      location: data.location || "Unknown",
      employeeCount: data.employeeCount || "Unknown",
      description: data.description || "No description provided",
      recruiterId: recuiter.id,
    };

    setCompany(companyData);
    setIsOpen(false);
    const playload=await createCompany(companyData);
    if(playload.success){
      toast.success("Company registered successfully!")
    }
   
  };
  

  // ── Company already registered ─────────────────────────────────────
  if (company) {
    return (
      <div className="flex min-h-[300px] items-center justify-center p-6">
        <div className="w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0f] text-white shadow-2xl">
          {/* Card header */}
          <div className="border-b border-white/10 px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-lg font-semibold">
                {(company?.name )}
              </div>
              <div>
                <p className="text-base font-semibold">{company.name}</p>
                <p className="text-sm text-neutral-400">{company.industry}</p>
              </div>
            </div>
          </div>

          {/* Card body */}
          <div className="grid gap-4 px-6 py-4 text-sm md:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-wide text-neutral-500">Location</p>
              <p className="mt-1 text-neutral-200">{company.location}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-neutral-500">Employees</p>
              <p className="mt-1 text-neutral-200">{company.employeeCount}</p>
            </div>
            {company.website && (
              <div className="md:col-span-2">
                <p className="text-xs uppercase tracking-wide text-neutral-500">Website</p>
                <p className="mt-1 text-blue-400 break-all">{company.website}</p>
              </div>
            )}
            <div className="md:col-span-2">
              <p className="text-xs uppercase tracking-wide text-neutral-500">Description</p>
              <p className="mt-1 leading-relaxed text-neutral-300">{company.description}</p>
            </div>
          </div>

          {/* Success footer */}
          <div className="border-t border-white/10 bg-[#101012] px-6 py-3">
            <p className="text-xs text-emerald-400">✓ Company registered successfully</p>
          </div>
        </div>
      </div>
    );
  }

  // ── No company yet ─────────────────────────────────────────────────
  return (
    <>
      {/* Empty state */}
      {!isOpen && (
        <div className="flex min-h-[300px] flex-col items-center justify-center gap-5 rounded-2xl border border-white/10 bg-[#0d0d0f] p-10 text-center text-white">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/5">
            <Factory className="h-7 w-7 text-neutral-400" />
          </div>
          <div>
            <p className="text-lg font-semibold">No company registered</p>
            <p className="mt-1 max-w-xs text-sm text-neutral-400">
              You  registered a company yet. Add your business details to start hiring on HireLoop.
            </p>
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-neutral-200"
          >
            <CirclePlusFill className="h-4 w-4" />
            Register a company
          </button>
        </div>
      )}

      {/* Modal */}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Backdrop className="bg-black/80 backdrop-blur-sm">
          <Modal.Container size="lg" className="flex items-center justify-center">
            <Form onSubmit={onSubmit}>
              <Modal.Dialog className="w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0f] text-white shadow-2xl">

                {/* Header */}
                <Modal.Header className="border-b border-white/10 px-6 py-3">
                  <div className="flex w-full items-start justify-between">
                    <div>
                      <Modal.Heading className="text-xl font-semibold">
                        Register New Company
                      </Modal.Heading>
                      <p className="mt-1 text-sm text-neutral-400">
                        Enter your business details to start hiring on HireLoop.
                      </p>
                    </div>
                    <Modal.CloseTrigger
                      className="text-neutral-400 transition hover:text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      <Xmark className="h-5 w-5" />
                    </Modal.CloseTrigger>
                  </div>
                </Modal.Header>

                {/* Body */}
                <Modal.Body className="px-6 py-4">
                  <div className="grid gap-5 md:grid-cols-2">

                    {/* Company Name */}
                    <div>
                      <label className="mb-2 block text-sm text-neutral-300">Company Name</label>
                      <div className="rounded-xl border border-white/10 bg-[#151518] hover:border-white/20 transition">
                        <Input
                          name="companyName"
                          placeholder="e.g. Acme Corp"
                          className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder:text-neutral-500 outline-none"
                        />
                      </div>
                    </div>

                    {/* Industry */}
                    <div>
                      <Select name="industry" isRequired className="w-full mt-3" placeholder="Select industry">
                        <Label>Industry / Category</Label>
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

                    {/* Website */}
                    <div>
                      <label className="mb-2 block text-sm text-neutral-300">Website URL</label>
                      <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#151518] px-4 transition hover:border-white/20">
                        <Globe className="h-4 w-4 shrink-0 text-neutral-500" />
                        <Input
                        type="url"
                          name="website"
                          placeholder="https://www.company.com"
                          className="w-full bg-transparent py-3 text-sm text-white placeholder:text-neutral-500 outline-none"
                        />
                      </div>
                    </div>

                    {/* Location */}
                    <div>
                      <label className="mb-2 block text-sm text-neutral-300">Location</label>
                      <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#151518] px-4 transition hover:border-white/20">
                        <LocationArrow className="h-4 w-4 shrink-0 text-neutral-500" />
                        <Input
                          name="location"
                          placeholder="City, Country"
                          className="w-full bg-transparent py-3 text-sm text-white placeholder:text-neutral-500 outline-none"
                        />
                      </div>
                    </div>

                    {/* Employee Count */}
                    <div>
                      <Select name="employeeCount" isRequired className="w-full mt-3" placeholder="Select range">
                        <Label>Employee Count Range</Label>
                        <Select.Trigger>
                          <Select.Value />
                          <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                          <ListBox>
                            <ListBox.Item id="1-10" textValue="1–10">1–10</ListBox.Item>
                            <ListBox.Item id="11-50" textValue="11–50">11–50</ListBox.Item>
                            <ListBox.Item id="51-200" textValue="51–200">51–200</ListBox.Item>
                            <ListBox.Item id="201-1000" textValue="201–1000">201–1000</ListBox.Item>
                            <ListBox.Item id="1000+" textValue="1000+">1000+</ListBox.Item>
                          </ListBox>
                        </Select.Popover>
                      </Select>
                    </div>

                    {/* Logo Upload */}
                    <div>
                      <label className="mb-2 block text-sm text-neutral-300">Company Logo</label>
                      <div className="flex h-14 cursor-pointer items-center gap-3 rounded-xl border border-dashed border-white/15 bg-[#151518] px-4 transition hover:border-white/30">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5">
                          <ArrowUpFromLine className="h-4 w-4 text-neutral-400" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Upload Image</p>
                          <p className="text-xs text-neutral-500">PNG, JPG up to 5MB</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mt-5">
                    <label className="mb-2 block text-sm text-neutral-300">Brief Description</label>
                    <div className="rounded-xl border border-white/10 bg-[#151518] transition hover:border-white/20">
                      <textarea
                        name="description"
                        rows={5}
                        placeholder="Tell us about your company's mission and culture..."
                        className="w-full resize-none bg-transparent px-4 py-3 text-sm text-white placeholder:text-neutral-500 outline-none"
                      />
                    </div>
                  </div>
                </Modal.Body>

                {/* Footer */}
                <Modal.Footer className="border-t border-white/10 bg-[#101012] px-6 py-4">
                  <div className="flex w-full justify-end gap-3">
                    <Button
                      variant="bordered"
                      className="border-white/10 text-white"
                      onPress={() => setIsOpen(false)}
                    >
                      Cancel
                    </Button>
                    <Button type="submit" className="bg-white px-6 font-medium text-black hover:bg-neutral-200">
                      Register Company
                    </Button>
                  </div>
                </Modal.Footer>

              </Modal.Dialog>
            </Form>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </>
  );
}
