import { SliderImage } from "../..";
import styles from "./index.module.scss";

function Slide(props: {
  index: number;
  slideIndex: number;
  sliderImage: SliderImage;
}) {
  const { index, slideIndex, sliderImage } = props;
  return (
    <div
      key={index}
      className={`${styles.slide} ${
        slideIndex === index + 1 && styles.activeAnim
      }`}
    >
      <img
        src={require(`../../../../../../assets/${sliderImage.image}.png`)}
        alt={sliderImage.alt}
      />
    </div>
  );
}

export default Slide;
