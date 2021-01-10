
import React from "react";

const Card = (props) => {

  return (
    <section>
      <article id={props.slip.id} className="text-center mb-4">
        <h3>{props.slip.advice}</h3>
      </article>
      <button>Delete</button>
    </section>
  );
}

export default Card;
