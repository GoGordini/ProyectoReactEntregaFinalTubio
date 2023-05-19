import { useContext, useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { products } from "../../productsMock";
import { collection, getDoc, doc, addDoc } from "firebase/firestore";
import { database } from "../../firebaseConfig";
import { CartContext } from "../../context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ItemDetail.css";
//import useCounter from "../../utils/hooks/useCounter";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  //const { counter, increase, decrease, reset } = useCounter();
  const { id } = useParams();
  //  const addNotify = () => toast("Producto agregado al carrito!");
  const { addToCart, getQuantityById } = useContext(CartContext);
  useEffect(() => {
    const itemCollection = collection(database, "products");
    const refDoc = doc(itemCollection, id);
    getDoc(refDoc)
      .then((res) => setProduct({ ...res.data(), id: res.id }))
      .catch((error) => console.log(error));
    // let productoBuscado = products.find(
    //   (producto) => producto.id === Number(id)
    // );
    // setProduct(productoBuscado);
  }, [id]);

  // const onAdd = (unidades) => {
  //   console.log(unidades);
  // };
  const onAdd = (cantidad) => {
    let data = {
      ...product,
      quantity: cantidad,
    };

    addToCart(data);
    toast.success("¡PRODUCTO AGREGADO AL CARRITO!", {
      className: "Toastify__toast-theme--colored.Toastify__toast--success",
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  const addToFirebase = () => {
    const itemCollection = collection(database, "products");
    products.map((product) => addDoc(itemCollection, product));
  };
  let itemTotalQuantity = getQuantityById(product.id);
  return (
    <div>
      <ItemDetail
        product={product}
        onAdd={onAdd}
        itemTotalQuantity={itemTotalQuantity}
        // counter={counter}
        // increase={increase}
        // decrease={decrease}
        // reset={reset}
      />
      {/* <button onClick={addToFirebase}> Agregar a Firebase</button> */}
      <ToastContainer />
    </div>
  );
};
//export default ItemDetailContainer;
