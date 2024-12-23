import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { GeneralProvider } from "./context/GeneralContext.jsx";
createRoot(document.getElementById("root")).render(
  <GeneralProvider>
    <App />
  </GeneralProvider>
);
