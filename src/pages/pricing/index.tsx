import Footer from "../../components/footer";
import PageTitle from "../../components/pageTitle";
import Price from "./components/price";
import styles from "./index.module.scss";

function Pricing() {
  return (
    <div className={styles.container}>
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
