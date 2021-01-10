
import React, { Component } from 'react';
import { createAdvice } from "../apiCalls/apiCalls";


class Form extends Component {
  constructor() {
    super()
    this.state = {
      advice: "",
      email: "",
      userName: ""
    }

  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitAdvice = () => {
    console.log("hey is this working?", this.state.advice)
    createAdvice(this.state.advice, this.state.email, this.state.userName)
  }

  render() {
    return(
      <section>
        <div>
          <p label="new-thought">New Thought</p>
        </div>
        <div>
          <input
          type="text"
          name="advice"
          placeholder="Add Advice Here"
          value={ this.state.advice }
          onChange={e => this.handleChange(e)}
          />
          <input
          type="text"
          name="userName"
          placeholder="Name"
          value={ this.state.userName }
          onChange={e => this.handleChange(e)}
          />
          <input
          type="text"
          name="email"
          placeholder="Email"
          value={ this.state.email }
          onChange={e => this.handleChange(e)}
          />
        </div>
        <div>
          <button onClick={ this.submitAdvice }>Save Advice</button>
        </div>
      </section>
    )
  }
}

export default Form;
