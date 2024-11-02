"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { testimonials } from "../Data/AboutData";

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <Card className=" max-w-md md:mx-0 mx-auto rounded-none md:w-[474px] w-fit md:p-0 md:h-[455px] h-fit  bg-[#FBF9F2] shadow-custom">
      <CardContent className="md:p-8 p-3">
        <div className="md:min-h-[200px] flex flex-col justify-between">
          <p className="text-[#4D533C] italic mb-8 text-[16px] md:text-[24px] leading-[40px] mt-10">
            {testimonials[currentIndex].content}
          </p>

          <div className="flex items-center mt-16">
            <div className="w-12 h-12 bg-gray-200 rounded-full mr-4">
              {" "}
              <Image
                src="/images/user.png"
                width={84}
                height={84}
                alt="user"
              />{" "}
            </div>
            <div>
              <h3 className="font-bold text-[#4D533C] text-[22px] leading-[33px]">
                {testimonials[currentIndex].name}
              </h3>
              <p className="text-gray-500 text-sm">
                {testimonials[currentIndex].position}
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center mt-6 space-x-4">
          <button
            onClick={prevSlide}
            className="p-1 rounded-full hover:bg-gray-100 transition-colors"
          >
           
          </button>

          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-gray-800" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-1 rounded-full hover:bg-gray-100 transition-colors"
          >
            {/* <ChevronRight className="w-5 h-5 text-gray-500" /> */}
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCarousel;
