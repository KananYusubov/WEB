import React, { useEffect, useState } from "react";

function App(props) {
  const [timer, setTimer] = useState(50);
  const [salam, setSalam] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  // useEffect(() => {
  //   console.log("useEffect");
  // }, [timer]);

  return (
    <div>
      <button onClick={() => setSalam(salam + 1)}>Salam ver</button>
      <p> Salam: {salam}</p>
      <p> Timer: {timer}</p>
      {/*<button onClick={() => setTimer(timer - 1)}>TImer</button>*/}
    </div>
  );
}

export default App;
