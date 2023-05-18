import ItemCard from "./ItemCard";
import styles from "./ItemList.module.css";
const ItemList = ({ greeting, items }) => {
  return (
    <div style={{ color: "#473636" }}>
      {greeting}
      <div
        className={styles.cards}
        // style={{
        //   display: "flex",
        //   justifyContent: "space-evenly",
        //   flexWrap: "wrap",
        //   minHeight: "90vh",
        //   padding: "40px",
        // }}
      >
        {items.map((item) => {
          return <ItemCard item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default ItemList;
