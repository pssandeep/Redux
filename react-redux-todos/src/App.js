import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import TodoList from "./TodoList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>My Todo List:</h2>
        <TodoList />
      </div>
    );
  }
}

export default App;
