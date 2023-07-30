import { useEffect, useRef, useState } from "preact/hooks";

interface Card {
  image: string;
  title: string;
  text: string;
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

  useEffect(() => {
    const interval = setInterval(() => handleSliderToRight(), 6000);
    return () => clearInterval(interval);
  }, [activeSlideIndex]);

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
      <div className="xl:w-[100%] xl:flex xl:flex-row xl:items-center	">
        <button
          onClick={() => handleSliderToLeft()}
          className="bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold py-2 px-4 rounded-l hidden xl:block"
        >
          {"<"}
        </button>
        {cards.length > 0 && (
          <div className="w-[100%] h-[400px] relative overflow-hidden">
            {cards.map((item, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center ${
                  index === activeSlideIndex ? "fade-in" : "fade-out"
                }`}
              >
                <img src={item.image} className="max-w-full h-auto" />
                <p className="text-2xl font-bold">{item.title}</p>
                <p className="text-xl">{item.text}</p>
              </div>
            ))}
          </div>
        )}
        <button
          onClick={() => handleSliderToRight()}
          className="bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold py-2 px-4 rounded-r hidden xl:block"
        >
          {">"}
        </button>
      </div>
      {dots()}
    </div>
  );
};

export default Slider;
