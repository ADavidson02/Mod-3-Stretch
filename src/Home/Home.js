import React, { Component } from 'react';

class Home extends Component {
  constructor() {
    super()
  }

  // getRandomIndex() {
  //   return Math.floor(Math.random() * 217);
  // }

  render(){
    return(
      <section className='home'>
        <div>
          <article>
            fetchedAdvice
          </article>
        </div>
        <div>
          <button>Get New Advice</button>
          <button>Add New Advice</button>
        </div>
      </section>
    )
  }
}


export default Home;