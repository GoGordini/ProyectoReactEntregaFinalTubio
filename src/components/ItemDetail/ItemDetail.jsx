import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import CounterContainer from "../Counter/CounterContainer";
import styles from "./ItemDetail.module.css";

export const ItemDetail = ({ product, onAdd, itemTotalQuantity }) => {
  return (
    <div
      className={styles.detailView}
      // style={{
      //   display: "flex",
      //   flexDirection: "column",
      //   alignItems: "center",
      //   justifyContent: "center",
      // }}
    >
      <h2>{product.title}</h2>
      <h3>{product.description}</h3>
      <img src={product.img} alt="foto producto" style={{ height: "200px" }} />
      <h3>${product.price}</h3>
      {product.stock > 0 && <h4>{product.stock} unidades disponibles</h4>}
      <div>
        <div>
          {product.stock > 0 ? (
            <CounterContainer
              stock={product.stock}
              onAdd={onAdd}
              initial={itemTotalQuantity}
            />
          ) : (
            <h3>Producto sin stock</h3>
          )}
        </div>

        {/* <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={increase}>+</button>
          {counter}
          <button onClick={decrease}>-</button>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={reset}>Reset</button>
        </div> */}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link to={`/category/${product.category}`}>
          <Button variant="contained" size="small" color="success">
            VOLVER
          </Button>
        </Link>
      </div>
    </div>
  );
};
//export default ItemDetail;
