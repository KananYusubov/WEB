import React, { Component } from "react";
import TodoList from "../todo-list/todo-list";
import AppHeader from "../app-header/app-header";
import AppSearchPanel from "../search-panel/search-panel";
import ItemStatusFilter from "../item-status-filter";
import ItemAddForm from "../item-add-form";
import "./app.css";

class App extends Component {
  idSeed = 0;

  state = {
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
      id: ++this.idSeed,
    };
  }

  // findIndex(id){
  //
  // }

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
    return (
      <div className="todo-app">
        <AppHeader todo={1} done={2} />
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
