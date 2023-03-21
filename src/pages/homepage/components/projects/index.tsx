import Header, { HeaderType } from "../../../../components/header";
import { getProjects, Project } from "../../../../helpers/projects";
import SingleProject from "./components/singleProject";
import styles from "./index.module.scss";

function Projects() {
  const initialProjects = getProjects(4);
  return (
    <div className={styles.container}>
      <Header type={HeaderType.Header01}>Follow Our Projects</Header>
      <p>
        It is a long established fact that a reader will be distracted by the of
        readable content of page lookings at its layouts points.
      </p>
      <div className={styles.projects}>
        {initialProjects.map((project: Project) => (
          <SingleProject
            id={project.id}
            title={project.title}
            type={project.category}
            image={project.photos[0].image}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
