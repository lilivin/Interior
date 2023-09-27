import styles from "./index.module.scss";
import { Link } from "react-router-dom";

export const getPaginatedData = (
  current: number,
  itemsPerPage: number,
  items: any
) => {
  const startIndex = current * itemsPerPage - itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return items.slice(startIndex, endIndex);
};

function Pagination(props: {
  current: number;
  pagesNumber: number;
  page: string;
  currentCategory?: string | null;
}) {
  const { current, pagesNumber, page, currentCategory } = props;
  const paginationArray = Array.from({ length: pagesNumber }, (x, i) => i + 1);
  return (
    <ul className={styles.pagination}>
      {paginationArray.map((paginationNumber: number) => {
        return (
          <li className={`${paginationNumber === current && styles.current}`}>
            <Link
              to={`${process.env.REACT_APP_HOSTNAME_URL}/${page}/${paginationNumber}${
                currentCategory ? `?category=${currentCategory}` : ""
              }`}
            >
              {paginationNumber}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Pagination;
