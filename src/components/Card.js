import styles from "./card.module.css";

function Card({ num, fact }) {
  return (
    <div>
      <div className={styles["card"]}>
        <div className={styles["content"]}>
          <h2>{num}</h2>
          <p className={styles["para"]}>{fact}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
