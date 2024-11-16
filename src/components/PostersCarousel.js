import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TopicsCarousel({ heading, posters }) {
  const containerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

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
      const scrollAmount = direction === "left" ? -609 : 609;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <div className="relative pb-7 bg-[#0d1a27] flex flex-col gap-7 pl-7">
      <h1 className=" text-white text-[24px] font-bold">{heading}</h1>
      <div className="relative flex items-center w-full">
        {showLeftArrow && (
          <button
            onClick={() => handleScroll("left")}
            className="absolute left-2 z-10 p-2 text-white rounded-full "
            aria-label="Scroll left"
          >
            <ChevronLeft size={30} />
          </button>
        )}
        <div
          ref={containerRef}
          className="flex w-full overflow-x-scroll gap-3 scrollbar-hide"
          onScroll={checkScroll}
        >
          {posters.map((image, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(${image})`,
                width: "212px",
                height: "280px",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="rounded-lg shrink-0"
            ></div>
          ))}
        </div>
        {showRightArrow && (
          <button
            onClick={() => handleScroll("right")}
            className="absolute right-2 z-10 p-2 text-white rounded-full"
            aria-label="Scroll right"
          >
            <ChevronRight size={30} />
          </button>
        )}
      </div>
    </div>
  );
}
