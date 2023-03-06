import Articles from "../../components/articles";
import Contact from "../../components/contact";
import Counter from "../../components/counter";
import Footer from "../../components/footer";
import Navigation from "../../components/navigation";
import AboutUs from "./components/aboutUs";
import Banner from "./components/banner";
import Projects from "./components/projects";
import Testimonials from "./components/testimonials";
import styles from "./index.module.scss";

function Homepage() {
  return (
    <div className={styles.navigation}>
      <Navigation />
      <Banner />
      <AboutUs />
      <Testimonials />
      <Projects />
      <Counter />
      <Articles />
      <Contact />
      <Footer />
    </div>
  );
}

export default Homepage;
