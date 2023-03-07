import Header, { HeaderType } from "../../../../components/header";
import styles from "./index.module.scss";

function Quote() {
  return (
    <div className={styles.container}>
      <Header type={HeaderType.Header02}>
        I like an interior that defies labeling. I don't really want someone to
        walk into a room and know that I did it
      </Header>
      <p className={styles.author}>-Bunny Williams</p>
    </div>
  );
}

export default Quote;
