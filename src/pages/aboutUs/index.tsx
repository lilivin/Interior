import ContactForm from "../../components/contactForm";
import ContentWithImage from "../../components/contentWithImage";
import Footer from "../../components/footer";
import Header, { HeaderType } from "../../components/header";
import PageTitle from "../../components/pageTitle";
import Team from "../../components/team";
import Quote from "./components/quote";
import styles from "./index.module.scss";

function AboutUs() {
  return (
    <div className={styles.container}>
      <PageTitle
        title="Abous Us"
        path="Home / Abous Us"
        image="about-us-page-title"
      />
      <Quote />
      <ContentWithImage
        title="What We Do"
        buttonText="Our Concept"
        buttonHref="#"
        image="what-we-do-section"
      >
        It is a long established fact that a reader will be distracted by the of
        readable content of a page when lookings at its layouts the points of
        using that it has a more-or-less normal.
      </ContentWithImage>
      <ContentWithImage
        reverse={true}
        title="The End Result"
        buttonText="Our Portfolio"
        buttonHref="#"
        image="end-result-section"
      >
        It is a long established fact that a reader will be distracted by the of
        readable content of a page when lookings at its layouts the points of
        using that it has a more-or-less normal.
      </ContentWithImage>
      <Team />
      <div className={styles.contact}>
        <Header type={HeaderType.Header01}>
          Creative project? Let's have a productive talk.
        </Header>
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
