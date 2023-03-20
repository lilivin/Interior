import { ScrollRestoration } from "react-router-dom";
import Footer from "../../components/footer";
import PageTitle from "../../components/pageTitle";
import ProjectsGrid from "./components/projectsGrid";
import styles from "./index.module.scss";

function OurProjects() {
  return (
    <div className={styles.container}>
      <ScrollRestoration />
      <PageTitle
        title="Our Projects"
        path="Home / Projects"
        image="our-projects-page-title"
      />
      <ProjectsGrid />
      <Footer />
    </div>
  );
}

export default OurProjects;
