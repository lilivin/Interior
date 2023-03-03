import styles from "./index.module.scss";
import InteriorLogo from "../../assets/interior-logo.svg";
import Header, { HeaderType } from "../header";

function Logo() {
  return (
    <div className={styles.logo}>
      <img src={InteriorLogo} alt="Interior Logo" />
      <Header as="h3" type={HeaderType.Header02}>Interior</Header>
    </div>
  );
}

export default Logo;
