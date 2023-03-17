import { useState } from "react";
import styles from "./App.module.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <Link to={"herois"} style={{ textDecoration: 'none' }}>
          <span className={styles.buttonText}>Cadastrar herói</span>
        </Link>
      </div>
    </div>
  );
}

export default App;
