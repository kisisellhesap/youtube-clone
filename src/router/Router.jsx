import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Base from "../components/Main/Base";
import Detail from "../components/Detail";
import Results from "../components/Results";
const Router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Base />,
        },
        {
          path: ":category",
          element: <Base />,
        },
        {
          path: "watch",
          element: <Detail />,
        },
        {
          path: ":category/watch",
          element: <Detail />,
        },
        {
          path: "results",
          element: <Results />,
        },
      ],
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

export default Router;
