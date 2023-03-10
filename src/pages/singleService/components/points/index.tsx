import Header, { HeaderType } from "../../../../components/header";
import List, { ListType } from "../../../../components/list";
import ListItem from "../../../../components/list/components/listItem";
import styles from "./index.module.scss";

function Points() {
  return (
    <div className={styles.container}>
      <div>
        <Header type={HeaderType.Header01}>Use of Interior</Header>
        <List type={ListType.Order}>
          <ListItem>We provide high quality design services.</ListItem>
          <ListItem>Project on time and Latest Design.</ListItem>
          <ListItem>Scientific Skills For getting a better result.</ListItem>
          <ListItem>Renovations Benefit of Service</ListItem>
          <ListItem>We are confident about our projects</ListItem>
        </List>
      </div>
      <div>
        <Header type={HeaderType.Header01}>Make An Art</Header>
        <List type={ListType.Order}>
          <ListItem>We provide high quality design services.</ListItem>
          <ListItem>Project on time and Latest Design.</ListItem>
          <ListItem>Scientific Skills For getting a better result.</ListItem>
          <ListItem>Renovations Benefit of Service</ListItem>
          <ListItem>We are confident about our projects</ListItem>
        </List>
      </div>
    </div>
  );
}

export default Points;
