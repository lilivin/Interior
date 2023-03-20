import styles from "./index.module.scss";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import SingleProject from "./components/singleProject";
import { useEffect, useState } from "react";
import Pagination, {
  getPaginatedData,
} from "../../../../components/pagination";
import { categories, getProjects, Project, ProjectCategories, ProjectCategory } from "../../../../helpers/projects";

function ProjectsGrid() {
  const initialProjects = getProjects();
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
        (project: any) => project.category === currentCategory
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
        {getPaginatedData(current, projectsPerPage, projects).map(
          (project: Project) => (
            <SingleProject project={project} />
          )
        )}
      </div>
      <Pagination
        current={current}
        pagesNumber={pagesNumber}
        page="our-projects"
        currentCategory={currentCategory}
      />
    </div>
  );
}

export default ProjectsGrid;
