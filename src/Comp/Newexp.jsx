import React, { useState } from "react";

export function NewExp() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [tutorial, settutorial] = useState("below");
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <h1> Click {tutorial} to view new modules </h1>
      <button onClick={() => settutorial(tutorial + 1)}> clicktab</button>
    </div>
  );
}
