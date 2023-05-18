import { useContext } from "react";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { getTotalQuantity, cart } = useContext(CartContext);
  let totalQuantity = getTotalQuantity();
  const cartColorStyle = {
    color: cart.length === 0 && "gray",
  };
  return (
    <Link to="/cart">
      <div>
        <BsCart4 size={20} style={cartColorStyle} />
        <span style={{ fontSize: "15px" }}>
          {cart.length !== 0 && totalQuantity}
        </span>
      </div>
    </Link>
  );
};

export default CartWidget;
