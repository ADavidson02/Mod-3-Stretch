
import React, { Component } from 'react';
import { createAdvice } from "../apiCalls/apiCalls";
import { Link } from "react-router-dom";



class Form extends Component {
  constructor() {
    super()
    this.state = {
      advice: "",
      email: "",
      userName: "",
      error: false
    }

  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitAdvice = () => {
    if(!this.state.advice || !this.state.email || !this.state.userName ) {
      return this.setState({error: true})
    } else {
      // createAdvice(this.state.advice, this.state.email, this.state.userName)
      return this.setState({advice: "", email: "", userName: "", error: false })
    }
  }
    

  render() {
    return (
      <section>
        <div>
          <p label="new-thought">New Thought</p>
        </div>
        <div>
          <input
            type="text"
            name="advice"
            placeholder="Add Advice Here"
            value={this.state.advice}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type="text"
            name="userName"
            placeholder="Name"
            value={this.state.userName}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={(e) => this.handleChange(e)}
          />
        </div>
        <div>
          <Link to="/archive">
            <button onClick={this.submitAdvice}>Save Advice</button>
            {this.state.error === true && <h2>Please fill out all fields</h2>}
          </Link>
        </div>
      </section>
    );
  }
}

export default Form;
