import styles from "./index.module.scss";

function ImageDivider(props: { image: string, height: number }) {
  const { image, height } = props;
  return (
    <img
      src={require(`../../assets/${image}.png`)}
      className={styles.image}
      style={{height: height ? height : "auto"}}
    />
  );
}

export default ImageDivider;
