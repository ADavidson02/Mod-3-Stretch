import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from 'react-router-dom'
import Home from "../Home/Home";
import Form from "../Form/Form";
import Archive from "../Archive/Archive";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp"
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext"
import Logout from "../Logout/Logout"
import PrivateRoute from "../PrivateRoute/PrivateRoute";


class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh", flexDirection: "column" }}
      >
        <div>
          <nav>
            <h1>Advice</h1>
            <Link to="/logout">
              <button>Log Out</button>
            </Link>
          </nav> 
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <Router>
              <AuthProvider>
                <Switch>
                  <PrivateRoute exact path="/archive" component={Archive} />
                  <PrivateRoute exact path="/add-new-advice" component={Form} />
                  <Route path="/signup" component={SignUp} />
                  <Route path="/login" component={Login} />
                  <Route path="/logout" component={Logout} />
                  <Route exact path="/" component={Home} />
                </Switch>
              </AuthProvider>
            </Router>
          </div>
        </div>
      </Container>
    )

    // return (
    //   <main className="App">
    //     <nav> 
    //       <h1>Advice</h1>
    //       <button> </button>
    //     </nav>
    //     <Switch>
    //       <Route
    //         path="/archive"
    //         render={() => {
    //           return <Archive />;
    //         }}
    //       />
    //       <Route
    //         path="/add-new-advice"
    //         render={() => {
    //           return <Form />;
    //         }}
    //       />
    //       <Route
    //         path="/signup"
    //         render={() => {
    //           return (
    //             <AuthProvider>
    //               <Container
    //                 className="d-flex align-items-center justify-content-center"
    //                 style={{ minHeight: "100vh" }}
    //               >
    //                 <div 
    //                   className="w-100" 
    //                   style={{ maxWidth: "400px" }}
    //                 >
    //                   <SignUp />
    //                 </div>
    //               </Container>
    //             </AuthProvider>
    //           )
    //         }}
    //       />
    //       <Route
    //         path="/"
    //         render={() => {
    //           return <Home />;
    //         }}
    //       />
    //     </Switch>
    //   </main>
    // );
  }
}

export default App;
