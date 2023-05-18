import { useState } from "react";
const useCounter = () => {
  const [counter, setCounter] = useState(0);
  const increase = () => {
    setCounter(counter + 1);
  };
  const decrease = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      setCounter(0);
    }
  };
  const reset = () => {
    setCounter(0);
  };
  return { counter, increase, decrease, reset };
};

export default useCounter;
