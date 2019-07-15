import React, { Component, PureComponent } from "react";
import "./App.css";
import Users from "./components/Users/Users";
import Parent from "./components/ParentToChild/Parent";
import User from "./components/Users/User";
import UniqueID from "react-html-id";

const Temp = props => {
  console.log("render Temp");
  return <div>{props.val}</div>;
};

class App extends PureComponent {
  constructor() {
    super();
    UniqueID.enableUniqueIds(this);
    this.state = {
      title: "First Title",
      users: [
        {
          id: this.nextUniqueId(),
          name: "ABCD1",
          age: 10
        },
        {
          id: this.nextUniqueId(),
          name: "ABCD2",
          age: 20
        },
        {
          id: this.nextUniqueId(),
          name: "ABCD3",
          age: 30
        },
        {
          id: this.nextUniqueId(),
          name: "ABCD4",
          age: 40
        }
      ],
      val: 1
    };
  }

  changeTitle = newTitle => {
    this.setState({
      title: newTitle
    });
  };

  deleteUser = (index, e) => {
    console.log(this.nextUniqueId());
    //const users = [...this.state.users];
    const users = Object.assign([], this.state.users);
    users.splice(index, 1);
    this.setState({ users: users });
  };

  changeUserName = (id, event) => {
    if (event.target.value.length === 0) {
      return;
    }
    const index = this.state.users.findIndex(user => {
      return user.id === id;
    });

    const user = Object.assign({}, this.state.users[index]);
    user.name = event.target.value;

    const users = Object.assign([], this.state.users);
    users[index] = user;

    this.setState({ users: users });
  };

  componentDidMount() {
    setInterval(() => {
      this.setState(() => {
        return { val: 1 };
      });
    }, 2000);
  }

  render() {
    return (
      <div className="App">
        <div>{/* <Users /> */}</div>
        <div>
          <Parent
            buttonClickEvent1={this.changeTitle.bind(this, "Second Title")}
            buttonClickEvent2={this.changeTitle.bind(this, "Third Title")}
            title={this.state.title}
          />
        </div>
        <div>
          <ul>
            {this.state.users.map((user, index) => {
              return (
                <div>
                  <User
                    delEvent={this.deleteUser.bind(this, index)}
                    age={user.age}
                    changeEvent={this.changeUserName.bind(this, user.id)}
                    key={user.id}
                  >
                    {user.name}
                  </User>
                </div>
              );
              {
                /*key is to avoid the warning*/
              }
            })}
          </ul>
        </div>
        <div>
          <Temp val={this.state.val} />
        </div>
      </div>
    );
  }
}

export default App;
