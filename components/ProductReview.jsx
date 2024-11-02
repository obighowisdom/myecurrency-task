"use client";
import React, { useState } from "react";
import ProductReviewCard from "./Card/ProductReviewCard";
import { Reviews } from "./Data/Review";
import { ProductReviewData } from "./Data/ProductReview";

const ProductReview = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scroll = (direction) => {
    const container = document.getElementById("carousel-container");
    const scrollAmount = direction === "left" ? -300 : 300;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    setScrollPosition(container.scrollLeft + scrollAmount);
  };

  return (
    <section className="w-full max-w-[1580px] mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="relative w-full md:ml-[130px] ml-0 mt-10 md:mt-24">
        <h3 className="font-sans text-[#4D533C] font-bold text-[36px] leading-[46px] mb-6">
          Product Reviews
        </h3>
        <div
          id="carousel-container"
          className="flex overflow-x-auto gap-6 scrollbar-hide scroll-smooth h-[600px] pt-10 w-[full]"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {ProductReviewData.map((card, index) => (
            <ProductReviewCard
              key={index}
              text={card.text}
              name={card.name}
              rating={card.rating}
              image={card.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductReview;
