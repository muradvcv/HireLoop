
import { Search, MapPin } from "lucide-react";
const Hero = () => {
 
  return (
    <div>
      <section className="relative min-h-[70vh] bg-black text-white flex items-center justify-center px-4 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-blue-600/15 blur-[120px]" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6 text-sm">
            <span>💼</span>
            <span className="font-semibold">50,000+</span>
            <span className="text-gray-400 uppercase tracking-wider text-[10px]">
              New Jobs This Month
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            Find Your Dream Job Today
          </h1>

          {/* Description */}
          <p className="max-w-xl mx-auto text-gray-400 text-sm md:text-base mb-8">
            HireLoop connects top talent with world-class companies. Browse
            thousands of curated opportunities and land your next role faster.
          </p>

          {/* Search Box */}
          <div className="max-w-2xl mx-auto bg-[#0f0f0f] border border-white/10 rounded-xl p-2 flex flex-col md:flex-row items-center gap-1 shadow-xl">
            <div className="flex items-center gap-2 flex-1 w-full px-3">
              <Search size={16} className="text-gray-500" />
              <input
                type="text"
                placeholder="Job title, skill or company"
                className="w-full bg-transparent outline-none text-sm text-white placeholder:text-gray-500"
              />
            </div>

            <div className="hidden md:block w-px h-8 bg-white/10" />

            <div className="flex items-center gap-2 flex-1 w-full px-3">
              <MapPin size={16} className="text-gray-500" />
              <input
                type="text"
                placeholder="Location or Remote"
                className="w-full bg-transparent outline-none text-sm text-white placeholder:text-gray-500"
              />
            </div>

            <button className="bg-violet-600 hover:bg-violet-700 transition-all rounded-lg p-3">
              <Search size={18} />
            </button>
          </div>

          {/* Trending Tags */}
          <div className="flex flex-wrap justify-center items-center gap-2 mt-6">
            <span className="text-gray-500 text-sm">Trending Position</span>

            {["Product Designer", "AI Engineering", "Dev-ops Engineer"].map(
              (item) => (
                <button
                  key={item}
                  className="px-3 py-1.5 text-xs rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition"
                >
                  {item}
                </button>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;