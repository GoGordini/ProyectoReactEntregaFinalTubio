import ItemCard from "./ItemCard";
import styles from "./ItemList.module.css";
const ItemList = ({ greeting, items }) => {
  return (
    <div style={{ color: "#473636" }}>
      {greeting}
      <div className={styles.cards}>
        {items.map((item) => {
          return <ItemCard item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default ItemList;
