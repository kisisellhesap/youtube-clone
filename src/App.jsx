import { RouterProvider } from "react-router-dom";
import Router from "./router/Router";

const App = () => {
  return (
    <RouterProvider
      router={Router}
      future={{
        v7_startTransition: true,
      }}
    />
  );
};

export default App;
