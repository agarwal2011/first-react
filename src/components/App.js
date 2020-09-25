import React, { Component } from "react";
import Hello from "./Hello";

export default class App extends Component {
  render() {
    const stud = ["Princy", "Santosh", "Ganesh", "Ruchi", "Shewta"];
    return (
      <div>
        {stud.map((name, key) => (
          <Hello name={name} key={key} />
        ))}
      </div>
    );
  }
}
