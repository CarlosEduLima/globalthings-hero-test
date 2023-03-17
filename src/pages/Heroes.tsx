import { useEffect, useState } from "react";
import styles from "./Heroes.module.css";
import { DetailsCard } from "../components/DetailsCard/DetailsCard";
import { Card } from "../components/Card/Card";
import { useHero } from "../contexts/Hero";
import { Spinner } from "phosphor-react";

function Heroes() {
  const { loadHeroes, allHeroes, selectedHero, setSelectedHero, loading } =
    useHero();
  useEffect(() => {
    loadHeroes();
  }, []);

  return (
    <div className={styles.wrapper}>
      <DetailsCard hero={selectedHero} />
      <main>
        {loading ? (
          <div className={styles.loadingContainer}>
            <span>Carregando</span>
            <Spinner size={40} />
          </div>
        ) : (
          <Card data={allHeroes} setHero={setSelectedHero} />
        )}
      </main>
    </div>
  );
}

export default Heroes;
