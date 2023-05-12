import React, { Component } from "react";
import UserConsumer from "./context";
import User from "./user";

export default class Users extends Component {
  render() {
    return (
      <div>
        <UserConsumer>
          {(value) => {
            const { users } = value;

            return (
              <div>
                {users.map((user) => (
                  <User key={user.id} user={user} />
                ))}
              </div>
            );
          }}
        </UserConsumer>
      </div>
    );
  }
}
