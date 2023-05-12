import React, { useContext } from "react";
import { UserContext } from "./context";
import User from "./user";

function Other(props) {
  const { users } = useContext(UserContext);
  console.log(users);
  return (
    <div>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
}

export default Other;
