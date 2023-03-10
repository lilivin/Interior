import styles from "./index.module.scss";
import RightArrow from "../../assets/href-right-arrow.svg";

function IconArrowButton(props: { href: string }) {
  const { href } = props;
  return (
    <a href={href} className={styles.button}>
      <img src={RightArrow} alt="Right arrow" />
    </a>
  );
}

export default IconArrowButton;
