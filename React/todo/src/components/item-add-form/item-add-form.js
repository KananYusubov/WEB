import React, { Component } from "react";
import "./item-add-form.css";

class ItemAddForm extends Component {
  state = {
    text: "",
  };

  render() {
    const { onAdded } = this.props;

    return (
      <form
        className={" form-inline mt-2"}
        onSubmit={(i) => {
          i.preventDefault();
          onAdded(document.getElementById("addInput").value);
          document.getElementById("addInput").value = "";
        }}
      >
        <input
          id={"addInput"}
          className={"form-control"}
          placeholder={"Type here..."}
          type="text"
        />

        <button className="btn btn-outline-primary ml-2" type="submit">
          Add item
        </button>

        {/*<button*/}
        {/*  type="button"*/}
        {/*  className="btn btn-outline-primary mt-2"*/}
        {/*  onClick={() => {*/}
        {/*    onAdded();*/}
        {/*  }}*/}
        {/*>*/}
        {/*  Add item*/}
        {/*</button>*/}
      </form>
    );
  }
}

export default ItemAddForm;
