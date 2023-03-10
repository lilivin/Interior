import Header, { HeaderType } from "../../../../components/header";
import styles from "./index.module.scss";
import PostImage from "../../../../assets/article-photo-1.png";
import IconArrowButton from "../../../../components/iconArrowButton";

function LastArticle() {
  return (
    <div className={styles.container}>
      <Header type={HeaderType.Header01}>Last Article</Header>
      <div className={styles.article}>
        <img
          className={styles.image}
          src={PostImage}
          alt="Last Post Description"
        />
        <div className={styles.content}>
          <Header type={HeaderType.Header03}>
            Low Cost Latest Invented Interior Designing Ideas
          </Header>
          <p>
            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis
            dignissim maximus.posuere in.Contrary to popular belief.
          </p>
          <p>
            Lorem Ipsum is not simply random text. It has roots in a piece of
            classica.
          </p>
          <div className={styles.link}>
            <p className={styles.date}>26 December,2022</p>
            <IconArrowButton href="#" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LastArticle;
