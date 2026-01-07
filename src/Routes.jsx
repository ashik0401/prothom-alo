import { createBrowserRouter } from "react-router"

import Home from "./pages/Home"
import NewsDetails from "./pages/NewsDetails"
import Layout from "./pages/Layout"
import Details from "./pages/main/Details"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/news/:id", element: <NewsDetails /> },
      { path: "/details/:id", element: <Details /> }
    ]
  }
])
