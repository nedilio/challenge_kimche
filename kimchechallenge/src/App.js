import React from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import Countries from "./Data";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com",
});

    
const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>
        My first Apollo app{" "}
        <span role="img" aria-label="Rocket">
          🚀
        </span>
      </h2>
    </div>
    <Countries />
  </ApolloProvider>
);

export default App;
