
import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super()
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
          />
        </div>
        <div>
          <button>Save Advice</button>
        </div>
      </section>
    )
  }
}

export default Form;
