import React from "react";
import "./todo-list-item.css";

const TodoListItem = (
  text,
  onDeleted,
  onToggleImportant,
  onToggleDone,
  done,
  important
) => {
  let classNames = "todo-list-item";
  let btnClassNames = "btn btn-outline-success btn-sm float-right";

  if (done) {
    classNames += " done";
  }

  if (important) {
    classNames += " important";
    btnClassNames += " bg-green";
  }

  return (
    <span className={classNames}>
      <span className="todo-list-item-label " onClick={onToggleDone}>
        {text}
      </span>

      <button
        className={btnClassNames}
        onClick={onToggleImportant}
        type={"button"}
      >
        <i className={"fa fa-exclamation"} />
      </button>

      <button
        className={"btn btn-outline-danger btn-sm float-right"}
        onClick={onDeleted}
        type={"button"}
      >
        <i className={"fa fa-trash-o"} />
      </button>
    </span>
  );
};

export default TodoListItem;
