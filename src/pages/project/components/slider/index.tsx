import { useState } from "react";
import styles from "./index.module.scss";
import SliderButton, { DirectionType } from "./components/sliderButton";
import DotsContainer from "./components/dotsContainer";
import Slide from "./components/slide";

export interface SliderImage {
  image: string;
  alt: string;
}

const sliderImages: SliderImage[] = [
  {
    image: "project-photo-1",
    alt: "Project Image 1 Description",
  },
  {
    image: "project-photo-2",
    alt: "Project Image 2 Description",
  },
  {
    image: "project-photo-3",
    alt: "Project Image 3 Description",
  },
  {
    image: "project-photo-4",
    alt: "Project Image 4 Description",
  },
  {
    image: "project-photo-3",
    alt: "Project Image 3 Description",
  },
];

function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    slideIndex === sliderImages.length
      ? setSlideIndex(1)
      : setSlideIndex(slideIndex + 1);
  };

  const prevSlide = () => {
    slideIndex === 1
      ? setSlideIndex(sliderImages.length)
      : setSlideIndex(slideIndex - 1);
  };

  const moveDot = (index: number) => {
    setSlideIndex(index);
  };

  return (
    <div className={styles.container}>
      {sliderImages.map((slide: SliderImage, index) => (
        <Slide index={index} slideIndex={slideIndex} sliderImage={slide} />
      ))}
      <SliderButton onClick={nextSlide} direction={DirectionType.Next} />
      <SliderButton onClick={prevSlide} direction={DirectionType.Prev} />
      <DotsContainer
        slidesNumber={sliderImages.length}
        slideIndex={slideIndex}
        moveDot={moveDot}
      />
    </div>
  );
}

export default Slider;
