import React, { Component } from "react";

class AppSearchPanel extends Component {
  state = {
    term: "",
  };

  onSearchChange = (e) => {
    const term = e.target.value;
    this.setState({ term: term });
    this.props.onSearchChange(term);
  };

  render() {
    const searchStyle = { fontSize: "20px" };
    const searchText = "Type here to search";
    return (
      <input
        className={"form-control"}
        placeholder={searchText}
        style={searchStyle}
        value={this.state.term}
        onChange={this.onSearchChange}
      />
    );
  }
}

export default AppSearchPanel;
