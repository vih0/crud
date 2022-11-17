import React from "react";
import { useState } from "react";
import "./index.css";
import axios from "axios";
import Alert from "../Alert"
import ListComp from "../ListComp";

function FormComp() {
  const [Name, SetName] = useState("");
  const [Book, SetBook] = useState("");
  const [Category, SetCategory] = useState("");
  const [isOpen, setOpen] = useState(false)

  
  const PostData = () => {
    axios
    .post(`https://636bda197f47ef51e13c1fe5.mockapi.io/api/v1/books`, {
      Name,
      Book,
      Category,
    }).then(() => setOpen(true))
    .catch(()=>console.log('erro'))
      
  };

  
  return (
    <div className="App">
      {isOpen  && <Alert text ="Cadastrado com Sucesso" setOpen = {()=> setOpen(false)} />}
      <div className="container-wrapp">
        <h1 className="title">Lista de Livros</h1>
        <input
          type="text"
          name="name"
          placeholder="Autor"
          className="input"
          onChange={(e) => SetName(e.target.value)}
        ></input>
        <input
          type="text"
          name="book"
          placeholder="Nome do Livro"
          className="input"
          onChange={(e) => SetBook(e.target.value)}
        ></input>
        <input
          type="text"
          name="category"
          placeholder="Categoria"
          className="input"
          onChange={(e) => SetCategory(e.target.value)}
        ></input>
        <button className="btn-Add" onClick={PostData}>
          Adicionar!
        </button>
      </div>
      

    </div>
  );
}

export default FormComp;
