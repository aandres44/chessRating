import {
  createBrowserRouter,
} from "react-router-dom"

import Navbar from "@/components/navbar"
import Blitz from "@/features/rankings/pages/Blitz"
import Rapid from "@/features/rankings/pages/Rapid"
import Classic from "@/features/rankings/pages/Classic"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/rating/blitz", // Matches exactly at ://domain.com
        element: <Blitz />,
      },
      {
        path: "/rating/rapido", // Matches exactly at ://domain.com
        element: <Rapid />,
      },
      {
        path: "/rating/clasico", // Matches exactly at ://domain.com
        element: <Classic />,
      },
    ]
  },
])