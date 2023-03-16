import styles from "./Card.module.css";
import { getHeroes } from "../../services/hero";
import { useEffect, useState } from "react";
export function Card(data: any) {
  const [hero, setHero] = useState<any>([]);

  const get = async () => {
    const data = await getHeroes();
    console.log('fjdlkfjlk', data)
    setHero(data);
  };

  useEffect(() => {
    get();
  }, []);

  return !hero ? <span>fail</span> : (
    <>
      {/* {data?.map((hero: any) => ( */}
        <article className={styles.card}>
          <div className={styles.hero}>
            <div className={styles.heroInfo}>
              <strong>hero.Name</strong>
              <span>name</span>
            </div>
          </div>
          <button>Detalhes</button>
        </article>
     {/*  ))} */}
    </>
  );
}
