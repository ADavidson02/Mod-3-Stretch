
import React, { Component } from "react";
import Card from "../Card/Card";
import { getAdviceSlips, deleteAdvice } from "../apiCalls/apiCalls"
import { Link } from "react-router-dom"

class Archive extends Component {
  constructor() {
    super();
    this.state = {
      adviceSlips: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    getAdviceSlips()
      .then((response) => {
        this.setState({ adviceSlips: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }


  deleteAdviceCard = (card) => {
    const cardId = card.id;
    // console.log(cardId)
    // console.log(this.state.adviceSlips[0].id)

    deleteAdvice(cardId)
    const remainingCards = this.state.adviceSlips.filter(slip => slip.id !== cardId)
    this.setState({ adviceSlips: remainingCards })
    // console.log(this.state.adviceSlips)
    
  }


  render() {
    // const key = Date.now()
    return (
      <section>
        <div>
          <header>My Saved Advice</header>
          <Link to="/add-new-advice">
            <button>Add New Advice</button>
          </Link>
          <Link to="/">
            <button>Get Random Advice</button>
          </Link>
        </div>
        <div>
          {this.state.adviceSlips &&
            this.state.adviceSlips.map((slip) => {
              if (slip.advice) {
                return (
                  <Card
                    id={slip.id}
                    key={slip.id}
                    advice={slip.advice}
                    email={slip.email}
                    name={slip.name}
                    deleteAdviceCard={this.deleteAdviceCard}
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