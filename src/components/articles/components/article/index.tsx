import Header, { HeaderType } from "../../../header";
import styles from "./index.module.scss";
import IconArrowButton from "../../../iconArrowButton";

function Article(props: {
  children: string;
  id: string;
  category: string;
  date: string;
  photo: string;
}) {
  const { children, category, id, date, photo } = props;
  return (
    <div className={styles.container}>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(${require(`../../../../assets/articles/${photo}.png`)})`,
        }}
      >
        <div className={styles.category}>{category}</div>
      </div>
      <Header type={HeaderType.Header03}>{children}</Header>
      <div className={styles.link}>
        <p className={styles.date}>{new Date(date).toDateString()}</p>
        <IconArrowButton href={`${process.env.REACT_APP_HOSTNAME_URL}/article/${id}`} />
      </div>
    </div>
  );
}

export default Article;
