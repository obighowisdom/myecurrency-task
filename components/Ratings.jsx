"use client";
import React, { useState } from "react";
import ReviewCard from "@/components/Card/ReviewCard";
import { Reviews } from "./Data/Review";

const Ratings = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scroll = (direction) => {
    const container = document.getElementById("carousel-container");
    const scrollAmount = direction === "left" ? -300 : 300;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    setScrollPosition(container.scrollLeft + scrollAmount);
  };

  return (
    <section className="w-full max-w-[1580px] mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden ">
      <div className="relative w-full mt-0 md:ml-[130px] ">
        <div
          id="carousel-container"
          className="flex overflow-x-auto justify-center w-full scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {Reviews.map((card, index) => (
            <ReviewCard
              key={index}
              review={card.text}
              name={card.name}
              rating={card.rating}
              authorImage={card.authorImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ratings;
