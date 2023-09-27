import Header, { HeaderType } from "../../../../components/header";
import styles from "./index.module.scss";
import PostImage from "../../../../assets/articles/article-photo-1.png";
import IconArrowButton from "../../../../components/iconArrowButton";

function LastArticle(props: {id: string, image: string, shortDescription: string, title: string, date: string}) {
  const {id, image, shortDescription, title, date} = props;
  return (
    <div className={styles.container}>
      <Header type={HeaderType.Header01}>Last Article</Header>
      <div className={styles.article}>
        <img
          className={styles.image}
          src={require(`../../../../assets/articles/${image}.png`)}
          alt={title}
        />
        <div className={styles.content}>
          <Header type={HeaderType.Header03}>
            Low Cost Latest Invented Interior Designing Ideas
          </Header>
          <p>{shortDescription}</p>
          <div className={styles.link}>
            <p className={styles.date}>{new Date(date).toDateString()}</p>
            <IconArrowButton href={`${process.env.REACT_APP_HOSTNAME_URL}/article/${id}`} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LastArticle;
