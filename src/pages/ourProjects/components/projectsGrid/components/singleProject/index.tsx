import Header, { HeaderType } from "../../../../../../components/header";
import IconArrowButton from "../../../../../../components/iconArrowButton";
import styles from "./index.module.scss";

function SingleProject(props: { project: any }) {
  const { project } = props;
  return (
    <div className={styles.project}>
      <img className={styles.projectImage} src={require(`../../../../../../assets/${project.image}.png`)} alt={project.title} />
      <div className={styles.info}>
        <div>
          <Header type={HeaderType.Header03}>{project.title}</Header>
          <p>{project.subtitle}</p>
        </div>
        <IconArrowButton href="#" />
      </div>
    </div>
  );
}

export default SingleProject;
