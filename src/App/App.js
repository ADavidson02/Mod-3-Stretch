import "./App.css";
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import Form from "../Form/Form";
import Archive from "../Archive/Archive";
import Login from "../Login/Login";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <main className="App">
        <nav> 
          <h1>Advice</h1>
          <button> </button>
        </nav>
        <Switch>
          <Route
            path="/archive"
            render={() => {
              return <Archive />;
            }}
          />
          <Route
            path="/add-new-advice"
            render={() => {
              return <Form />;
            }}
          />
          <Route
            path="/"
            render={() => {
              return <Home />;
            }}
          />
        </Switch>
      </main>
    );
  }
}

export default App;
