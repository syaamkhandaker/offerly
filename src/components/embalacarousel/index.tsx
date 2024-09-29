import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "@/components/embalacarouseldotbutton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "@/components/embalacarouselarrowbuttons";
import useEmblaCarousel from "embla-carousel-react";
import DashboardCard from "../dashboardcard/dashboardcard";

interface SlideInfo {
  src: string;
  event: string;
  company: string;
  role: string;
  date_issue: Date;
  date_due: Date;
}

type PropType = {
  slides: SlideInfo[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla w-full">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((card, index) => (
            <div className="embla__slide" key={index}>
              <DashboardCard key={index} i={index} {...card} />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls flex flex-row justify-center items-center">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        </div>
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
        <div className="embla__buttons">
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
