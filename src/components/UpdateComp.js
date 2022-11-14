import { useEffect, useState } from "react";
import React from "react";


function UpdateComp() {
    const [Book, setBook] = useState('')
    const [Author, setAuthor] = useState('')
    const [Category, setCategory] = useState('')
    const [id, setID] = useState(null)
    useEffect(() => {
        setID(localStorage.getItem('ID'));
        setBook(localStorage.getItem('Book'));
        setAuthor(localStorage.getItem('Author'))
        setCategory(localStorage.getItem('Category'))
    })
    return (
        <div className="App">
            <div className="container-wrapp">
                <h1 className="title">Lista de Livros</h1>
                <input
                    type="text"
                    name="name"
                    placeholder="Autor"
                    className="input"
                    onChange={(e) => setAuthor(e.target.value)}
                    value = {Author}
                ></input>
                <input
                    type="text"
                    name="book"
                    placeholder="Nome do Livro"
                    className="input"
                    onChange={(e) => setBook(e.target.value)}
                    value={Book}
                ></input>
                <input
                    type="text"
                    name="category"
                    placeholder="Categoria"
                    className="input"
                    onChange={(e) => setCategory(e.target.value)}
                    value={Category}
                ></input>
                <button className="btn-Add">
                    Atualizar!
                </button>
            </div></div>
    );
}
export default UpdateComp;