import styles from "./index.module.scss";


function DotsContainer(props: {slidesNumber: number, slideIndex: number, moveDot: (index: number) => void}) {
  const { slidesNumber, slideIndex, moveDot } = props;
  return (
    <div className={styles.containerDots}>
        {Array.from({ length: slidesNumber }).map((_, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={`${styles.dot} ${
              slideIndex === index + 1 && styles.active
            }`}
          ></div>
        ))}
      </div>
  );
}

export default DotsContainer;
