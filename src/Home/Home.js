import React, { Component } from 'react';

import Card from "../Card/Card"
import { getNewRandom, createAdvice } from "../apiCalls/apiCalls"
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
    const newRandomAdvice = await getNewRandom();
    const newRandom = newRandomAdvice.slip;
    this.setState({ advice: newRandom });
    // console.log(this.state.advice)
  };



  getNewRandom = async () => {
    const newRandomAdvice = await getNewRandom();
    let newRandom = newRandomAdvice.slip; 
    if( this.state.advice.id !== newRandom.id) {
      this.setState({ advice: newRandom });
    } else {
      const newRandomAdvice = await getNewRandom();
      newRandom = newRandomAdvice.slip;
      return <h2>Oh no same crappy advice</h2>
    }
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
            <h2></h2>
          </article>
        </div>
        <div>
          <button onClick={ () => this.getNewRandom() }>Get New Advice</button>
          {/* fetch request - functioning */}
          <Link to="/archive">
            <button onClick={ this.addAdvice }>Add New Advice</button> 
          </Link>
          {/* this button has to submit the data to the users saved advice */}
        </div>
      </section>
    );
  }
}


export default Home;