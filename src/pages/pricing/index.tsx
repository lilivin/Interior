import Footer from "../../components/footer";
import PageTitle from "../../components/pageTitle";
import Price from "./components/price";

function Pricing() {
  return (
    <div>
      <PageTitle
        title="Pricing & Plan"
        path="Home / Pricing & Plan"
        image="pricing-page-title"
      />
      <Price />
      <Footer />
    </div>
  );
}

export default Pricing;
