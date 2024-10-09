import { StrictMode } from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { configureMyStore } from "./reducers/store.js";
import App from "./App.jsx";
import "./index.css";

const store = configureMyStore();

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
