import Header, {HeaderType} from "../header";
import styles from "./index.module.scss";

function PageTitle() {
  return (
    <div className={styles.container} style={{ backgroundImage: `url(${require("../../assets/about-us-page-title.png")})` }}>
      <div className={styles.info}>
        <Header type={HeaderType.Header01}>About Us</Header>
      </div>
    </div>
  );
}

export default PageTitle;
