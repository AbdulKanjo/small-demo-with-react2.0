import React, { Component } from "react";
import logo from "./logo.svg";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
      first: true,
      sec: true,
      third: true,
      four: true
    };
  }

  componentDidMount() {
    this.mainFunc();
  }

  async mainFunc() {
    await axios
      .get("https://swapi.co/api/people/1/")
      .then(res => this.setState({ data: res.data }))
      .then(
        setTimeout(() => {
          this.setState({ loading: false });
        }, 3000)
      )
      .then(
        setTimeout(() => {
          this.setState({ first: false });
        }, 6000)
      )
      .then(
        setTimeout(() => {
          this.setState({ sec: false });
        }, 9000)
      )
      .then(
        setTimeout(() => {
          this.setState({ third: false });
        }, 12000)
      )
      .then(
        setTimeout(() => {
          this.setState({ four: false });
        }, 15000)
      )
      .catch(err => console.log(err));
  }

  render() {
    return this.state.loading ? (
      <div className="App">
        <div className="App-header">
          <div>Please Wait</div>
        </div>
      </div>
    ) : this.state.first ? (
      <div className="App">
        <div className="App-header">
          <div>Keep waiting...</div>
        </div>
      </div>
    ) : this.state.sec ? (
      <div className="App">
        <div className="App-header">
          <div>Keep waiting more...</div>
        </div>
      </div>
    ) : this.state.third ? (
      <div className="App">
        <div className="App-header">
          <div>Almost there!</div>
        </div>
      </div>
    ) : this.state.four ? (
      <div className="App">
        <div className="App-header">
          <div>Hahahaha this is funny</div>
        </div>
      </div>
    ) : (
      <div className="App">
        <div className="App-header">
          <div>Name: {this.state.data.name}</div>
          <div>Eye color: {this.state.data.eye_color}</div>
        </div>
      </div>
    );
  }
}

export default App;
