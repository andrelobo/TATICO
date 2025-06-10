import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Photos from "./pages/Photos";
import Videos from "./pages/Videos";
import Contact from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "quem-sou", element: <About /> },
      { path: "fotos", element: <Photos /> },
      { path: "videos", element: <Videos /> },
      { path: "contato", element: <Contact /> },
    ],
  },
]);