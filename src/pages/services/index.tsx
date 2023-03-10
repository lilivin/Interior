import Contact from "../../components/contact";
import Footer from "../../components/footer";
import Navigation from "../../components/navigation";
import PageTitle from "../../components/pageTitle";
import Works from "../../components/works";
import SignleWork from "../../components/works/component/singleWork";
import HowWeWork from "./components/howWeWork";
import styles from "./index.module.scss";

function Services() {
  return (
    <div className={styles.container}>
      <Navigation />
      <PageTitle
        title="Services"
        path="Home / Services"
        image="project-page-title"
      />
      <Works>
        <SignleWork title="Project Plan" href="#">
          There are many variations of the passages of lorem Ipsum from
          available, majority.
        </SignleWork>
        <SignleWork title="Interior Work " href="#">
          There are many variations of the passages of lorem Ipsum from
          available, majority.
        </SignleWork>
        <SignleWork title="Retail Design" href="#">
          There are many variations of the passages of lorem Ipsum from
          available, majority.
        </SignleWork>
        <SignleWork title="2d/3d Art Work" href="#">
          There are many variations of the passages of lorem Ipsum from
          available, majority.
        </SignleWork>
        <SignleWork title="Interior Work " href="#">
          There are many variations of the passages of lorem Ipsum from
          available, majority.
        </SignleWork>
        <SignleWork title="Decoration Work" href="#">
          There are many variations of the passages of lorem Ipsum from
          available, majority.
        </SignleWork>
      </Works>
      <HowWeWork />
      <Contact />
      <Footer />
    </div>
  );
}

export default Services;
