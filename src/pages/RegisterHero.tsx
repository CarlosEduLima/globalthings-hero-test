import { useEffect, useState } from "react";
import styles from "./RegisterHero.module.css";
import { useNavigate } from "react-router-dom";
import { getCategories, ICategoryProps } from "../services/category";
import { createHero } from "../services/hero";
import { Spinner } from "phosphor-react";

function RegisterHero() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [active, setActive] = useState(true);
  const [categories, setCategories] = useState<ICategoryProps[] | undefined>(
    []
  );
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const response = await getCategories();
      setCategories(response);
    })();
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = {
      Name: name,
      CategoryId: parseInt(category),
      Active: active,
    };
    setLoading(true);
    const status = await createHero(formData);
    setLoading(false);
    status === 200 || status === 201
      ? navigate("/herois")
      : setErrorMsg("Não foi possivel criar herói");
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className={styles.container}>
      <label htmlFor="name">Nome</label>
      <br></br>
      <input
        type="text"
        placeholder="Superman"
        id="name"
        name="name"
        maxLength={50}
        required
        onChange={(event) => setName(event.target.value)}
      />
      <label htmlFor="name">Categoria</label>
      <br></br>
      <select onChange={(event) => setCategory(event.target.value)} required>
        <option value="">Selecione a categoria</option>
        {categories?.map((category) => (
          <option value={category?.Id} key={category?.Id}>
            {category?.Name}
          </option>
        ))}
      </select>
      <label htmlFor="active" style={{ alignSelf: "flex-start" }}>
        Ativo
      </label>
      <br></br>
      <input
        type="checkbox"
        id="active"
        name="active"
        checked={active}
        onChange={(e) => setActive(!active)}
      ></input>
      <button type="submit" className={styles.button}>
        {loading ? <Spinner /> : "ADICIONAR"}
      </button>
      <span style={{ marginTop: "1rem" }}>{errorMsg}</span>
    </form>
  );
}

export default RegisterHero;
