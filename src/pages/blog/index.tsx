import { useParams } from "react-router-dom";
import Articles from "../../components/articles";
import Article from "../../components/articles/components/article";
import Footer from "../../components/footer";
import Header, { HeaderType } from "../../components/header";
import PageTitle from "../../components/pageTitle";
import Pagination, { getPaginatedData } from "../../components/pagination";
import { ArticleType, getArticles } from "../../helpers/articles";
import LastArticle from "./components/lastArticle";
import styles from "./index.module.scss";

function Blog() {
  let articles = getArticles();
  const articlesPerPage = 6;
  const pagesNumber = Math.round(articles.length / articlesPerPage);
  const { page: currentPage } = useParams();
  const current = currentPage ? Number(currentPage) : 0;

  return (
    <div className={styles.container}>
      <PageTitle
        title="Articles & News"
        path="Home / Blog"
        image="pricing-page-title"
      />
      <LastArticle
        id={articles[0].id}
        image={articles[0].photo}
        shortDescription={articles[0].shortDescription}
        title={articles[0].title}
        date={articles[0].date}
      />
      <div className={styles.articlesContainer}>
        <Header type={HeaderType.Header01}>Articles & News</Header>
        <Articles>
          {getPaginatedData(current, articlesPerPage, articles).map(
            (article: ArticleType) => (
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
        <Pagination current={current} pagesNumber={pagesNumber} page="blog" />
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
