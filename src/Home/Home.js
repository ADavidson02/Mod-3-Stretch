import React, { Component } from 'react';

class Home extends Component {
  constructor() {
    super()
  }

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