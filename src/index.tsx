import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./style/reset.css";
import { client } from "./cache";

import { ApolloProvider } from "@apollo/client";

import "@fontsource/arimo/400.css";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
