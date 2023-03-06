import Header, { HeaderType } from "../../../../components/header";
import Project from "./components/project";
import styles from "./index.module.scss";

function Projects() {
  return (
    <div className={styles.container}>
      <Header type={HeaderType.Header01}>Follow Our Projects</Header>
      <p>
        It is a long established fact that a reader will be distracted by the of
        readable content of page lookings at its layouts points.
      </p>
      <div className={styles.projects}>
        <Project
          title="Modern Kitchan"
          type="Decor / Artchitecture"
          href="#"
          image="project-photo-1"
        />
        <Project
          title="Modern Kitchan"
          type="Decor / Artchitecture"
          href="#"
          image="project-photo-2"
        />
        <Project
          title="Modern Kitchan"
          type="Decor / Artchitecture"
          href="#"
          image="project-photo-3"
        />
        <Project
          title="Modern Kitchan"
          type="Decor / Artchitecture"
          href="#"
          image="project-photo-4"
        />
      </div>
    </div>
  );
}

export default Projects;
