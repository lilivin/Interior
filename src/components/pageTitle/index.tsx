import Header, {HeaderType} from "../header";
import styles from "./index.module.scss";

function PageTitle(props: {title: string, path: string, image: string}) {
  const { title, path, image } = props;
  return (
    <div className={styles.container} style={{ backgroundImage: `url(${require(`../../assets/page-title-images/${image}.png`)})` }}>
      <div className={styles.info}>
        <Header type={HeaderType.Header01}>{title}</Header>
        <p>{path}</p>
      </div>
    </div>
  );
}

export default PageTitle;
