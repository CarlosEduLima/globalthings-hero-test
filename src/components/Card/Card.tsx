import styles from "./Card.module.css";

export function Card({data, setHero}: any) {
 
  return data ? (
    <>
      {data.map((item: any) => (
        <article className={styles.card} key={item?.Id}>
          <div className={styles.hero}>
            <div className={styles.heroInfo}>
              <strong>{item.Name}</strong>
              <span>{item?.Category?.Name}</span>
            </div>
          </div>
          <div className={styles.buttonContainer} onClick={() => setHero(item)}>
            <span className={styles.buttonText}>Detalhes</span>
          </div>
        </article>
      ))}
    </>
  ) : (
    <span>Nenhum herói encontrado</span>
  );
}
