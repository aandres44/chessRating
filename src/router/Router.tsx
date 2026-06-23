import {
  createBrowserRouter,
} from "react-router-dom"

import Ranking from "../features/rankings/pages/Ranking"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Ranking />,
  },
])