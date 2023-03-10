import Header, { HeaderType } from "../../../header";
import styles from "./index.module.scss";
import RightArrow from "../../../../assets/href-right-arrow.svg";
import IconArrowButton from "../../../iconArrowButton";

function Article(props: {
  children: string;
  category: string;
  link: string;
  date: string;
  photo: string;
}) {
  const { children, category, link, date, photo } = props;
  return (
    <div className={styles.container}>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(${require(`../../../../assets/${photo}.png`)})`,
        }}
      >
        <div className={styles.category}>{category}</div>
      </div>
      <Header type={HeaderType.Header03}>{children}</Header>
      <div className={styles.link}>
        <p className={styles.date}>{date}</p>
        <IconArrowButton href="#" />
      </div>
    </div>
  );
}

export default Article;
