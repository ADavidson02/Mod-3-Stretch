import React from "react";

const Card = (props) => {
  // console.log(props.id, props.advice)
  // console.log(props)
  return (
    <section>
      <article key={props.id} className="text-center mb-4">
        <h3>{props.advice || props.slip.advice}</h3>
        <p>{props.email}</p>
        <p>{props.name}</p>
      </article>
      {props.name && <button onClick={() => props.deleteAdviceCard(props)}>Delete</button>}
    </section>
  );
};

export default Card;
