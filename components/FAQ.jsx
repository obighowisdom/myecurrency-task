'use client'
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQData } from "./Data/FAQData";
import Image from "next/image";

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
      setOpenIndex(openIndex === index ? null : index); // Toggle open/close
    };
  return (
    <section className="w-full max-w-[1580px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex md:flex-row flex-col gap-16 md:items-start">
        <div className="flex md:flex-col flex-row gap-6 md:gap-7 md:w-[300px] w-full">
          <div className="relative">
            <button className="leading-[27px] cursor-pointer focus:font-bold text-[14px] md:text-[18px] font-bold text-[#12305B]">
              Sleepstiq Product
            </button>
            <div className="absolute -mt-[26px] ml-[84px] justify-end ">
              {" "}
              <Image
                src="/images/titleImg.png"
                width={130}
                height={47}
                alt="bg"
              />
            </div>
          </div>
          <button className="leading-[27px] focus:font-bold cursor-pointer text-[14px] md:text-[18px] font-medium text-[#12305B]">
            Order
          </button>
          <button className="leading-[27px] focus:font-bold cursor-pointer text-[14px] md:text-[18px] font-medium text-[#12305B]">
            Melantonia
          </button>
        </div>
        <div className="w-full md:w-[850px]">
          <Accordion type="single" collapsible>
            {FAQData.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger onClick={() => handleToggle(index)}>
                  <button className="text-[18px] focus:font-bold font-medium leading-[27px] text-[#12305B]">
                    {item.question}
                  </button>
                </AccordionTrigger>
                {openIndex === index && (
                  <AccordionContent>
                    <p className="text-[16px] font-medium leading-[24px] text-[#000]">
                      {item.answer}
                    </p>
                  </AccordionContent>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
