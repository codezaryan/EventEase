import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

interface CarouselProps {
  images: string[];
  autoSlide?: boolean;
  interval?: number;
}

const Carousel = ({ images = [], autoSlide = true, interval = 3000 }: CarouselProps) => {
  const [current, setCurrent] = useState(0);

  // Auto Slide
  useEffect(() => {
    if (!autoSlide) return;

    const slide = setInterval(() => {
      nextSlide();
    }, interval);

    return () => clearInterval(slide);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  if (!images.length) return null;

  return (
    <div className="relative w-full overflow-hidden rounded-lg">

      {/* Slides */}
      <NavLink to="/movies"
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${current * 100}%)`
        }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="banner"
            className="w-full h-[250px] md:h-[400px] object-cover flex-shrink-0"
          />
        ))}
        </NavLink>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black"
      >
        ❮
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index
                ? "bg-pink-500"
                : "bg-white/70"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
