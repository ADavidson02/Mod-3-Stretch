
import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super()
  }

  render(){
    return(
      <section>
          <input 
          type="text"
          name="username"
          placeholder="username"
          />
          <input
          type="text"
          name="password"
          placeholder="password"
          />
        <button>Login</button>
      </section>
    )
  }
}

export default Login;
