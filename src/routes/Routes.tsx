import BoardGamesPage from "@root/pages/BoardGamesPage";
import CalendarPage from "@root/pages/CalendarPage";
import HomePage from "@root/pages/HomePage";
import MenuPage from "@root/pages/MenuPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function Routes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/menu",
      element: <MenuPage />,
    },
    {
      path: "/calendar",
      element: <CalendarPage />,
    },
    {
      path: "/board-games",
      element: <BoardGamesPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Routes;
