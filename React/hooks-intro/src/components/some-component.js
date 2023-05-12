import React, { useState } from "react";
import IncrementButton from "./increment-button";
import DecrementButton from "./decrement-button";

function SomeComponent() {
  const [id, setId] = useState(17);
  return (
    <div>
      <IncrementButton setId={setId} id={id} />
      <p>{id}</p>
      <DecrementButton setId={setId} id={id} />
    </div>
  );
}

export default SomeComponent;
