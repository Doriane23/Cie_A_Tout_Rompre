import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import ErrorPage from "./pages/Page404/ErrorPage";
import Home from "./pages/Home/Home";
import Comedians from "./pages/Comedians/Comedians";
import Plays from "./pages/Plays/Plays";
import Profil from "./pages/Profil/Profil";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/comediens",
        element: <Comedians />,
      },
      {
        path: "/pieces",
        element: <Plays />,
      },
      {
        path: "/profil",
        element: <Profil />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
