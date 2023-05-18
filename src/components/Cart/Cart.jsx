import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const Cart = ({ cart, deleteProductById, total, alertClearCart, navigate }) => {
  return cart.length !== 0 ? (
    <div>
      {cart.map((product) => {
        return (
          <div key={product.id} style={{ border: "2px solid black" }}>
            <h3>{product.title}</h3>
            <h4>{product.price}</h4>
            <h4>{product.quantity}</h4>
            <Button
              variant="contained"
              size="small"
              color="success"
              onClick={() => deleteProductById(product.id)}
            >
              Eliminar
            </Button>
          </div>
        );
      })}
      <Button
        variant="contained"
        size="small"
        color="success"
        onClick={() => navigate("/checkout")}
      >
        Finalizar Compra
      </Button>

      <Button
        onClick={alertClearCart}
        variant="contained"
        size="small"
        color="success"
      >
        Vaciar Carrito
      </Button>
      <h3>El total del carrito es $ {total}</h3>
    </div>
  ) : (
    <>
      {" "}
      <h3 style={{ textAlign: "center" }}>El carrito está vacío</h3>
      <Link to="/">
        <Button variant="contained" size="small" color="success">
          Agregar Productos
        </Button>
      </Link>
    </>
  );
};
export default Cart;
