import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

const getAuth = () => {
  const token = localStorage.getItem("phoneNumber-user-token");
  return token ? `Bearer ${token}` : null;
};

const client = new ApolloClient({
  connectToDevTools: true,
  link: new HttpLink({
    headers: {
      authorization: getAuth(),
    },
    uri: "http://localhost:4000/",
  }),
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
