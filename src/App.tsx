import { createBrowserRouter, RouterProvider } from "react-router-dom";
import styles from "./app.module.scss";
import HeaderLayout from "./components/headerLayout";
import AboutUs from "./pages/aboutUs";
import Article from "./pages/article";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import Homepage from "./pages/homepage";
import OurProjects from "./pages/ourProjects";
import Pricing from "./pages/pricing";
import Project from "./pages/project";
import Services from "./pages/services";
import SingleService from "./pages/singleService";

const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children: [
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
        path: "/blog/:page",
        element: <Blog />,
      },
      {
        path: "/article/:articleId",
        element: <Article />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return (
    <div className={`${styles.app}`}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
