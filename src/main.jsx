import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";
import store from "./Global/store.js";
import { Provider } from "react-redux";

let persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider>
      <BrowserRouter>
      <Provider store={store}>

        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>
);
