import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.toLleft}>@2023 HAPPY SKIN</div>
      <div className={styles.toRight}>
        Made by Gordini with <span className={styles.heart}>&#10084;</span>
      </div>
    </div>
  );
};

export default Footer;
