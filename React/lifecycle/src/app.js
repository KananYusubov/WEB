import React, { useRef, useState } from "react";

function App(props) {
  //#region LifeCycle Methods
  // const [timer, setTimer] = useState(50);
  // const [salam, setSalam] = useState(0);
  //
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTimer(timer - 1);
  //   }, 1000);
  //
  //   return () => clearInterval(interval);
  // }, [timer]);

  // useEffect(() => {
  //   console.log("useEffect");
  // }, [timer]);
  //#endregion  LifeCycle Methods

  const [color, setColor] = useState("black");
  const changeColor = useRef(null);
  const change = () => {
    document.body.style.backgroundColor = changeColor.current.value;
    setColor(changeColor.current.value);
  };

  return (
    <div>
      {/*#region LifeCycle */}
      {/*<button onClick={() => setSalam(salam + 1)}>Salam ver</button>*/}
      {/*<p> Salam: {salam}</p>*/}
      {/*<p> Timer: {timer}</p>*/}
      {/*<button onClick={() => setTimer(timer - 1)}>TImer</button>*/}
      {/*#endregion LifeCycle*/}

      <input type={"text"} ref={changeColor} onChange={change} />
      <p>{color}</p>
    </div>
  );
}

export default App;
