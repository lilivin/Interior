import Articles from "../../components/articles";
import Article from "../../components/articles/components/article";
import Footer from "../../components/footer";
import Header, { HeaderType } from "../../components/header";
import Navigation from "../../components/navigation";
import PageTitle from "../../components/pageTitle";
import LastArticle from "./components/lastArticle";
import styles from "./index.module.scss";

function Blog() {
  return (
    <div className={styles.container}>
      <Navigation />
      <PageTitle
        title="Articles & News"
        path="Home / Blog"
        image="pricing-page-title"
      />
      <LastArticle />
      <div className={styles.articlesContainer}>
        <Header type={HeaderType.Header01}>Articles & News</Header>
        <Articles>
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
        </Articles>
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
