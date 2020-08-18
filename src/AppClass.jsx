import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import Radium from "radium";
import ErrorBoundary from "./ErrorBaundary/ErrorBoundary";
class AppClass extends Component {
  state = {
    persons: [
      { id: 1, name: "Max", age: 28 },
      { id: 2, name: "Manu", age: 29 },
      { id: 3, name: "Stephanie", age: 29 },
    ],
    showPersons: false,
  };
  togglePersonsHandler = () => {
    let doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };
  deletePersonHandler = (personIndex) => {
    console.log(personIndex);
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex],
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  };
  render() {
    const style = {
      backgroundColor: "green",
    };
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <ErrorBoundary key={person.id}>
                <Person
                  click={() => this.deletePersonHandler(index)}
                  changed={(event) => this.nameChangeHandler(event, person.id)}
                  name={person.name}
                  age={person.age}
                />
              </ErrorBoundary>
            );
          })}
        </div>
      );
    }
    const classes = ["red", "bold"];
    if (this.state.persons.length <= 2) {
      classes.push("red");
      console.log(classes);
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      <div className={classes.join(" ")}>
        <h1>Hi</h1>
        <p>This works</p>
        <button onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}
      </div>
    );
  }
}
export default Radium(AppClass);
