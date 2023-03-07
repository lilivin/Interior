import { createBrowserRouter, RouterProvider } from "react-router-dom";

import styles from "./app.module.scss";
import AboutUs from "./pages/aboutUs";
import Homepage from "./pages/homepage";
import Services from "./pages/services";

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
]);

function App() {
  return (
    <div className={styles.app}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
