import React from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import TodoListItem from "../todo-list-item/todo-list-item";
import "./todo-lis.css";

const TodoList = ({ todos, onDeleted, onToggleDone, onToggleImportant }) => {
  const [animationParent] = useAutoAnimate();
  return (
    <ul className="list-group" ref={animationParent}>
      {todos.map((item) => {
        const { id, ...itemProps } = item;
        return (
          <li key={id} className="list-group-item">
            <TodoListItem
              {...itemProps}
              onDeleted={() => {
                onDeleted(id);
              }}
              onToggleDone={() => {
                onToggleDone(id);
              }}
              onToggleImportant={() => {
                onToggleImportant(id);
              }}
            />
          </li>
        );
      })}
      {!todos.length && (
        <li className="list-group-item text-center text-uppercase font-weight-bold text-monospace no-todo">
          no todo
        </li>
      )}
    </ul>
  );
};

export default TodoList;
