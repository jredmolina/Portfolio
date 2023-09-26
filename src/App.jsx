import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./index.css";
import "./App.css";
import Navbar from "./components/NavBar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Works from "./pages/Works";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/Contact/",
          element: <Contact />,
        },
        {
          path: "/Works",
          element: <Works />,
        },
      ],
    },
  ]);
  return (
    <div className="div">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
