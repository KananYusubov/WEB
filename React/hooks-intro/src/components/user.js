import React, { Component } from "react";

export default class User extends Component {
  state = {
    isVisible: false,
  };

  onClickEvent = (e) => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };

  render() {
    const { name, salary, department } = this.props.user;
    return (
      <div className={"col-md-8 mx-auto mb-4"}>
        <div className={"card"}>
          <div className={"card-header d-flex justify-content-between "}>
            <h3
              className={"d-inline user-select-none"}
              onClick={this.onClickEvent}
            >
              {name}
            </h3>
          </div>
          {this.state.isVisible ? (
            <ul className={"list-group list-group-flush"}>
              <li className={"list-group-item"}>Salary: {salary}</li>
              <li className={"list-group-item"}>Department: {department}</li>
            </ul>
          ) : null}
        </div>
      </div>
    );
  }
}
