"use client";
import { useState } from "react";
import AboutProduct from "@/components/AboutProduct";
import FAQ from "@/components/FAQ";
import Nav from "@/components/Hero-section/Nav";
import Image from "next/image";
import Search from "@/components/ui/search";
import { FAQData } from "@/components/Data/FAQData";

const FAQPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const filteredQuestions = FAQData.filter(({ question }) =>
    question.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <section>
      <div className="flex items-center justify-center w-full">
        <div className="relative bg-[#FBF9F2] w-full md:h-[550px] h-[500px] md:px-0 px-4">
          <div className="md:ml-[130px] absolute inset-0 mt-5">
            <Nav />

            <div className="my-[120px] mx-4 md:mx-0 md:ml-0 ml-4 flex flex-col gap-8">
              <p className="font-sans text-[18px] font-[400px] leading-[27px] text-[#12305B]">
                We&apos;re here to help you
              </p>
              <Image
                src="/images/assist.png"
                width={369}
                height={74}
                alt="text-img"
              />
              <Search onSearchChange={handleSearchChange} />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto my-20">
        <FAQ questions={filteredQuestions} />
      </div>
    </section>
  );
};

export default FAQPage;
