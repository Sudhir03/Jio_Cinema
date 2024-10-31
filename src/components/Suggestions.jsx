import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Suggestions() {
  const logos = [
    { src: "./images/colors.avif", alt: "Colors" },
    { src: "./images/colors.avif", alt: "MTV" },
    { src: "./images/colors.avif", alt: "Colors Kannada" },
    { src: "./images/colors.avif", alt: "Nick" },
    { src: "./images/colors.avif", alt: "HBO" },
    { src: "./images/colors.avif", alt: "Peacock" },
    { src: "./images/colors.avif", alt: "Colors Marathi" },
    { src: "./images/colors.avif", alt: "Colors Bangla" },
    { src: "./images/colors.avif", alt: "Colors Gujarati" },
    { src: "./images/colors.avif", alt: "Colors Infinity" },
  ];
  const images = [
    "./images/forYou1.avif",
    "./images/forYou2.webp",
    "./images/forYou3.avif",
    "./images/forYou4.avif",
    "./images/forYou5.avif",
    "./images/forYou6.avif",
    "./images/forYou7.avif",
    "./images/forYou8.jpg",
    "./images/forYou9.avif",
    "./images/forYou10.avif",
  ];

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
    <>
      {/* logos */}
      <div className="bg-[#0d1a27] pt-10 pl-7">
        <div className="flex gap-4">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center rounded-lg"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                width={120}
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="relative pt-4 pb-5 bg-[#0d1a27] flex flex-col gap-4 pl-7">
        <h1 className=" text-white text-[24px] font-bold">Popular Near You</h1>
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
            {images.map((image, index) => (
              <div
                key={index}
                style={{
                  backgroundImage: `url(${image})`,
                  width: "200px",
                  height: "300px",
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
    </>
  );
}
export default Suggestions;
