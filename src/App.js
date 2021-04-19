import React, { Component } from "react";
import Homepage from "./views/Homepage";
import NavBar from "./views/NavBar";
import "./App.css";
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Homepage />
      </div>
    );
  }
}
