import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import CounterContainer from "../Counter/CounterContainer";
import "./ItemDetail.css";

export const ItemDetail = ({ product, onAdd, itemTotalQuantity }) => {
  return (
    <div className="detailView">
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
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link to={`/category/${product.category}`}>
          <Button
            style={{ fontFamily: "Gill Sans MT" }}
            variant="contained"
            size="small"
            color="success"
          >
            VOLVER
          </Button>
        </Link>
      </div>
    </div>
  );
};
