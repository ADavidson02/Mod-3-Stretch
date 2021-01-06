import "./App.css";
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import Form from "../Form/Form";
import Archive from "../Archive/Archive";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp"
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext"

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
            path="/home"
            render={() => {
              return <Home />;
            }}
          />
          <Route
            path="/"
            render={() => {
              return (
                <AuthProvider>
                  <Container
                    className="d-flex align-items-center justify-content-center"
                    style={{ minHeight: "100vh" }}
                  >
                    <div 
                      className="w-100" 
                      style={{ maxWidth: "400px" }}
                    >
                      <SignUp />
                    </div>
                  </Container>
                // </AuthProvider>
              )
            }}
          />
        </Switch>
      </main>
    );
  }
}

export default App;
