import Header, { HeaderType } from "../../../../../../components/header";
import styles from "./index.module.scss";
import RightArrow from "../../../../../../assets/href-right-arrow.svg";
import IconArrowButton from "../../../../../../components/iconArrowButton";

function Project(props: {
  title: string;
  type: string;
  href: string;
  image: string;
}) {
  const { title, type, href, image } = props;
  return (
    <div className={styles.container}>
      <img src={require(`../../../../../../assets/${image}.png`)} alt={title} />
      <div className={styles.info}>
        <div>
          <Header type={HeaderType.Header03}>{title}</Header>
          <p>{type}</p>
        </div>
        <IconArrowButton href="#" />
      </div>
    </div>
  );
}

export default Project;
