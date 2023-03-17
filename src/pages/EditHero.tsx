import { useEffect, useState } from "react";
import styles from "./EditHero.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import { getCategories, ICategoryProps } from "../services/category";
import { editHero } from "../services/hero";
import { Spinner } from "phosphor-react";

function EditHero() {
  const location = useLocation();
  const [name, setName] = useState(location.state?.name || "");
  const [category, setCategory] = useState(location.state?.category || "");
  const [active, setActive] = useState(location.state?.active);
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

  const handleSubmit = async () => {
    const formData = {
      Id: location.state?.id,
      Name: name,
      CategoryId: parseInt(category),
      Active: active,
    };
    setLoading(true);
    const response = await editHero(formData);
    setLoading(false);
    /* response !== 200
      ? setErrorMsg("Não foi possivel criar herói")
      : navigate(-1); */
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <label htmlFor="name">NOME</label>
      <br></br>
      <input
        type="text"
        value={name}
        placeholder="Superman"
        id="name"
        name="name"
        maxLength={50}
        required
        onChange={(event) => setName(event.target.value)}
      />
      <label htmlFor="name">CATEGORIA</label>
      <br></br>
      <select
        onChange={(event) => setCategory(event.target.value)}
        required
        value={category}
      >
        <option value="">Selecione a categoria</option>
        {categories?.map((category) => (
          <option value={category?.Id}>{category?.Name}</option>
        ))}
      </select>
      <label htmlFor="active" style={{ alignSelf: "flex-start" }}>
        ATIVO
      </label>
      <br></br>
      <input
        value={active}
        type="checkbox"
        id="active"
        name="active"
        checked={active}
        onChange={(e) => setActive(!active)}
      ></input>
      <button type="submit" className={styles.button}>
        {loading ? <Spinner /> : "Editar"}
      </button>
      <span>{errorMsg}</span>
    </form>
  );
}

export default EditHero;
