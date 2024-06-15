import styles from "./counter.module.css";
function Counter({ count, setCount, getFacts }) {
  const rightClick = () => {
    setCount(count + 1);
  };
  const leftClick = () => {
    setCount(count - 1);
  };
  return (
    <div className={styles["counter-container"]}>
      <div className={styles["number-control"]}>
        <div
          onClick={() => {
            if (count > 1) {
              leftClick();
            }
          }}
          className={styles["number-left"]}
        ></div>
        <input
          type="number"
          name="number"
          min={1}
          value={count}
          readOnly
          className={styles["number-quantity"]}
        />
        <div
          onClick={() => {
            rightClick();
          }}
          className={styles["number-right"]}
        ></div>
      </div>
      <button
        onClick={() => {
          getFacts();
        }}
        className={styles["delete-button"]}
      >
        meow...
      </button>
    </div>
  );
}

export default Counter;
