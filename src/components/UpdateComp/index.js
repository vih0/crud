import axios from "axios";
import { useEffect, useState } from "react";
import Arrow from "../../assets/arrow.svg";
import "./indexUpdate.css";
import { Link, useParams } from "react-router-dom";
import Alert from "../Alert";

function UpdateComp() {
  const [Name, SetName] = useState("");
  const [Book, SetBook] = useState("");
  const [Category, SetCategory] = useState("");

  const [isOpen, setOpen] = useState(false);
  const { bookId } = useParams();
  console.log(Name, Book, Category);

  useEffect(() => {
    SetName(localStorage.getItem("Name"));
    SetBook(localStorage.getItem("Book"));
    SetCategory(localStorage.getItem("Category"));
  }, []);
  const updateData = () => {
    axios
      .put(
        `https://636bda197f47ef51e13c1fe5.mockapi.io/api/v1/books/${bookId}`,
        {
          Name,
          Book,
          Category,
        }
      )
      .then(() => setOpen(true))
      .catch(() => alert("erro"));
  };

  return (
    <div className="Update-wrapper">
      {isOpen && (
        <Alert text="Atualizado com sucesso" setOpen={() => setOpen(false)} />
      )}
      <Link to={"/"}>
        <button className="btn-Return">
          <img src={Arrow} alt="Arrow Return"></img>
        </button>
      </Link>
      <div className="container-wrapp">
        <h1 className="title">Lista de Livros</h1>
        <input
          type="text"
          name="name"
          placeholder="Autor"
          className="input"
          value={Name}
          onChange={(e) => SetName(e.target.value)}
        ></input>
        <input
          type="text"
          name="book"
          placeholder="Nome do Livro"
          className="input"
          value={Book}
          onChange={(e) => SetBook(e.target.value)}
        ></input>
        <input
          type="text"
          name="category"
          placeholder="Categoria"
          className="input"
          value={Category}
          onChange={(e) => SetCategory(e.target.value)}
        ></input>
        <button className="btn-Add" onClick={updateData}>
          Atualizar!
        </button>
      </div>
    </div>
  );
}
export default UpdateComp;
