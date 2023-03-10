import Footer from "../../components/footer";
import Header, { HeaderType } from "../../components/header";
import Navigation from "../../components/navigation";
import PageTitle from "../../components/pageTitle";
import Slider from "./components/slider";
import styles from "./index.module.scss";

function Project() {
  return (
    <div className={styles.container}>
      <Navigation />
      <PageTitle
        title="Single Project"
        path="Home / Project"
        image="project-page-title"
      />
      <div className={styles.content}>
        <ul className={styles.details}>
          <li>
            <p className={styles.property}>Client</p>
            <p className={styles.value}>Your client name</p>
          </li>
          <li>
            <p className={styles.property}>Category</p>
            <p className={styles.value}>Interiors</p>
          </li>
          <li>
            <p className={styles.property}>Tags</p>
            <p className={styles.value}>Interior, Home</p>
          </li>
          <li>
            <p className={styles.property}>Date</p>
            <p className={styles.value}>Date 23,02, 2022</p>
          </li>
          <li>
            <p className={styles.property}>Link</p>
            <p className={styles.value}>Link example.com</p>
          </li>
        </ul>
        <div className={styles.text}>
          <Header type={HeaderType.Header01}>Minimal Look Bedrooms</Header>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem
            vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa,
            vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent
            at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in
            the ipsum vel lectus bibendum commodo.
          </p>
          <p>
            In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet
            tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque
            arcu. Donec a pellentesque Cras erat enim, gravida non ante
            vitae,elequis convallis elit, in viverra felis. Donec ultrices
            tellus vitae iaculisvd porta. Proin tincidunt ligula id purus
            porttitor.
          </p>
        </div>
      </div>
      <Slider />
      <Footer />
    </div>
  );
}

export default Project;
