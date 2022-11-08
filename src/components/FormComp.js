import React from "react";
import { useState } from "react";

function FormComp() {
    const [values, SetValues] = useState();
    
    const handleChangeValues = (value) => {
        SetValues((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }))
    }
    const AddValues = () => {
        console.log(values)
    }
    return (
        <div className="App">
            <div className="container-wrapp">
                <h1 className="title">Lista de Livros</h1>
                <input
                    type="text"
                    name="name"
                    placeholder="Autor"
                    className="input"
                    onChange={handleChangeValues}></input>
                <input
                    type="text"
                    name="book"
                    placeholder="Nome do Livro"
                    className="input"
                    onChange={handleChangeValues}>

                </input>
                <input
                    type="text"
                    name="category"
                    placeholder="Categoria"
                    className="input"
                    onChange={handleChangeValues}></input>
                <button className="btn-Add" onClick={AddValues}>Adicionar!</button>
            </div>
        </div>
    );
}
export default FormComp;