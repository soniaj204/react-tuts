import React, { Component, PureComponent } from "react";
import "./App.css";
import { connect } from "react-redux";


const mapStateToProps = state => {
  return {
    age: state.age
  };
};


const mapDispachToProps = dispach => {
  return {
    onAgeUp: () => dispach({ type: "AGE_UP" }),
    onAgeDown: () => dispach({ type: "AGE_DOWN" })
  };
};


class App extends Component {
  // state = {
  //   age: 21
  // }

  // onAgeUp = () => {
  //   this.setState({
  //     ...this.state,
  //     age:++this.state.age
  //   })
  // };

  // onAgeDown = () => {
  //   this.setState({
  //     ...this.state,
  //     age:--this.state.age
  //   })
  // }

  render() {
    return (
      <div className="App">
        <div>
          <h4>
            Age: <span>{this.props.age}</span>
            <button onClick={this.props.onAgeUp}>Age Up</button>
            <button onClick={this.props.onAgeDown}>Age Down</button>
          </h4>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispachToProps)(App);
