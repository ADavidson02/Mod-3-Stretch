import "./Form.css";
import React, { Component } from 'react';
import { createAdvice } from "../apiCalls/apiCalls";

class Form extends Component {
  constructor() {
    super()
    this.state = {
      advice: "",
      email: "",
      userName: "",
      id: "",
      error: false
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  clearInputs = () => {
    return this.setState({advice: "", email: "", userName: "", id: "", error: false })

  }
  submitAdvice = () => {
    if(this.state.advice === "" || this.state.email === "" || this.state.userName === "" ) {
      return this.setState({error: true})
    } else {
      this.props.history.push("./archive")
      createAdvice(this.state.advice, this.state.email, this.state.userName, Date.now())
      this.clearInputs()
    }
  }
    
  render() {
    return (
      <section>
        <div>
          <p className="new-thought">New Thought</p>
        </div>
        <form>
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
        </form>
        <div className="form-button-container">
          <button onClick={this.submitAdvice}>Save Advice</button>
          {this.state.error === true && <h2 className="error">Please fill out all fields</h2>}
        </div>
      </section>
    );
  }
}

export default Form;
