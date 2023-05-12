import React, { Component } from "react";

export const UserContext = React.createContext();

export class UserProvider extends Component {
  state = {
    users: [
      {
        id: 1,
        name: "Ceyhun",
        salary: 3000,
        department: "Designer",
      },
      {
        id: 2,
        name: "Natiq",
        salary: 50000,
        department: "Management",
      },
      {
        id: 3,
        name: "Kanan",
        salary: 10000,
        department: "Development",
      },
      {
        id: 4,
        name: "Elgun",
        salary: 1200,
        department: "Frontend",
      },
    ],
  };

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

const UserConsumer = UserContext.Consumer;

export default UserConsumer;
