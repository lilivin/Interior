import Header, { HeaderType } from "../../../../../../components/header";
import IconArrowButton from "../../../../../../components/iconArrowButton";
import { Project } from "../../../../../../helpers/projects";
import styles from "./index.module.scss";

function truncate(str: string, n: number) {
  return str.length > n ? str.slice(0, n - 1) + "..." : str;
}

function SingleProject(props: { project: Project }) {
  const { project } = props;
  return (
    <div className={styles.project}>
      <img
        className={styles.projectImage}
        src={require(`../../../../../../assets/projects/${project.photos[0].image}.png`)}
        alt={project.photos[0].alt}
      />
      <div className={styles.info}>
        <div>
          <Header type={HeaderType.Header03}>{project.title}</Header>
          <p>{truncate(project.description, 50)}</p>
        </div>
        <IconArrowButton href={`${process.env.REACT_APP_HOSTNAME_URL}/project/${project.id}`} />
      </div>
    </div>
  );
}

export default SingleProject;
