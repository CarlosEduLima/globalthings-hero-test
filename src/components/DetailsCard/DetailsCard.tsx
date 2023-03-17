import styles from "./DetailsCard.module.css";
import { PencilLine, TrashSimple, Plus, Spinner } from "phosphor-react";
import { Link } from "react-router-dom";
import { useHero } from "../../contexts/Hero";

export function DetailsCard({ hero }: any) {
  const { removeHero, loading } = useHero();
  return (
    <aside className={styles.sidebar}>
      <div className={styles.profile}>
        {hero ? (
          <>
            <strong>{hero?.Name}</strong>
            <span>{hero?.Active ? "Ativo" : "Não ativo"}</span>
            <div className={styles.buttonContainer}>
              <Link
                to={"/editar"}
                state={{
                  id: hero?.Id,
                  name: hero?.Name,
                  active: hero?.Active,
                  category: hero?.Category?.Id,
                }}
                style={{ textDecoration: "none" }}
              >
                <span className={styles.buttonText}>
                  <PencilLine />
                  Editar
                </span>
              </Link>
            </div>
            <div
              className={styles.buttonContainer}
              onClick={() => removeHero(hero?.Id)}
            >
              {loading ? (
                <Spinner />
              ) : (
                <span className={styles.buttonText}>
                  <TrashSimple />
                  Excluir
                </span>
              )}
            </div>
          </>
        ) : (
          <span>Nenhum herói selecionado</span>
        )}
      </div>
      <div className={styles.buttonContainer}>
        <Link to={"/cadastro"} style={{ textDecoration: "none" }}>
          <span className={styles.buttonText}>
            <Plus />
            Cadastrar herói
          </span>
        </Link>
      </div>
    </aside>
  );
}
