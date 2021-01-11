import React from "react";

const Card = (props) => {

  return (
    <section>
      <article className="text-center mb-4">
        <h3>{props.advice}</h3>
        <p>{props.email}</p>
        <p>{props.name}</p>
      </article>
      <button>Delete</button>
    </section>
  );
};

export default Card;
