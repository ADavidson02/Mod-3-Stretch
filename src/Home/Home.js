
import "./Home.css";
import React, { Component } from 'react';
import Card from "../Card/Card"
import { getRandomAdvice, createAdvice } from "../apiCalls/apiCalls";
import { Link } from 'react-router-dom'

class Home extends Component {
  constructor() {
    super();
    this.state={ 
      advice: {
        id: "",
        advice: ""
      }
    }
  }

  componentDidMount = async () => {
    const newRandomAdvice = await getRandomAdvice();
    this.setState({ advice: newRandomAdvice });
  };

  getNewRandom = async () => {
    const newRandomAdvice = await getRandomAdvice();
    this.setState({advice: newRandomAdvice})
  }

  addAdvice = () => {
    createAdvice(this.state.advice.advice, '', 'anonymous');
  }

  render() {
    return (
      <section className="home">
        <div>
          <article>
            <Card slip={ this.state.advice } />
          </article>
        </div>
        <div className="button-container">
          <button onClick={ this.getNewRandom }>Get New Advice</button>
          <div className="spacer"></div>
          <Link to="/archive">
            <button onClick={ this.addAdvice }>Save Advice</button> 
          </Link>
          <div className="spacer"></div>
          <Link to="/archive">
            <button>Advice Board</button>
          </Link>
        </div>
      </section>
    );
  }
}


export default Home;