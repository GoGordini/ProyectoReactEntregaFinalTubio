import { Button } from "@mui/material";
const Counter = ({ reiniciar, sumar, restar, counter, onAdd }) => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          style={{ margin: 10, maxWidth: 1 }}
          variant="contained"
          size="small"
          color="success"
          onClick={sumar}
        >
          +
        </Button>
        <h3>{counter}</h3>
        <Button
          style={{ margin: 10, maxWidth: 1 }}
          variant="contained"
          size="small"
          color="success"
          onClick={restar}
        >
          -
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontFamily: "Gill Sans MT",
        }}
      >
        <Button
          style={{ margin: 10 }}
          variant="contained"
          size="small"
          color="success"
          onClick={reiniciar}
        >
          Resetear
        </Button>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          style={{ marginTop: 10, fontFamily: "Gill Sans MT" }}
          variant="contained"
          size="small"
          color="success"
          onClick={() => onAdd(counter)}
        >
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
};

export default Counter;
