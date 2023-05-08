import React from "react";
import "./app-header.css";

const AppHeader = ({ todo, done }) => {
  return (
    <div className={"app-header d-flex"}>
      <h1 className={"font-weight-bold"}>Todo list</h1>
      <h2>
        <span className={"text-primary text-monospace font-weight-bold"}>
          {todo}
        </span>{" "}
        more to do{" "}
        <span className={"text-success text-monospace font-weight-bold"}>
          {done}
        </span>{" "}
        done
      </h2>
    </div>
  );
};

export default AppHeader;
