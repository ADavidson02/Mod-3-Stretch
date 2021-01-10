import React, { Component } from 'react';

import Card from "../Card/Card"
import { getNewRandom } from "../apiCalls/apiCalls"


class Home extends Component {
  constructor() {
    super();
    this.state={ advice: {
      id: null,
      advice: ''
    }
    }
  }

  componentDidMount = async () => {
    const newRandomAdvice = await getNewRandom();
    const newRandom = newRandomAdvice.slip;
    this.setState({ advice: newRandom });
    console.log(this.state.advice)
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

  render() {
    return (
      <section className="home">
        <div>
          <article>
            <Card adviceObj={this.state.advice} />
            <h2></h2>
          </article>
        </div>
        <div>
          <button onClick={() => this.getNewRandom()}>Get New Advice</button>
          {/* fetch request - functioning */}
          <button>Add New Advice</button> 
          {/* this button has to submit the data to the users saved advice */}
        </div>
      </section>
    );
  }
}


export default Home;