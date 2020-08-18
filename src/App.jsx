import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 29 },
    ],
    otherState: "Some other value",
  });
  const [otherState, setOtherState] = useState({
    otherState: "Some other value",
  });
  const switchNameHandler = () => {
    // console.log("Click");
    // NO SE HACE ASÍ this.state.persons[0].name = "Maximilian";
    setPersonsState({
      persons: [
        { name: "Maximilian", age: 28 },
        { name: "Manuel", age: 29 },
        { name: "Stephaniea", age: 27 },
      ],
    });
  };

  return (
    <div className="App">
      <h1>Hi</h1>
      <p>This works</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
        click={this.switchNameHandler}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        Hobiies: Drugs
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
};
export default App;
// function App() {
//   return (
//     <div className="App">
//       <h1>Hi</h1>
//     </div>
//   );
// }
