import React, { useState } from "react";
import { UserProvider } from "./context";
import Other from "./Other";

function App(props) {
  const [users, setUsers] = useState();
  return (
    <div>
      <UserProvider>
        {/*<SomeComponent />*/}
        {/*<Users />*/}
        <Other />
      </UserProvider>
    </div>
  );
}

export default App;
