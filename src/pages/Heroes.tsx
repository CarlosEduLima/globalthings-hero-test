import { useState } from "react";
import styles from "./Heroes.module.css";
import { DetailsCard } from "../components/DetailsCard/DetailsCard";
import { Card } from "../components/Card/Card";

function Heroes() {
  return (
      <div className={styles.wrapper}>
        <DetailsCard />
        <main>
          <Card />
        </main>
      </div>
  );
}

export default Heroes;
