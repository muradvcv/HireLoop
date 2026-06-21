"use client";

import { useState } from "react";
import { Check } from "lucide-react";

const seekerPlans = [
  {
    name: "Free",
    id:"seeker_free",
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
    id:"seeker_pro",
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
    id:"seeker_preimium",
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
    id:"recruiter_free",
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
    id: "recruiter_growth",
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
    id: "recruiter_enterprise",
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

  const plans =activeTab === "seeker" ? seekerPlans : recruiterPlans;

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950/20 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium mb-4">
            Flexible Pricing
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Pricing Plans
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Choose the perfect plan for your needs and unlock more
            opportunities with powerful tools and premium features.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-16">
          <div className="bg-black/50 border border-purple-500/20 rounded-2xl p-1.5 backdrop-blur-sm">
            <button
              onClick={() => setActiveTab("seeker")}
              className={`px-6 py-3 rounded-xl transition-all duration-300 font-medium ${activeTab === "seeker"
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30"
                  : "text-gray-400 hover:text-white"
                }`}
            >
              For Job Seekers
            </button>

            <button
              onClick={() => setActiveTab("recruiter")}
              className={`px-6 py-3 rounded-xl transition-all duration-300 font-medium ${activeTab === "recruiter"
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30"
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
              className={`group relative rounded-3xl border p-8 transition-all duration-500 cursor-pointer backdrop-blur-sm
              hover:-translate-y-4
              hover:shadow-[0_20px_60px_rgba(168,85,247,0.25)]
              hover:border-purple-500
              hover:bg-gradient-to-b
              hover:from-purple-500/15
              hover:to-transparent
              ${plan.popular
                  ? "border-purple-500 bg-purple-500/10 shadow-lg shadow-purple-500/20 scale-105"
                  : "border-gray-800 bg-black/40"
                }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 right-6">
                  <span className="bg-purple-600 text-white text-xs px-4 py-2 rounded-full font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-8">
                <span className="text-5xl font-bold">{plan.price}</span>
                <span className="text-gray-400">{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                      <Check
                        size={14}
                        className="text-green-400"
                      />
                    </div>

                    <span className="text-gray-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <form action="/api/checkout_sessions" method="POST">
              <input  type="hidden" name="plan_id" value={plan.id} />
                <section>
                  <button type="submit" role="link"
                    className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105
                ${plan.popular
                        ? "bg-purple-600 hover:bg-purple-700 text-white"
                        : "bg-gray-800 hover:bg-purple-600 text-white"
                      }`}>
                    Checkout
                  </button>
                </section>
              </form>
             
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-28">
          <div className="relative overflow-hidden rounded-[32px] border border-purple-500/20 bg-gradient-to-r from-purple-950 via-black to-purple-900 p-10 md:p-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.25),transparent_40%)]"></div>

            <div className="absolute -top-20 -right-20 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl"></div>

            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-fuchsia-600/20 rounded-full blur-3xl"></div>

            <div className="relative z-10 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-5">
                Ready to Unlock More Opportunities?
              </h2>

              <p className="text-gray-300 max-w-3xl mx-auto mb-8 text-lg">
                Whether  looking for your dream job or
                searching for the perfect candidate, our premium
                plans provide everything you need to grow faster.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-8 py-4 rounded-xl bg-purple-600 hover:bg-purple-700 transition-all duration-300 font-semibold hover:scale-105">
                  Start Free Today
                </button>

                <button className="px-8 py-4 rounded-xl border border-purple-500 text-purple-300 hover:bg-purple-500/10 transition-all duration-300 font-semibold">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-28">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h2>

            <p className="text-gray-400">
              Find answers to the most common questions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: "Can I change my plan anytime?",
                a: "Yes, you can upgrade, downgrade, or cancel your subscription anytime from your dashboard.",
              },
              {
                q: "Is there a free trial available?",
                a: "Absolutely. Our Free plan allows you to test the platform before upgrading.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept major credit cards and secure online payment gateways.",
              },
              {
                q: "Do recruiters and seekers have different plans?",
                a: "Yes, both job seekers and recruiters have dedicated plans tailored to their needs.",
              },
            ].map((item) => (
              <div
                key={item.q}
                className="rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-950/30 to-black p-6 hover:border-purple-500 hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-3">
                  {item.q}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-28 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "10K+", label: "Active Job Seekers" },
            { value: "2K+", label: "Recruiters" },
            { value: "50K+", label: "Applications Sent" },
            { value: "98%", label: "Customer Satisfaction" },
          ].map((item) => (
            <div
              key={item.label}
              className="text-center rounded-3xl border border-purple-500/20 bg-black/40 p-6 hover:border-purple-500 transition-all duration-300"
            >
              <h3 className="text-3xl font-bold text-purple-400 mb-2">
                {item.value}
              </h3>

              <p className="text-gray-400">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}