/*
 * @Author: Nate
 * @Date:   2019-01-28 14:49:39
 * @Last Modified by:   Nate
 * @Last Modified time: 2019-01-28 17:34:00
 */
import React, { useState, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    document.title = `you have clicked ${count} times`;
  });

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  const toggleLight = () => {
    setIsOn(prevIsOn => !prevIsOn);
  };

  return (
    <React.Fragment>
      <h2>Counter</h2>
      <button onClick={incrementCount}>i was clicked {count} times</button>;
      <h2>Toggle Light</h2>
      <img
        src={
          isOn
            ? "https://icon.now.sh/highlight/fd0"
            : "https://icon.now.sh/highlight/aaa"
        }
        style={{
          height: "50px",
          width: "50px"
        }}
        alt="Flashlight"
        onClick={toggleLight}
      />
    </React.Fragment>
  );
};

export default App;
