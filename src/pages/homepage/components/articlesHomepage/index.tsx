import Articles from "../../../../components/articles";
import Article from "../../../../components/articles/components/article";
import Header, { HeaderType } from "../../../../components/header";
import { getArticles } from "../../../../helpers/articles";
import styles from "./index.module.scss";

function ArticlesHomepage() {
  let articles = getArticles(3);

  return (
    <div className={styles.container}>
      <Header type={HeaderType.Header01}>Articles & News</Header>
      <p>
        It is a long established fact that a reader will be distracted by the of
        readable content of a page when lookings at its layouts the points of
        using.
      </p>
      <Articles>
          {articles.map(
            (article) => (
              <Article
                id={article.id}
                category={article.category}
                date={article.date}
                photo={article.photo}
              >
                {article.title}
              </Article>
            )
          )}
        </Articles>
    </div>
  );
}

export default ArticlesHomepage;
