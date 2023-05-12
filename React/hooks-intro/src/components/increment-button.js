import React from "react";

function IncrementButton({ setId, id }) {
  return (
    <div>
      <button onClick={() => setId(id + 1)}>+</button>
    </div>
  );
}

export default IncrementButton;
