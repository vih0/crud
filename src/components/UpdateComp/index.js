import axios from "axios";
import { useEffect, useState } from "react";

import { render } from "@testing-library/react";
import Arrow from "../../assets/arrow.svg";
import "./indexUpdate.css";
import { Link } from "react-router-dom";
import Check from "../../assets/check.svg";
import Close from "../../assets/close.svg";
import "../Alert/index.css";

function UpdateComp() {
  const [Name, SetName] = useState("");
  const [Book, SetBook] = useState("");
  const [Category, SetCategory] = useState("");
  const [id, setID] = useState(null);
  const [isOpen, setOpen]= useState(false)
  useEffect(() => {
    setID(localStorage.getItem("id"));
    SetName(localStorage.getItem("Name"));
    SetBook(localStorage.getItem("Book"));
    SetCategory(localStorage.getItem("Category"));
  }, []);
  const updateData = () => {
    axios
      .put(`https://636bda197f47ef51e13c1fe5.mockapi.io/api/v1/books/${id}`, {
        Name,
        Book,
        Category,
      }).then(render(function Alert() {
          <div className="Alert">
          {isOpen ? "true" : "false"}
          <img src={Close} alt="close menu icon" className="Close-icon" onClick={() => setOpen(!isOpen)} />
          <div className="container_wrapp">
            <img src={Check} alt="Icon Check" />
            <h2>Sucesso</h2>
          </div>
        </div>
      }), alert("erro"))
      
  };


  return (
    <div className="Update-wrapper">
   
      
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
        <button className="btn-Add" onClick={updateData }>
          Atualizar!
        </button>
      </div>
  </div>
  );
}
export default UpdateComp;
