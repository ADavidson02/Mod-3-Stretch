import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import Form from "../Form/Form";
import Archive from "../Archive/Archive";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp"
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext"
import { getNewRandom } from "../apiCalls/apiCalls";



class App extends Component {
  constructor() {
    super();
    this.state = {

      advice: { id: null, advice: "" },
    };
  }

  componentDidMount = async () => {
    const newRandomAdvice = await getNewRandom();
    const newRandom = newRandomAdvice.slip;
    this.setState({ advice: newRandom });
    console.log(this.state.advice)
  };

  getNewRandom = async () => {
    const newRandomAdvice = await getNewRandom();
    const newRandom = newRandomAdvice.slip;
    this.setState({ advice: newRandom });
  }

  render() {

    return (
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh", flexDirection: "column" }}
      >
        <nav style={{ flexDirection: "row" }}>
          <h1>Advice</h1>
          <button> Log out </button>
        </nav>
        <div>
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <Router>
              <AuthProvider>
                <Switch>
                  <Route path="/archive" component={Archive} />
                  <Route path="/add-new-advice" component={Form} />
                  <Route path="/signup" component={SignUp} />
                  <Route path="/login" component={Login} />
                  <Route exact path="/" component={Home} />
                </Switch>
              </AuthProvider>
            </Router>
          </div>
        </div>
      </Container>
    );

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
