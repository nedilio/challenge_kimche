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
        Country Filter and Group{" "}
        <span role="img" aria-label="Rocket">
          🚀
        </span>
      </h2>
      <Countries />
    </div>
  </ApolloProvider>
);

export default App;
