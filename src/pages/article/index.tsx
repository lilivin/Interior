import Footer from "../../components/footer";
import PageTitle from "../../components/pageTitle";
import Sidebar from "./component/sidebar";
import Markdown from "markdown-to-jsx";
import styles from "./index.module.scss";
import { useEffect, useState } from "react";
import Header, { HeaderType } from "../../components/header";
import ContactForm from "../../components/contactForm";
import { useParams } from "react-router-dom";
import { getArticleById } from "../../helpers/articles";

function Article() {
  const [post, setPost] = useState("");
  const { articleId: article } = useParams();
  const articleDetails = getArticleById(article!);

  useEffect(() => {
    import(`../../data/articles/${article}.md`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setPost(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  });

  return (
    <div className={styles.container}>
      <PageTitle
        title="Article"
        path="Home / Article"
        image="pricing-page-title"
      />
      <div className={styles.content}>
        <div className={styles.article}>
          <Header type={HeaderType.Header01}>{articleDetails!.title}</Header>
          <img src={require(`../../assets/articles/${articleDetails!.photo}.png`)} alt={articleDetails!.title} />
          <Markdown>{post}</Markdown>
          <div className={styles.contact}>
            <Header type={HeaderType.Header03}>Leave a reply</Header>
            <ContactForm />
          </div>
        </div>
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}

export default Article;
