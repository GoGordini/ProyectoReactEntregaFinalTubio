import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import styles from "./ItemList.module.css";
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

  return (
    <div className={styles.texto}>
      {items.length === 0 ? (
        <h2 className={styles.loader}>
          <PulseLoader color="#36d7b7" />
        </h2>
      ) : (
        <ItemList greeting={greeting} items={items} />
      )}
    </div>
  );
};

export default ItemListContainer;
