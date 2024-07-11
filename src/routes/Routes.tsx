import Layout from "@root/layouts/layout/Layout";
import BoardGamesPage from "@root/pages/BoardGamesPage";
import CalendarPage from "@root/pages/CalendarPage";
import HomePage from "@root/pages/HomePage";
import MenuPage from "@root/pages/MenuPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function Routes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <HomePage />
        </Layout>
      ),
    },
    {
      path: "/menu",
      element: (
        <Layout>
          <MenuPage />
        </Layout>
      ),
    },
    {
      path: "/calendar",
      element: (
        <Layout>
          <CalendarPage />
        </Layout>
      ),
    },
    {
      path: "/board-games",
      element: (
        <Layout>
          <BoardGamesPage />
        </Layout>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Routes;
