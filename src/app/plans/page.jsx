"use client";

import { useState } from "react";
import { Check } from "lucide-react";

const seekerPlans = [
  {
    name: "Free",
    price: "$0",
    period: "/forever",
    features: [
      "Browse & save up to 10 jobs",
      "Apply to 3 jobs per month",
      "Basic profile",
      "Email alerts",
    ],
    button: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    features: [
      "Apply to 30 jobs per month",
      "Unlimited saved jobs",
      "Application tracking",
      "Salary insights",
    ],
    button: "Upgrade to Pro",
    popular: true,
  },
  {
    name: "Premium",
    price: "$39",
    period: "/month",
    features: [
      "Unlimited applications",
      "Profile boost to recruiters",
      "Early access to new jobs",
      "Priority support",
    ],
    button: "Get Premium",
    popular: false,
  },
];

const recruiterPlans = [
  {
    name: "Free",
    price: "$0",
    period: "/forever",
    features: [
      "Up to 3 active job posts",
      "Basic applicant management",
      "Standard listing visibility",
    ],
    button: "Get Started",
    popular: false,
  },
  {
    name: "Growth",
    price: "$49",
    period: "/month",
    features: [
      "Up to 10 active job posts",
      "Applicant tracking",
      "Basic analytics",
      "Email support",
    ],
    button: "Upgrade to Growth",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$149",
    period: "/month",
    features: [
      "Up to 50 active job posts",
      "Advanced analytics",
      "Featured job listings",
      "Priority support",
    ],
    button: "Contact Sales",
    popular: false,
  },
];

export default function PlanPage() {
  const [activeTab, setActiveTab] = useState("seeker");

  const plans =
    activeTab === "seeker" ? seekerPlans : recruiterPlans;

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 min-h-screen">
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-5xl font-bold mb-4">
          Pricing Plans
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto">
          Choose the perfect plan for your needs and unlock more
          opportunities.
        </p>
      </div>

      {/* Toggle */}
      <div className="flex justify-center mb-14">
        <div className="bg-black/40 border border-gray-800 rounded-xl p-1">
          <button
            onClick={() => setActiveTab("seeker")}
            className={`px-6 py-3 rounded-lg transition-all duration-300 ${activeTab === "seeker"
                ? "bg-blue-600 text-white"
                : "text-gray-400 hover:text-white"
              }`}
          >
            For Job Seekers
          </button>

          <button
            onClick={() => setActiveTab("recruiter")}
            className={`px-6 py-3 rounded-lg transition-all duration-300 ${activeTab === "recruiter"
                ? "bg-blue-600 text-white"
                : "text-gray-400 hover:text-white"
              }`}
          >
            For Recruiters
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`group relative rounded-3xl border p-8 transition-all duration-300 cursor-pointer
              hover:-translate-y-3
              hover:shadow-2xl
              hover:shadow-blue-500/20
              hover:border-blue-500
              hover:bg-gradient-to-b
              hover:from-blue-500/10
              hover:to-transparent
              ${plan.popular
                ? "border-blue-500 bg-blue-500/10"
                : "border-gray-800 bg-black/40"
              }`}
          >
            {/* Popular Badge */}
            {plan.popular && (
              <div className="absolute -top-3 right-6">
                <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                  Most Popular
                </span>
              </div>
            )}

            {/* Plan Name */}
            <h3 className="text-2xl font-bold mb-4 transition-colors duration-300 group-hover:text-blue-400">
              {plan.name}
            </h3>

            {/* Price */}
            <div className="mb-8">
              <span className="text-5xl font-bold">
                {plan.price}
              </span>
              <span className="text-gray-400">
                {plan.period}
              </span>
            </div>

            {/* Features */}
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3"
                >
                  <Check
                    size={18}
                    className="text-green-500 mt-1"
                  />
                  <span className="text-gray-300">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <button
              className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105
                ${plan.popular
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-gray-800 hover:bg-gray-700 text-white"
                }`}
            >
              {plan.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}