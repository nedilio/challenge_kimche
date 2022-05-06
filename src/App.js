import React from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import Data from "./Data";
import './App.css';

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com",
});

    
const App = () => (
  <ApolloProvider client={client}>
    <div className="container">
      <div className="header">
        <h1>
          Country Filter and Group
        </h1>
        <h2>By: Nelson Izquierdo</h2>
        <p>Desarrollado en React, consiste en buscar países y mostrarlos agrupados por continente o Idioma</p>
      </div>
      <Data />
    </div>
  </ApolloProvider>
);

export default App;
