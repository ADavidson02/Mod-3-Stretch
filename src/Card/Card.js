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
    </section>
  );
};

export default Card;
