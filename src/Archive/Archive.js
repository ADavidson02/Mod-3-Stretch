
import React, { Component } from "react";
import Card from '../Card/Card';

class Archive extends Component{
  constructor() {
    super()
  }

  render(){
    return(
      <section>
        <div>
          <header>My Saved Advice</header>
          <button>Add New Advice</button>
          <button>Go Home</button>
        </div>
        <div>
          <Card />
          AdviceCards
        </div>
      </section>
    )
  }
}

export default Archive;