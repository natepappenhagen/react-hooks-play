/*
 * @Author: Nate
 * @Date:   2019-01-28 14:49:39
 * @Last Modified by:   Nate
 * @Last Modified time: 2019-01-28 15:00:41
 */
import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return <button onClick={incrementCount}>i was clicked {count} times</button>;
};

export default App;
