import Button, {
  ButtonSize,
  ButtonStyles,
} from "../../../../../../components/button";
import Header, { HeaderType } from "../../../../../../components/header";
import List, { ListType } from "../../../../../../components/list";
import ListItem from "../../../../../../components/list/components/listItem";
import styles from "./index.module.scss";

function SinglePrice(props: { main?: boolean }) {
  const { main } = props;
  return (
    <div className={`${styles.container} ${main && styles.main}`}>
      <Header type={HeaderType.Header03}>Design advices</Header>
      <div className={styles.price}>
        <span className={styles.dolar}>$</span>
        <span className={styles.number}>59</span>
        <span className={styles.period}>/month</span>
        {main && <div className={styles.plan}>Most Popular Plans</div>}
      </div>
      <List type={ListType.Unorder}>
        <ListItem>General living space advices</ListItem>
        <ListItem>Rennovation advices</ListItem>
        <ListItem>Interior design advices</ListItem>
        <ListItem>Furniture reorganization</ListItem>
        <ListItem>Up to 5 hours meetings</ListItem>
      </List>
      <Button
        href="#"
        style={main ? ButtonStyles.Primary : ButtonStyles.Secendary}
        size={ButtonSize.Default}
      >
        Get Started
      </Button>
    </div>
  );
}

export default SinglePrice;
