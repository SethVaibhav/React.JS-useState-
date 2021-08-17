import React, { useState } from "react";

function App() {
  setInterval(set, 1000);
  let time1 = new Date().toLocaleTimeString();
  const [time, setTime] = useState(time1);
  function set() {
    let newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={set}>Get Time</button>
    </div>
  );
}

export default App;
