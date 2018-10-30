import React, { Component } from "react";
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
      four: true,
      five: true,
      six: true,
      seven: true,
      eight: true
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
        }, 2000)
      )
      .then(
        setTimeout(() => {
          this.setState({ first: false });
        }, 5000)
      )
      .then(
        setTimeout(() => {
          this.setState({ sec: false });
        }, 8000)
      )
      .then(
        setTimeout(() => {
          this.setState({ third: false });
        }, 10000)
      )
      .then(
        setTimeout(() => {
          this.setState({ four: false });
        }, 13000)
      )
      .then(
        setTimeout(() => {
          this.setState({ five: false });
        }, 16000)
      )
      .then(
        setTimeout(() => {
          this.setState({ six: false });
        }, 18000)
      )
      .then(
        setTimeout(() => {
          this.setState({ seven: false });
        }, 20000)
      )
      .then(
        setTimeout(() => {
          this.setState({ eight: false });
        }, 20000)
      )
      .catch(err => console.log(err));
  }

  render() {
    return this.state.loading ? (
      <div className="App">
        <div className="App-header">
          <div>Please wait</div>
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
    ) : this.state.five ? (
      <div className="App">
        <div className="App-header">
          <div>Why are you still here?</div>
        </div>
      </div>
    ) : this.state.six ? (
      <div className="App">
        <div className="App-header">
          <div>Oh! you need the informaion</div>
        </div>
      </div>
    ) : this.state.seven ? (
      <div className="App">
        <div className="App-header">
          <div>This is conditional rendering and here is the informaion </div>
        </div>
      </div>
    ) : this.state.eight ? (
      <div className="App">
        <div className="App-header">
          <div>but </div>
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
