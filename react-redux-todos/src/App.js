import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import TodoList from "./TodoList";
import { Link, Route, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>My Todo List:</h2>
        <p>
            <Link to="/todos"> See My Todos</Link>
        </p>  
        <p>
            <Link to="/todos/new"> Add a Todo</Link>
        </p>  

        <Route path="/todos" component={TodoList}/>
        <Route exact path="/" render={() => <Redirect to="/todos" />}/>
        
      </div>
    );
  }
}

export default App;
