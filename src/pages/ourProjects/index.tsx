import Footer from "../../components/footer";
import Navigation from "../../components/navigation";
import PageTitle from "../../components/pageTitle";
import { initialProjects } from "../../data/projects";
import ProjectsGrid from "./components/projectsGrid";
import styles from "./index.module.scss";

function OurProjects() {
  return (
    <div className={styles.container}>
      <Navigation />
      <PageTitle
        title="Our Projects"
        path="Home / Projects"
        image="our-projects-page-title"
      />
      <ProjectsGrid initialProjects={initialProjects} />
      <Footer />
    </div>
  );
}

export default OurProjects;
