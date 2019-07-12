import React, { Component } from "react";
import "./App.css";
import Users from "./components/Users/Users";
import Parent from "./components/ParentToChild/Parent";

class App extends Component {
  state = {
    title: "First Title"
  };

  changeTitle = (newTitle) => {
    this.setState({
      title: newTitle
    });
  };

  render() {
    return (
      <div className="App">
        <div>
          <Users />
        </div>
        <div>
          <Parent
            buttonClickEvent1={this.changeTitle.bind(this, "Second Title")}
            buttonClickEvent2={this.changeTitle.bind(this, "Third Title")}
            title={this.state.title}
          />
        </div>
      </div>
    );
  }
}

export default App;
