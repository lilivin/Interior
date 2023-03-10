import ListItem from "./components/listItem";
import styles from "./index.module.scss";

export const enum ListType {
  Order = "Order",
  Unorder = "Unorder",
}

function List(props: {
  children: string | JSX.Element | JSX.Element[];
  type: ListType;
}) {
  const { children, type } = props;
  if (type === ListType.Order) {
    return (
      <ol className={`${styles.container} ${styles.order}`}>{children}</ol>
    );
  } else {
    return (
      <ul className={`${styles.container} ${styles.unorder}`}>{children}</ul>
    );
  }
}

export default List;
