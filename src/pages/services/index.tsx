import Contact from "../../components/contact";
import Footer from "../../components/footer";
import PageTitle from "../../components/pageTitle";
import Works from "../../components/works";
import SignleWork from "../../components/works/component/singleWork";
import { getServices } from "../../helpers/services";
import HowWeWork from "./components/howWeWork";
import styles from "./index.module.scss";

function Services() {
  const URL = "http://localhost:3000/services/"
  return (
    <div className={styles.container}>
      <PageTitle
        title="Services"
        path="Home / Services"
        image="project-page-title"
      />
      <Works>
        {getServices().map((service: any) => (
          <SignleWork
            title={service.title}
            href={`${URL}${service.id}`}
          >
            {service.description}
          </SignleWork>
        ))}
      </Works>
      <HowWeWork />
      <Contact />
      <Footer />
    </div>
  );
}

export default Services;
