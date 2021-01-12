import "./Card.css";
import React from "react";

const Card = (props) => {

  return (
    <section className="advice-card">
      <article key={props.id} className="text-center mb-4">
        <h2>{props.advice || props.slip.advice}</h2>
        <p>{props.email}</p>
        <p>{props.name}</p>
      </article>
      {/* {props.name && <button className="delete-button" onClick={() => props.deleteAdviceCard(props)}>Delete</button>} */}
    </section>
  );
};

export default Card;
