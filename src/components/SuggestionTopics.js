import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TopicsNav({ categories }) {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("For You");
  const containerRef = useRef(null);

  const checkScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const handleScroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setTimeout(checkScroll, 300);
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="relative flex items-center bg-[#0d1a27] px-10 overflow-hidden w-full h-[80px]">
      {showLeftArrow && (
        <button
          onClick={() => handleScroll("left")}
          className="absolute left-4 z-10  p-2 bg-[#2c2c2c] text-white rounded-full hover:bg-[#3c3c3c]"
          aria-label="Scroll left"
        >
          <ChevronLeft size={24} />
        </button>
      )}
      <div
        ref={containerRef}
        className="flex overflow-x-scroll space-x-2 mx-8 scrollbar-hide"
        style={{
          scrollBehavior: "smooth",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
        onScroll={checkScroll}
      >
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => handleCategoryClick(category)}
            className={` whitespace-nowrap px-4 h-9 rounded-full text-md font-medium transition-colors cursor-pointer  hover:bg-gray-300 hover:bg-opacity-60 max-w-46 w-auto
              ${
                category === selectedCategory
                  ? "bg-white text-black"
                  : "bg-gray-600 text-white"
              }`}
          >
            {category}
          </button>
        ))}
      </div>
      {showRightArrow && (
        <button
          onClick={() => handleScroll("right")}
          className="absolute right-4 z-10 p-2 bg-[#2c2c2c] text-white rounded-full hover:bg-[#3c3c3c]"
          aria-label="Scroll right"
        >
          <ChevronRight size={24} />
        </button>
      )}
    </div>
  );
}
