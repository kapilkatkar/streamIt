import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./components/header/Header";
import ErrorPage from "./components/error-page";
import Tranding from "./components/pages/Tranding";
import Home from "./components/homes/Home";
import Series from "./components/pages/Series";
import Movies from "./components/pages/Movies";
import Contact from "./components/pages/Contacts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/homePage",
    element: <Home />,
  },
  {
    path: "/series",
    element: <Series />,
  },
  {
    path: "/movies",
    element: <Movies />,
  },
  {
    path: "/tranding",
    element: <Tranding />,
  },
  {
    path: "/contacts",
    element: <Contact />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
