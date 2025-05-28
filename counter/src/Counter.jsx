import { useState } from "react";
export const Counter = () => {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }

  return (
    <>
      <button onClick={() => increment()}>+</button>
      <h4>{count}</h4>
      <button onClick={() => decrement()}>-</button>
    </>
  );
};
