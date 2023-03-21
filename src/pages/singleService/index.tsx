import Clients from "../../components/clients";
import ContentWithImage from "../../components/contentWithImage";
import Counter from "../../components/counter";
import Footer from "../../components/footer";
import ImageDivider from "../../components/imageDivider";
import PageTitle from "../../components/pageTitle";
import Details from "./components/details";
import Points from "./components/points";

function SingleService() {
  return (
    <>
      <PageTitle
        title="Service Single"
        path="Home / Services Single"
        image="single-service-page-title"
      />
      <Details />
      <Clients />
      <ImageDivider image="single-service-divider-image" height={300} />
      <Points />
      <ContentWithImage
        reverse={true}
        title="We love design.That's how we got here."
        buttonText="Our Portfolio"
        buttonHref="#"
        image="single-service-image-1"
      >
        It is a long established fact that a reader will be distracted by the of
        readable content .
      </ContentWithImage>
      <Counter />
      <Footer />
    </>
  );
}

export default SingleService;
