import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Cart from "./Cart";
import Swal from "sweetalert2";

const CartContainer = () => {
  const { cart, clearCart, deleteProductById, purchaseTotal, navigate } =
    useContext(CartContext);
  let total = purchaseTotal();

  const alertClearCart = () => {
    Swal.fire({
      title: "¿Confirma que quiere vaciar el carrito?",
      icon: "warning",
      background: "#F7F7F7",
      showCancelButton: true,
      color: "gray",
      confirmButtonColor: "gray",
      cancelButtonColor: "orange",
      confirmButtonText: "¡Sí, lo quiero vaciar!",
      cancelButtonText: "¡Mejor no!",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire({
          title: "¡Se vació el carrito!",
          confirmButtonColor: "gray",
          background: "#F7F7F7",
        });
      }
    });
  };
  return (
    <div>
      <Cart
        cart={cart}
        alertClearCart={alertClearCart}
        navigate={navigate}
        deleteProductById={deleteProductById}
        total={total}
      />
    </div>
  );
};

export default CartContainer;
