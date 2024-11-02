'use client'
import Image from "next/image";
import Link from "next/link";
import { Menu } from "../Data/Menu";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { PiGridNineFill } from "react-icons/pi";
import { AiFillCloseSquare } from "react-icons/ai";
import { useRouter } from "next/navigation";

const Nav = () => {
  const router = useRouter()
   const [isOpen, setIsOpen] = useState(false);

   const toggleMenu = () => {
     setIsOpen(!isOpen);
   };
  return (
    <section className="w-full max-w-[1580px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center w-full md:gap-44 justify-between md:justify-start">
        <Image src="/images/logo.svg" width={92} height={62} alt="logo" />
        <div>
          <div className="md:flex items-center gap-12 font-sans text-[18px] font-[400px] leading-[27px] text-[#12305B] hidden">
            {Menu.map((item, index) => {
              return (
                <Link
                  key={index}
                  href={item.url}
                  className={`cursor-pointer focus:font-bold ${
                    router.pathname === item.url ? "font-bold" : ""
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>

        <div className=" flex gap-4 relative">
          {isOpen && (
            <div className="md:hidden bg-white rounded-md shadow-lg absolute w-[250px] right-0 p-4">
              <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col gap-3">
                {Menu.map((item, index) => {
                  return (
                    <Link
                      key={index}
                      href={item.url}
                      className={`cursor-pointer focus:font-bold font-sans text-[18px] font-[400px] leading-[27px] text-[#12305B] ${
                        router.pathname === item.url ? "font-bold" : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
          <div className="md:hidden self-end z-50 p-3">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? (
                <AiFillCloseSquare size={20} color="#12305B" />
              ) : (
                <PiGridNineFill size={20} color="#12305B" />
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nav;
