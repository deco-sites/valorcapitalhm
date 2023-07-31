import { useEffect, useRef, useState } from "preact/hooks";
import Image from "deco-sites/std/components/Image.tsx";
import { asset } from "$fresh/runtime.ts";

interface Card {
  image: string;
  title: string;
  titleLink?: string;
  text: string
  localName?: string;
  logo?: string;
  name?: string;
  date?: string;  
}

interface SliderProps {
  cards: Card[];
}

const Slider: React.FC<SliderProps> = ({ cards }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  const changeSlide = (offset: number) => {
    let newIndex = (activeSlideIndex + offset) % cards.length;
    if (newIndex < 0) {
      newIndex += cards.length;
    }
    setActiveSlideIndex(newIndex);
  };

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchDistance = touchStartX.current! - touchEndX;

    if (Math.abs(touchDistance) > 50) {
      // Threshold for slide change
      if (touchDistance > 0) {
        handleSliderToRight();
      } else {
        handleSliderToLeft();
      }
    }
  };

  const handleSliderToRight = () => {
    changeSlide(1);
  };

  const handleSliderToLeft = () => {
    changeSlide(-1);
  };

  // useEffect(() => {
  //   const interval = setInterval(() => handleSliderToRight(), 6000);
  //   return () => clearInterval(interval);
  // }, [activeSlideIndex]);

  const dots = () => {
    if (cards.length === 0) {
      return null;
    }
    return (
      <div className="flex flex-row items-center justify-center">
        {cards.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 bg-gray-400 rounded-full mx-1 ${
              index === activeSlideIndex ? "bg-gray-800" : ""
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div
      className="flex flex-col items-center justify-center relative"
      ref={sliderRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="w-[100%] xl:flex xl:flex-row xl:items-center gap-4">
        <button
          onClick={() => handleSliderToLeft()}
          className="hidden xl:block"
        >
          <img
            className="w-[27px]"
            src={asset("/long-arrow.png")}
            alt="long-arrow"
          />
        </button>
        {cards.length > 0 && (
          <div className="w-[100%] h-[600px] relative overflow-hidden">
            {cards.map((item, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-fit flex flex-col items-center justify-center xl:flex-row ${
                  index === activeSlideIndex ? "fade-in" : "fade-out"
                }`}
              >
                <Image 
                className="max-w-full h-auto rounded-[5px] xl:w-[685px] lg:w-[550px] w-[400px]"
                src={item.image} 
                alt={item.title}
                width={685}
                height={472}
                />
                <div className="pt-[20px] xl:pl-[50px] xl:pt-0">
                  <p>{item?.localName}</p>
                  <h4 className="mb-[18px]">
                    <a href={item?.titleLink} className="mb-[20px] font-bold text-[18px] xl:text-[22px]">{item.title}</a>
                  </h4>
                  <p className="mb-[20px]">{item.text}</p>
                  <div className="flex flex-row items-center gap-[10px]">
                    <Image
                      className="w-[40px] h-[40px] rounded-full shadow-sm"
                      src={item?.logo || "/assets/valor-logo.png"}
                      alt={item?.name}
                      width={40}
                      height={40}
                    />
                    <div>
                      <p>{item?.name}</p>
                      <p className="opacity-70">{item?.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <button
          onClick={() => handleSliderToRight()}
          className="hidden xl:block h-[40px]"
        >
          <img
            className="rotate-180 w-[27px]"
            src={asset("/long-arrow.png")}
            alt="long-arrow"
          />
        </button>
      </div>
      {dots()}
    </div>
  );
};

export default Slider;
