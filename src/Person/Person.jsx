import React from "react";
import "./Person.css";
import Radium from "radium";

const person = (props) => {
  const Rnd = Math.random();
  if (Rnd > 0.7) throw new console.error("Something failed");
  return (
    <div className="Person">
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};
export default person;
