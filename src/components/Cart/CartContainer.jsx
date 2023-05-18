import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Cart from "./Cart";
import Swal from "sweetalert2";


const CartContainer = () => {
 const{cart,clearCart,deleteProductById,purchaseTotal,navigate} =useContext(CartContext)
 let total = purchaseTotal() 
 
 const alertClearCart=() =>{
  Swal.fire({
    title: '¿Confirma que quiere vaciar el carrito?',
    text: "",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: '¡Sí, lo quiero vaciar!',
    cancelButtonText: '¡Mejor no!'
  }).then((result) => {
    if (result.isConfirmed) {
      clearCart();
      Swal.fire(
        '¡Hecho!',
        'Se vació el carrito',
        'success'
      )
    }
  })
 }
 return (
    <div>
      <Cart cart={cart} alertClearCart={alertClearCart} navigate={navigate} deleteProductById={deleteProductById} total={total}/>
    </div>
  );
};

export default CartContainer;
