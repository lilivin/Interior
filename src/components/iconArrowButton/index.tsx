import styles from "./index.module.scss";
import RightArrow from "../../assets/href-right-arrow.svg";
import { Link } from "react-router-dom";

function IconArrowButton(props: { href: string }) {
  const { href } = props;
  return (
    <Link to={href} className={styles.button}>
      <img src={RightArrow} alt="Right arrow" />
    </Link>
  );
}

export default IconArrowButton;
