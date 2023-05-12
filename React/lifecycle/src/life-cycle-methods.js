import React, { Component } from "react";

class LifeCycleMethods extends Component {
  constructor() {
    super();
    this.state = { hakune: 17 };
    console.log("Constructor");
  }

  componentDidUpdate() {
    console.log("Update");
  }

  componentDidMount() {
    console.log("Mount");
    this.setState({ hakuna: 18 });
  }

  shouldComponentUpdate() {
    console.log("Should Update");
    return false;
  }

  render() {
    console.log("render");
    return <div>Hello world</div>;
  }
}

export default LifeCycleMethods;
