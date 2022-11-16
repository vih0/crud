import { useState } from "react";

function UpdateComp() {
    const [Name, setName] = useState("")
    const [Book, setBook] = useState("")
    const [Category, setCategory] = useState("")
    return (
        <div className="container-wrapp">
        <h1 className="title">Lista de Livros</h1>
        <input
          type="text"
          name="name"
          placeholder="Autor"
          className="input"
        //   onChange={(e) => SetName(e.target.value)}
        ></input>
        <input
          type="text"
          name="book"
          placeholder="Nome do Livro"
          className="input"
        //   onChange={(e) => SetBook(e.target.value)}
        ></input>
        <input
          type="text"
          name="category"
          placeholder="Categoria"
          className="input"
        //   onChange={(e) => SetCategory(e.target.value)}
        ></input>
         <button className="btn-Add">
          Atualizar!
        </button>
      </div>
    );
}
export default UpdateComp;