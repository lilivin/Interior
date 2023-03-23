import Header, { HeaderType } from "../../../../../../components/header";
import styles from "./index.module.scss";
import IconArrowButton from "../../../../../../components/iconArrowButton";

function SingleProject(props: {
  id: string,
  title: string;
  type: string;
  image: string;
}) {
  const { id, title, type, image } = props;
  return (
    <div className={styles.container}>
      <img src={require(`../../../../../../assets/projects/${image}.png`)} alt={title} />
      <div className={styles.info}>
        <div>
          <Header type={HeaderType.Header03}>{title}</Header>
          <p className={styles.type}>{type}</p>
        </div>
        <IconArrowButton href={`http://localhost:3000/project/${id}`} />
      </div>
    </div>
  );
}

export default SingleProject;
