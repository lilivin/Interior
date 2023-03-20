import Markdown from "markdown-to-jsx";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/footer";
import Header, { HeaderType } from "../../components/header";
import PageTitle from "../../components/pageTitle";
import { getProjectById } from "../../helpers/projects";
import Slider from "./components/slider";
import styles from "./index.module.scss";

function Project() {
  const [projectText, setProjectText] = useState("")
  const { projectId: project } = useParams();
  const projectDetails = getProjectById(project!);

  useEffect(() => {
    import(`../../data/projects/${projectDetails?.id}.md`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setProjectText(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  });


  return (
    <div className={styles.container}>
      <PageTitle
        title="Single Project"
        path="Home / Project"
        image="project-page-title"
      />
      <div className={styles.content}>
        <ul className={styles.details}>
          <li>
            <p className={styles.property}>Client</p>
            <p className={styles.value}>{projectDetails?.client}</p>
          </li>
          <li>
            <p className={styles.property}>Category</p>
            <p className={styles.value}>{projectDetails?.category}</p>
          </li>
          <li>
            <p className={styles.property}>Cost</p>
            <p className={styles.value}>{projectDetails?.cost}</p>
          </li>
          <li>
            <p className={styles.property}>Date</p>
            <p className={styles.value}>{new Date(projectDetails!.date).toDateString()}</p>
          </li>
        </ul>
        <div className={styles.text}>
          <Header type={HeaderType.Header01}>{projectDetails!.title}</Header>
          <Markdown>{projectText}</Markdown>
        </div>
      </div>
      <Slider photos={projectDetails?.photos} />
      <Footer />
    </div>
  );
}

export default Project;
