import styles from "./index.module.scss";
import Arrow from "../../../../../../assets/icons/secendary-color-arrow.svg";

export const enum DirectionType {
  Next = "next",
  Prev = "prev",
}

function SliderButton(props: {
  onClick: () => void;
  direction: DirectionType;
}) {
  const { onClick, direction } = props;
  return (
    <button
      className={`${styles.btnSlide} ${
        direction === DirectionType.Next ? styles.next : styles.prev
      }`}
      onClick={onClick}
    >
      <img src={Arrow} alt="Next Arrow" />
    </button>
  );
}

export default SliderButton;
