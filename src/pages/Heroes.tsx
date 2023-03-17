import { useEffect, useState } from "react";
import styles from "./Heroes.module.css";
import { Sidebar } from "../components/SideBar";
import { Card } from "../components/Card";
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
      <Sidebar hero={selectedHero} />
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
