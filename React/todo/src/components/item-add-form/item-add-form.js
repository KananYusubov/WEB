import React, { Component } from "react";
import "./item-add-form.css";

class ItemAddForm extends Component {
  state = {
    text: "",
  };

  changeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  resetInput = () => {
    this.setState({
      text: "",
    });
  };

  onSubmit = (i) => {
    i.preventDefault();
    if (this.state.text.length <= 0) return;
    this.props.onAdded(this.state.text);
    this.resetInput();
  };

  render() {
    return (
      <form className={"d-flex mt-2"} onSubmit={this.onSubmit}>
        <input
          name={"text"}
          className={"form-control "}
          placeholder={"Type here..."}
          type="text"
          value={this.state.text}
          onChange={this.changeInput}
        />

        <button className="btn  btn-outline-primary ml-2" type="submit">
          Add item
        </button>
      </form>
    );
  }
}

export default ItemAddForm;
