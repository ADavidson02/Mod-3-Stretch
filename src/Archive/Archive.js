
import React, { Component } from "react";
import Card from "../Card/Card";
import { getAdviceSlips } from "../apiCalls/apiCalls"

class Archive extends Component {
  constructor() {
    super();
    this.state = {
      adviceSlips: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    console.log("this", this);
    getAdviceSlips()
      .then((response) => {
        this.setState({ adviceSlips: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }


  render() {
    
    return (
      <section>
        <div>
          <header>My Saved Advice</header>
          <button>Add New Advice</button>
          <button>Go Home</button>
        </div>
        <div>
          {this.state.adviceSlips &&
            this.state.adviceSlips.map((slip) => {
              if (slip.advice) {
                return (
                  <Card
                    key={slip.id}
                    advice={slip.advice}
                    email={slip.email}
                    name={slip.name}
                  />
                );
              }
            })}
        </div>
      </section>
    );
  }
}

export default Archive;