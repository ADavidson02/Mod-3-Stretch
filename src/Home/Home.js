import React, { Component } from 'react';

import Card from "../Card/Card"


class Home extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }
  
  render(){

    return(
      <section className='home'>
        <div>
          <article>
            <Card adviceObj={this.props}/>
            <h2></h2>
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