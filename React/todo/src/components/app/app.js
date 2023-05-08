import React, { Component } from "react";
import { nanoid } from "nanoid";
import TodoList from "../todo-list/todo-list";
import AppHeader from "../app-header/app-header";
import AppSearchPanel from "../search-panel/search-panel";
import ItemStatusFilter from "../item-status-filter";
import ItemAddForm from "../item-add-form";
import "./app.css";

class App extends Component {
  state = {
    todo: 3,
    done: 0,
    todoData: [
      this.createTodoItem("Wake up"),
      this.createTodoItem("Have breakfast"),
      this.createTodoItem("Doing STEP IT homework's"),
    ],
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const targetId = todoData.findIndex((el) => el.id === id);

      const newArray = [
        ...todoData.slice(0, targetId),
        ...todoData.slice(targetId + 1),
      ];

      return {
        todoData: newArray,
      };
    });
  };

  createTodoItem(text) {
    return {
      text,
      important: false,
      done: false,
      id: nanoid(),
    };
  }

  addItem = (text) => {
    this.setState(({ todoData }) => {
      const newArray = [...todoData, this.createTodoItem(text)];

      return {
        todoData: newArray,
      };
    });
  };

  toggleProperty(arr, id, propName) {
    const targetId = arr.findIndex((el) => el.id === id);
    const oldItem = arr[targetId];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };
    return [...arr.slice(0, targetId), newItem, ...arr.slice(targetId + 1)];
  }

  calcStat = () => {
    const { todoData } = this.state;
    const done = todoData.filter((todo) => todo.done).length;
    const todo = todoData.length - done;
    return {
      done,
      todo,
    };
  };

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "important"),
      };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "done"),
      };
    });
  };

  render() {
    const { todo, done } = this.calcStat();

    return (
      <div className="todo-app">
        <AppHeader todo={todo} done={done} />
        <div className="top-panel d-flex">
          <AppSearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList
          todos={this.state.todoData}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <ItemAddForm onAdded={this.addItem} />
      </div>
    );
  }
}

export default App;
