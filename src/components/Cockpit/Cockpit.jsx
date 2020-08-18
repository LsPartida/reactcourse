import React from "react";
import './Cockpit.css'
const Cockpit = (props) => {

    const classes = ["red", "bold"];
    if (props.persons.length <= 2) {
      classes.push("red");
      console.log(classes);
    }
    if (props.persons.length <= 1) {
      classes.push("bold");
    }

    return(
        <h1>Hi</h1>
        <p>This works</p>
        <button onClick={this.togglePersonsHandler}>Switch Name</button>
    )
};

export default Cockpit;
