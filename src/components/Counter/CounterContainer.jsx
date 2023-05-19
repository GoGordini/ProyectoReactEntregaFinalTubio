import { useContext, useEffect, useState } from "react";
import Counter from "./Counter";
import { CartContext } from "../../context/CartContext";

const CounterContainer = ({ stock, onAdd, initial = 1 }) => {
  //si initial es undefined, se le asigna 1. Caso contrario, lo que valga.
  const { navigate } = useContext(CartContext);
  const [counter, setCounter] = useState(initial);
  useEffect(() => {
    setCounter(initial);
  }, [initial]);
  const sumar = () => {
    counter < stock && setCounter(counter + 1);
  };

  const restar = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const reiniciar = () => {
    setCounter(initial);
  };

  return (
    <div>
      <Counter
        counter={counter}
        sumar={sumar}
        restar={restar}
        reiniciar={reiniciar}
        onAdd={onAdd}
        navigate={navigate}
      />
    </div>
  );
};

export default CounterContainer;
