import { BriefcaseBusiness, Building2, Star, Users } from "lucide-react";
import React from "react";

const stats = [
  {
    icon: BriefcaseBusiness,
    value: "50K",
    label: "Active Jobs",
  },
  {
    icon: Building2,
    value: "12K",
    label: "Companies",
  },
  {
    icon: Users,
    value: "2M",
    label: "Job Seekers",
  },
  {
    icon: Star,
    value: "97%",
    label: "Satisfaction Rate",
  },
];

const Status = () => {
  return (
    <section className="relative bg-black py-24 overflow-hidden">

      {/* BACKGROUND IMAGE (top only) */}
      <div
        className="absolute top-0 left-0 w-full h-[70%] bg-center bg-cover opacity-80"
        style={{
          backgroundImage: "url('/assets/globe.png')",
        }}
      />

      {/* TOP BLUR + SOFT DARK LAYER */}
      <div className="absolute top-0 left-0 w-full h-[70%] bg-gradient-to-b from-black/5 via-black/40 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">

        {/* TEXT */}
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 max-w-3xl mx-auto">
            Assisting over 15,000 job seekers <br />
            find their dream positions.
          </h2>
        </div>

        {/* CARDS (DYNAMIC) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-[#706c6c1d] backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:scale-105 transition duration-300"
              >
                <Icon className="w-5 h-5 text-white mb-6" />
                <h3 className="text-5xl font-bold text-white">
                  {item.value}
                </h3>
                <p className="text-gray-400 mt-2">{item.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Status;