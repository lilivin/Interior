import Header, { HeaderType } from "../../../../components/header";
import styles from "./index.module.scss";

function Sidebar() {
  return (
    <div className={styles.container}>
      <Header type={HeaderType.Header03}>Lastest News</Header>
      <div className={styles.latestNews}>
        <a href="#" className={styles.singleNews}>
          <Header type={HeaderType.Header05}>We focus on comfort And Gorgeous</Header>
          <p className={styles.date}>06/02/2022</p>
        </a>
        <a href="#" className={styles.singleNews}>
          <Header type={HeaderType.Header05}>We focus on comfort And Gorgeous</Header>
          <p className={styles.date}>06/02/2022</p>
        </a>
        <a href="#" className={styles.singleNews}>
          <Header type={HeaderType.Header05}>We focus on comfort And Gorgeous</Header>
          <p className={styles.date}>06/02/2022</p>
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
