import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQData } from "./Data/FAQData";

const FAQ = () => {
  return (
    <section className="w-full max-w-[1580px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex md:flex-row flex-col gap-16 md:items-start">
        <div className="flex md:flex-col flex-row gap-12 md:w-[300px] w-full">
          <p className="leading-[27px] text-[18px] font-bold text-[#12305B]">
            Sleepstiq Product
          </p>
          <p className="leading-[27px] text-[18px] font-medium text-[#12305B]">
            Order
          </p>
          <p className="leading-[27px] text-[18px] font-medium text-[#12305B]">
            Melantonia
          </p>
        </div>
        <div className="w-full md:w-[850px]">
          <Accordion type="single" collapsible>
            <AccordionItem value="1">
              <AccordionTrigger>
                <p className="font-medium text-[18px] leading-[27px] text-[#12305B]">
                  Q1: How does it work?
                </p>
              </AccordionTrigger>
              <AccordionContent>
                <p className="leading-[24px] text-[16px] font-medium text-black">
                  Inhaling on the diffuser will turn the inside liquids
                  (melatonin, lavender, chamomile) into a light mist which you
                  inhale, and then exhale out your nose. Inhaling the melatonin
                  allows for a near-instant effect, and also allows you to
                  experience the soothing aromatherapeutic effect of lavender
                  and chamomile.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="2">
              <AccordionTrigger>
                <p className="font-medium text-[18px] leading-[27px] text-[#12305B]">
                  Q2: How does it work?
                </p>
              </AccordionTrigger>
              <AccordionContent>
                <p className="leading-[24px] text-[16px] font-medium text-black">
                  Inhaling on the diffuser will turn the inside liquids
                  (melatonin, lavender, chamomile) into a light mist which you
                  inhale, and then exhale out your nose. Inhaling the melatonin
                  allows for a near-instant effect, and also allows you to
                  experience the soothing aromatherapeutic effect of lavender
                  and chamomile.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="3">
              <AccordionTrigger>
                <p className="font-medium text-[18px] leading-[27px] text-[#12305B]">
                  Q3: How does it work?
                </p>
              </AccordionTrigger>
              <AccordionContent>
                <p className="leading-[24px] text-[16px] font-medium text-black">
                  Inhaling on the diffuser will turn the inside liquids
                  (melatonin, lavender, chamomile) into a light mist which you
                  inhale, and then exhale out your nose. Inhaling the melatonin
                  allows for a near-instant effect, and also allows you to
                  experience the soothing aromatherapeutic effect of lavender
                  and chamomile.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="4">
              <AccordionTrigger>
                <p className="font-medium text-[18px] leading-[27px] text-[#12305B]">
                  Q4: How does it work?
                </p>
              </AccordionTrigger>
              <AccordionContent>
                <p className="leading-[24px] text-[16px] font-medium text-black">
                  Inhaling on the diffuser will turn the inside liquids
                  (melatonin, lavender, chamomile) into a light mist which you
                  inhale, and then exhale out your nose. Inhaling the melatonin
                  allows for a near-instant effect, and also allows you to
                  experience the soothing aromatherapeutic effect of lavender
                  and chamomile.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="5">
              <AccordionTrigger>
                <p className="font-medium text-[18px] leading-[27px] text-[#12305B]">
                  Q5: How does it work?
                </p>
              </AccordionTrigger>
              <AccordionContent>
                <p className="leading-[24px] text-[16px] font-medium text-black">
                  Inhaling on the diffuser will turn the inside liquids
                  (melatonin, lavender, chamomile) into a light mist which you
                  inhale, and then exhale out your nose. Inhaling the melatonin
                  allows for a near-instant effect, and also allows you to
                  experience the soothing aromatherapeutic effect of lavender
                  and chamomile.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="6">
              <AccordionTrigger>
                <p className="font-medium text-[18px] leading-[27px] text-[#12305B]">
                  Q6: How does it work?
                </p>
              </AccordionTrigger>
              <AccordionContent>
                <p className="leading-[24px] text-[16px] font-medium text-black">
                  Inhaling on the diffuser will turn the inside liquids
                  (melatonin, lavender, chamomile) into a light mist which you
                  inhale, and then exhale out your nose. Inhaling the melatonin
                  allows for a near-instant effect, and also allows you to
                  experience the soothing aromatherapeutic effect of lavender
                  and chamomile.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
