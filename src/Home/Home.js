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
    const newRandom = newRandomAdvice.slip; 
    if( this.state.advice.id !== newRandom.id) {
      this.setState({ advice: newRandom });
    } else {
      const newRandomAdvice = await getNewRandom();
      const newClickRandom = newRandomAdvice.slip;
      this.setState({ advice: newClickRandom });
    }
  }

  render() {
    return (
      <section className="home">
        <div>
          <article>
            <Card slip={this.state.advice} />
            <h2></h2>
          </article>
        </div>
        <div>
          <button onClick={() => this.getNewRandom()}>Get New Advice</button>
          <button>Add New Advice</button>
        </div>
      </section>
    );
  }
}


export default Home;