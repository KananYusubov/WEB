import React, { useState } from "react";
import Users from "./users";
import { UserProvider } from "./context";

function App(props) {
  const [users, setUsers] = useState();
  return (
    <UserProvider>
      {/*<SomeComponent />*/}
      <Users />
    </UserProvider>
  );
}

export default App;
