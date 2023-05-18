import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import styles from "./ItemList.module.css";
//import { products } from "../../productsMock";
import { database } from "../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
//import useCounter from "../../utils/hooks/useCounter";
import { useParams } from "react-router-dom";
import { PulseLoader } from "react-spinners";

const ItemListContainer = () => {
  let greeting = "BIENVENIDOS A HAPPY SKIN";
  //const { counter, increase, decrease, reset } = useCounter();
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    let onGoingQuery;
    const itemCollection = collection(database, "products");
    if (categoryName) {
      const itemCollectionFiltered = query(
        itemCollection,
        where("category", "==", categoryName)
      );
      onGoingQuery = itemCollectionFiltered;
    } else {
      onGoingQuery = itemCollection;
    }
    getDocs(onGoingQuery)
      .then((res) => {
        const products = res.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });
        setItems(products);
      })
      .catch((err) => console.log(err));
  }, [categoryName]);

  // useEffect(() => {
  //   const tarea = new Promise((resolve, reject) => {
  //     resolve(products);
  //   });

  //   tarea.then((res) => setItems(res)).catch((error) => console.log(error));
  // }, []);
  // useEffect(() => {
  //   const productsFiltered = products.filter(
  //     (producto) => producto.category === categoryName
  //   );

  //   const tarea = new Promise((resolve, reject) => {
  //     resolve(categoryName ? productsFiltered : products);
  //   });

  //   tarea.then((res) => setItems(res)).catch((error) => console.log(error));
  // }, [categoryName]);
  // if(items.length===0){
  //   return <h2 className={styles.loader}><PulseLoader color="#36d7b7" /></h2>
  // }
  // Esto es un return temprano, porque nunca llega al return de abajo.
  

  // return (
    
  //   <div className={styles.texto}>
  //     { items.length===0 && <h2 className={styles.loader}><PulseLoader color="#36d7b7" /></h2>}
  //     {/* Esto es render con doble ampersen. */}
  //     <ItemList greeting={greeting} items={items} />
  //     {/* <h2>{counter}</h2>
  //     <button onClick={increase}>Add</button>
  //     <button onClick={decrease}>Remove</button>
  //     <button onClick={reset}>Reset</button> */}
  //   </div>
  // );
  return (
    
    <div className={styles.texto}>
      {items.length===0 ? (<h2 className={styles.loader}><PulseLoader color="#36d7b7" /></h2>) : (      <ItemList greeting={greeting} items={items} />
)}
    </div>
  );

  //Este es el render con ternario.
};

export default ItemListContainer;

// La parte previa al return es de lógica (el contenido), en JS, y se llama contenedor.
// La parte del return es jsx. En esta parte, las cosas que vienen de JS van entre llaves. Lo que se recibe como
// parámetro es un objeto que se denomina props. La props se envían desestructuradas.
