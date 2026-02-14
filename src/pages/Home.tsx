import Card from "../components/comman/Card";
import Carousel from "../components/comman/Carousel";
import Section from "../components/comman/Section";
import HorizontalScroll from "../components/comman/HorizontalScroll";

import {
  banners,
  eventImages,
  moviePosters,
  promoBanner,
} from "../data/homeData";

const Home = () => {
  return (
    <div className="px-2 sm:px-4 md:px-8 lg:px-12 mb-10">

      {/* Banner */}
      <div className="mt-3">
        <Carousel images={banners} />
      </div>

      {/* Movies */}
      <Section title="Recommended Movies">
        <HorizontalScroll>
          {moviePosters.map((img, index) => (
            <Card
              key={index}
              image={img.image}
              path={img.path}
            />
          ))}
        </HorizontalScroll>
      </Section>

      {/* Promo */}
      <div
        className={`
          ${promoBanner.bgClass}
          ${promoBanner.textClass}
          rounded-lg shadow-md
          h-24 sm:h-28 md:h-32
          mt-8
          flex justify-center items-center
          text-sm sm:text-base md:text-lg
          font-semibold
          text-center px-3
        `}
      >
        {promoBanner.text}
      </div>

      {/* Events */}
      <Section title="Best Live Events">
        <HorizontalScroll>
          {eventImages.map((img, index) => (
            <Card
              key={index}
              image={img.image}
              path={img.path}
            />
          ))}
        </HorizontalScroll>
      </Section>
    </div>
  );
};

export default Home;
