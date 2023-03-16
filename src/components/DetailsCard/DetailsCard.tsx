import styles from "./DetailsCard.module.css";
import { PencilLine, TrashSimple, Plus } from "phosphor-react";
import { Link } from "react-router-dom";

export function DetailsCard() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.profile}>
        <strong>Carlos</strong>
        <span>Web developer</span>
        <div className={styles.buttonContainer}>
          <Link to={"heroes"} style={{ textDecoration: "none" }}>
            <span className={styles.buttonText}>
              <PencilLine />
              Editar
            </span>
          </Link>
        </div>
        <div className={styles.buttonContainer}>
          <span className={styles.buttonText}>
            <TrashSimple />
            Excluir
          </span>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <span className={styles.buttonText}>
          <Plus />
          Cadastrar herói
        </span>
      </div>
    </aside>
  );
}
