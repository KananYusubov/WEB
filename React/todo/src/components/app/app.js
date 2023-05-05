import React from "react";
import TodoList from "../todo-list/todo-list";
import AppHeader from "../app-header/app-header";
import AppSearchPanel from "../search-panel/search-panel";

const App = () => {
  let id = 0;
  const TodoData = [
    { text: "Wake up", id: ++id },
    { text: "Have breakfast", id: ++id, important: true },
    { text: "Doing STEP IT homework's", id: ++id },
  ];
  return (
    <div>
      <AppHeader />
      <AppSearchPanel />
      <TodoList todos={TodoData} />
    </div>
  );
};

export default App;
