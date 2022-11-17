import { Table } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Pencil from "../../assets/pencil.svg"
import Trash from "../../assets/trash.svg"

function ListComp() {

  const [apiDados, setapiDados] = useState([]);
  useEffect(() => {
    axios
      .get(`https://636bda197f47ef51e13c1fe5.mockapi.io/api/v1/books`, {})
      .then((response) => setapiDados(response.data));
  }, []);
  const Delete = (id) => {
    axios
      .delete(`https://636bda197f47ef51e13c1fe5.mockapi.io/api/v1/books/${id}`)
      .then(() => {
        getData();
      });
  };
  const getData = () => {
    axios
      .get(`https://636bda197f47ef51e13c1fe5.mockapi.io/api/v1/books$`)
      .then((getData) => {
        setapiDados(getData.data);
      });
  };
  const setData = (data) => {
    let { id, Book, Name, Category } = data
    localStorage.setItem("id", id);
    localStorage.setItem("Name", Name);
    localStorage.setItem("Book", Book);
    localStorage.setItem("Category", Category);
   
  }
  return (
    <div className="List">
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Nome do Livro</Table.HeaderCell>
            <Table.HeaderCell>Autor</Table.HeaderCell>
            <Table.HeaderCell>Categoria</Table.HeaderCell>
            <Table.HeaderCell>Editar</Table.HeaderCell>
            <Table.HeaderCell>Excluir</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {apiDados.map((data) => {
            return (
              <Table.Row>
                <Table.Cell>{data.Book}</Table.Cell>
                <Table.Cell>{data.Name}</Table.Cell>
                <Table.Cell>{data.Category}</Table.Cell>
                <Link to="/update">
                  <Table.Cell>
                    <button className="btn-update" onClick={()=> setData(data)}><img src={Pencil} alt="icon Pencil"></img></button>
                  </Table.Cell>
                </Link>
                <Table.Cell>
                  <button
                    onClick={() => Delete(data.id)}
                    className="btn-delete"
                  >
                    <img src={Trash} alt="icon Trash"></img>
                  </button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
export default ListComp;
