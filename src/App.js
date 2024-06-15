import { useEffect, useState } from "react";
import axios from "axios";

import styles from "./app.module.css";
import Card from "./components/Card";
import Counter from "./components/Counter";

function App() {
  const [count, setCount] = useState(1);
  const [fact, setFact] = useState([]);
  const getFacts = async () => {
    try {
      const response = await axios.get(
        `https://meowfacts.herokuapp.com/?count=${count}`
      );
      // console.log(response);
      setFact(response.data.data);
      console.log(fact);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFacts();
  }, []);

  return (
    <div className={styles["app"]}>
      <Counter count={count} setCount={setCount} getFacts={getFacts} />

      <div className={styles["card-wrapper"]}>
        {fact.map((fact, index) => {
          return <Card key={index} num={index + 1} fact={fact} />;
        })}
      </div>
    </div>
  );
}

export default App;
