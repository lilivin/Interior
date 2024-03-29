import Clients from "../../components/clients";
import Contact from "../../components/contact";
import Counter from "../../components/counter";
import Footer from "../../components/footer";
import Works from "../../components/works";
import SignleWork from "../../components/works/component/singleWork";
import AboutUs from "./components/aboutUs";
import ArticlesHomepage from "./components/articlesHomepage";
import Banner from "./components/banner";
import Projects from "./components/projects";
import Testimonials from "./components/testimonials";

function Homepage() {
  return (
    <>
      <Banner />
      <Works>
        <SignleWork title="Project Plan" href="#">
          There are many variations of the passages of lorem Ipsum from
          available, majority.
        </SignleWork>
        <SignleWork title="Interior Work " href="#">
          There are many variations of the passages of lorem Ipsum from
          available, majority.
        </SignleWork>
        <SignleWork title="Realization" href="#">
          There are many variations of the passages of lorem Ipsum from
          available, majority.
        </SignleWork>
      </Works>
      <AboutUs />
      <Testimonials />
      <Clients />
      <Projects />
      <Counter />
      <ArticlesHomepage />
      <Contact />
      <Footer />
    </>
  );
}

export default Homepage;
