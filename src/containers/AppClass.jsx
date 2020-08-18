import React, { Component } from "react";
import "./App.css";
import PersonsList from "../components/Persons/PersonsList";
import Radium from "radium";
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
          <PersonsList
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
          />
        </div>
      );
    }
    

    return (
      <div className={classes.join(" ")}>
        
        {persons}
      </div>
    );
  }
}
export default Radium(AppClass);
