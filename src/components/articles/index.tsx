import Header, { HeaderType } from "../header";
import Article from "./components/article";
import styles from "./index.module.scss";

function Articles() {
  return (
    <div className={styles.container}>
      <Header type={HeaderType.Header01}>Articles & News</Header>
      <p>
        It is a long established fact that a reader will be distracted by the of
        readable content of a page when lookings at its layouts the points of
        using.
      </p>
      <div className={styles.articles}>
        <Article
          category="Kitchan Design"
          link="#"
          date="26 December,2022"
          photo="article-photo-1"
        >
          Let’s Get Solution For Building Construction Work
        </Article>
        <Article
          category="Living Design"
          link="#"
          date="22 December,2022"
          photo="article-photo-2"
        >
          Low Cost Latest Invented Interior Designing Ideas.
        </Article>
        <Article
          category="Interior Design"
          link="#"
          date="25 December,2022"
          photo="article-photo-3"
        >
          Best For Any Office & Business Interior Solution
        </Article>
      </div>
    </div>
  );
}

export default Articles;
