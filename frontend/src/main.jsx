import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { InfoProvider } from "./UserContext";
import App from "./App";
import VideoPage from "./pages/VideoPage";
import Connexion from "./pages/connexion/Connexion";
import Inscription from "./pages/inscription/Inscription";
import UploadVideo from "./pages/UploadVideo/UploadVideo";
import UpdateVideo from "./pages/UploadVideo/UpdateVideo";
import User from "./pages/user/User";
import Categories from "./pages/categories/Categories";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/inscription",
    element: <Inscription />,
  },
  {
    path: "/video/:id",
    element: <VideoPage />,
  },
  {
    path: "/connexion",
    element: <Connexion />,
  },
  {
    path: "/upload",
    element: <UploadVideo />,
  },
  {
    path: "/update/:id",
    element: <UpdateVideo />,
  },
  {
    path: "/user",
    element: <User />,
  },
  {
    path: "/categories/:category",
    element: <Categories />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <InfoProvider>
      <RouterProvider router={router} />
    </InfoProvider>
  </React.StrictMode>
);
