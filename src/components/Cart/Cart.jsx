import styles from "./Cart.module.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const Cart = ({ cart, deleteProductById, total, alertClearCart, navigate }) => {
  return cart.length !== 0 ? (
    <div className={styles.cartcontainer}>
      <div className={styles.itemscontainer}>
        {cart.map((product) => {
          return (
            <div key={product.id} className={styles.item}>
              <h3 style={{ width: 250 }}>{product.title}</h3>
              <img
                src={product.img}
                className={styles.foto}
                alt="foto producto"
              />
              <h4>${product.price}</h4>
              <h4>{product.quantity}</h4>
              <Button
                style={{ marginTop: 10, fontFamily: "Gill Sans MT" }}
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
      </div>
      <div className={styles.checkingout}>
        <h3>El total del carrito es $ {total}</h3>
        <Button
          style={{ fontFamily: "Gill Sans MT", marginLeft: 100 }}
          variant="contained"
          size="small"
          color="success"
          onClick={() => navigate("/checkout")}
        >
          Finalizar Compra
        </Button>

        <Button
          style={{ fontFamily: "Gill Sans MT" }}
          onClick={alertClearCart}
          variant="contained"
          size="small"
          color="success"
        >
          Vaciar Carrito
        </Button>
      </div>
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
