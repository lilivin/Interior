import { createBrowserRouter, RouterProvider } from "react-router-dom";
import styles from "./app.module.scss";
import AboutUs from "./pages/aboutUs";
import Blog from "./pages/blog";
import Homepage from "./pages/homepage";
import OurProjects from "./pages/ourProjects";
import Pricing from "./pages/pricing";
import Project from "./pages/project";
import Services from "./pages/services";
import SingleService from "./pages/singleService";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/services/:serviceId",
    element: <SingleService />,
  },
  {
    path: "/pricing",
    element: <Pricing />,
  },
  {
    path: "/our-projects/:page",
    element: <OurProjects />,
  },
  {
    path: "/project/:projectId",
    element: <Project />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
]);

function App() {
  return (
    <div className={styles.app}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
