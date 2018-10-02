import React, { Component } from "react";
import logo from "./logo.svg";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true
    };
  }

  componentDidMount() {
    axios
      .get("https://swapi.co/api/people/1/")
      .then(res => this.setState({ data: res.data, loading: false }))
      .catch(err => console.log(err));
  }

  render() {
    return this.state.loading ? (
      <div className="App">
        <div className="App-header">
          <div>Please wait</div>
        </div>
      </div>
    ) : (
      <div className="App">
        <div className="App-header">
          <div>{this.state.data.name}</div>
          <div>{this.state.data.eye_color}</div>
        </div>
      </div>
    );
  }
}

export default App;
