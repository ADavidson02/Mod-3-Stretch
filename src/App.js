import "./App.css";
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <main className="App">
        <Switch>
          <Route
            path="/"
            render={() => {
              return "Home";
            }}
          />
        </Switch>
      </main>
    );
  }
}

export default App;
