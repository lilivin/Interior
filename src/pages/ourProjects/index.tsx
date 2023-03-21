import { ScrollRestoration } from "react-router-dom";
import Footer from "../../components/footer";
import PageTitle from "../../components/pageTitle";
import ProjectsGrid from "./components/projectsGrid";

function OurProjects() {
  return (
    <div>
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
