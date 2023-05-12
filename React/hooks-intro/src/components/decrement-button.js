import React from "react";

function DecrementButton({ setId, id }) {
  return (
    <div>
      <button onClick={() => setId(id - 1)}>-</button>
    </div>
  );
}

export default DecrementButton;
