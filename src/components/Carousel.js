import React from "react";
import { PrevButton, NextButton, usePrevNextButtons } from "./CarouselButtons";
import useEmblaCarousel from "embla-carousel-react";
import "../CSS/carousel.css";

export default function Carousel({ mainCarouselImages }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {mainCarouselImages.map((image_path, index) => (
            <div className="embla__slide" key={index}>
              <img src={image_path} alt="" className="carousel-images" />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
}
