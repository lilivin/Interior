import { useState } from "react";
import styles from "./index.module.scss";
import SliderButton, { DirectionType } from "./components/sliderButton";
import DotsContainer from "./components/dotsContainer";
import Slide from "./components/slide";

export interface SliderImage {
  image: string;
  alt: string;
}


function Slider(props: { photos: SliderImage[] | undefined }) {
  const { photos } = props;
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    slideIndex === photos!.length
      ? setSlideIndex(1)
      : setSlideIndex(slideIndex + 1);
  };

  const prevSlide = () => {
    slideIndex === 1
      ? setSlideIndex(photos!.length)
      : setSlideIndex(slideIndex - 1);
  };

  const moveDot = (index: number) => {
    setSlideIndex(index);
  };

  return (
    <div className={styles.container}>
      {photos!.map((slide: SliderImage, index) => (
        <Slide index={index} slideIndex={slideIndex} sliderImage={slide} />
      ))}
      <SliderButton onClick={nextSlide} direction={DirectionType.Next} />
      <SliderButton onClick={prevSlide} direction={DirectionType.Prev} />
      <DotsContainer
        slidesNumber={photos!.length}
        slideIndex={slideIndex}
        moveDot={moveDot}
      />
    </div>
  );
}

export default Slider;
