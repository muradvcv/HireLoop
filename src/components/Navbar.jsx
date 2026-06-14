"use client";

import { useState } from "react";
import { Link, Button } from "@heroui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiMenuAlt1 } from "react-icons/hi";
import Image from "next/image";
import { signOut, useSession } from "@/lib/auth-client";
import { TbLogout } from "react-icons/tb";
import { FaRegUserCircle } from "react-icons/fa";

const navItems = [
  { label: "Browse Jobs", href: "#" },
  { label: "Company", href: "#" },
  { label: "Pricing", href: "#" },
];

export  default  function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {data:session,isPending}=useSession();
  const [openProfile,setOpenProfile]=useState(false)
  const userInfo = session?.user;
 
  const handleSignOut=async()=>{
    await signOut();
  }
 
  return (
    <nav className="sticky top-0 z-50 px-4 py-3 bg-black">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-2xl bg-[#6f6b6b52] px-6">

        {/* Left side: toggle + logo */}
        <div className="flex items-center gap-3">

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white md:hidden"
          >
            {isMenuOpen ? (
              <HiMenuAlt1 size={24} />
            ) : (
              <RxHamburgerMenu size={24} />
            )}
          </button>

          {/* Logo */}
          <div className="rounded overflow-hidden flex items-center justify-center">
            <Image
              src="/assets/logo.png"
              width={80}
              height={80}
              alt="logo"
            />
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-gray-300 hover:text-white"
            >
              {item.label}
            </Link>
          ))}

          <div className="h-5 w-px bg-gray-700" />

          {isPending ? (
            <div className="w-6 h-6 rounded-full bg-gray-600 animate-pulse" />
          ) : userInfo ? (
            <div>
              <button className="" onClick={() => setOpenProfile(!openProfile)}>
                <FaRegUserCircle className="text-2xl cursor-pointer" />
              </button>
              {openProfile && (
                <div className="absolute top-20 w-48 overflow-hidden rounded-xl border border-gray-700 bg-[#1a1a1a] shadow-xl backdrop-blur-md">

                  <button className="flex w-full items-center gap-3 px-4 py-3 text-sm text-gray-200 transition hover:bg-violet-600/20 hover:text-white">
                    <FaRegUserCircle size={18} />
                    Profile
                  </button>

                  <div className="h-px bg-gray-700" />

                  <button onClick={handleSignOut} className="flex w-full items-center gap-3 px-4 py-3 text-sm text-red-400 transition hover:bg-red-500/20 hover:text-red-300">
                    <TbLogout size={18} />
                    Logout
                  </button>

                </div>
              )}
            </div>
        
          )
          
          :
            
            <Link href="/auth/login" className="text-sm text-violet-400">
            Sign In
          </Link>
          }
          


          <Button className="bg-violet-600 text-white">
            Get Started
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mt-2 rounded-xl bg-[#141414] p-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-gray-300"
              >
                {item.label}
              </Link>
            ))}

            {userInfo ? (
              <div>
                <button className="" onClick={() => setOpenProfile(!openProfile)}>
                  <FaRegUserCircle className="text-2xl cursor-pointer" />
                </button>
                {openProfile && (
                  <div className="absolute top-20 w-48 overflow-hidden rounded-xl border border-gray-700 bg-[#1a1a1a] shadow-xl backdrop-blur-md">

                    <button className="flex w-full items-center gap-3 px-4 py-3 text-sm text-gray-200 transition hover:bg-violet-600/20 hover:text-white">
                      <FaRegUserCircle size={18} />
                      Profile
                    </button>

                    <div className="h-px bg-gray-700" />

                    <button onClick={handleSignOut} className="flex w-full items-center gap-3 px-4 py-3 text-sm text-red-400 transition hover:bg-red-500/20 hover:text-red-300">
                      <TbLogout size={18} />
                      Logout
                    </button>

                  </div>
                )}
              </div>

            )

              :

              <Link href="/auth/login" className="text-sm text-violet-400">
                Sign In
              </Link>
            }


            <Button className="bg-violet-600 text-white">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}