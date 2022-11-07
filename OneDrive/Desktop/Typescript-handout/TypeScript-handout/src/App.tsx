import React from "react";
import "./App.css";
import Clock from "./components/Clock";
import List1 from "./components/List1";
import List2 from "./components/List2";

import useClock from "./hooks/useClock";

function App() {
  const { hours, minutes, seconds } = useClock();
  return (
    <div className="App">
      {/* Clock */}
      <Clock hours={hours} minutes={minutes} seconds={seconds} />
      {/* List 1  initialValues [1, 2, 3] */}
      <List1 initValues={[1, 2, 3]} />
      {/* List 2  initialValues [4, 5] */}
      <List2 initValue={[4, 5]} />
    </div>
  );
}

export default App;
