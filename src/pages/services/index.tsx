import Contact from "../../components/contact";
import Footer from "../../components/footer";
import PageTitle from "../../components/pageTitle";
import Works from "../../components/works";
import SignleWork from "../../components/works/component/singleWork";
import { getServices, ServiceType } from "../../helpers/services";
import HowWeWork from "./components/howWeWork";

function Services() {
  const URL = `${process.env.REACT_APP_HOSTNAME_URL}/services/`;
  return (
    <>
      <PageTitle
        title="Services"
        path="Home / Services"
        image="project-page-title"
      />
      <Works>
        {getServices().map((service: ServiceType) => (
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
    </>
  );
}

export default Services;
