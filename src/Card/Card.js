
import React from "react";

const Card = (props) => {
  console.log(props)

  return (
    <section>
      <article id={props.adviceObj.advice.id} className="text-center mb-4">
        <h3>{props.adviceObj.advice.advice}</h3>
      </article>
      <button>Delete</button>
    </section>
  );
}

export default Card;
