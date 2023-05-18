import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const CartContext = createContext();
const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  const addToCart = (product) => {
    if (isInCart(product.id)) {
      let newCart = cart.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: product.quantity };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, product]);
    }
  };

  const purchaseTotal = () => {
    let total = cart.reduce((accum, item) => {
      return accum + item.price * item.quantity;
    }, 0);
    return total;
  };

  const getTotalQuantity = () => {
    let totalQuantity = cart.reduce((accum, item) => {
      return accum + item.quantity;
    }, 0);

    return totalQuantity;
  };

  const clearCart = () => {
    setCart([]);
  };

  const deleteProductById = (id) => {
    const productosFiltrados = cart.filter((products) => products.id !== id);
    setCart(productosFiltrados);
  };

  const navigate = useNavigate();

  const isInCart = (id) => {
    let exists = cart.some((product) => product.id === id);
    return exists;
  };

  const getQuantityById = (id) => {
    let item = cart.find((product) => product.id === id);
    return item?.quantity;
  };
  let info = {
    cart,
    navigate,
    addToCart,
    clearCart,
    deleteProductById,
    purchaseTotal,
    getTotalQuantity,
    getQuantityById,
  };
  return <CartContext.Provider value={info}> {children} </CartContext.Provider>;
};

export default CartContextProvider;
