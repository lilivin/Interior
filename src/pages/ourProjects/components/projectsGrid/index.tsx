import styles from "./index.module.scss";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import SingleProject from "./components/singleProject";
import { useEffect, useState } from "react";
import {
  categories,
  Project,
  ProjectCategories,
  ProjectCategory,
} from "../../../../data/projects";

function ProjectsGrid(props: { initialProjects: Project[] }) {
  const { initialProjects } = props;
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { page: currentPage } = useParams();
  const [currentCategory, setCurrentCategory] = useState(
    searchParams.get("category") !== null
      ? searchParams.get("category")
      : ProjectCategories.Bathroom
  );
  const [projects, setProjects] = useState(initialProjects);
  const projectsPerPage = 4;
  const pagesNumber = Math.round(projects.length / projectsPerPage);
  const current = currentPage ? Number(currentPage) : 0;

  const getPaginatedData = () => {
    const startIndex = current * projectsPerPage - projectsPerPage;
    const endIndex = startIndex + projectsPerPage;
    return projects.slice(startIndex, endIndex);
  };

  const paginationArray = Array.from({ length: pagesNumber }, (x, i) => i + 1);

  function handleCategoryChange(id: string) {
    setCurrentCategory(id);
    navigate(`/our-projects/${1}?category=${currentCategory}`);
  }

  useEffect(() => {
    if (currentCategory !== null) {
      setSearchParams({ category: currentCategory });
    }
    setProjects(
      initialProjects.filter(
        (project: Project) => project.category === currentCategory
      )
    );
  }, [currentCategory]);

  return (
    <div className={styles.container}>
      <ul className={styles.categories}>
        {categories.map((category: ProjectCategory) => (
          <li
            onClick={() => handleCategoryChange(category.id)}
            className={`${category.id === currentCategory && styles.active}`}
          >
            {category.name}
          </li>
        ))}
      </ul>
      <div className={styles.content}>
        {getPaginatedData().map((project: Project) => (
          <SingleProject project={project} />
        ))}
      </div>
      <ul className={styles.pagination}>
        {paginationArray.map((paginationNumber: number) => {
          return (
            <li className={`${paginationNumber === current && styles.current}`}>
              <a
                href={`http://localhost:3000/our-projects/${paginationNumber}?category=${currentCategory}`}
              >
                {paginationNumber}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProjectsGrid;
