import { Table } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import axios from "axios";
import { Link } from "react-router-dom";
import Pencil from "../../assets/pencil.svg";
import Trash from "../../assets/trash.svg";

function Books(props) {
  const deleteBook = (id) => {
    axios
      .delete(`https://636bda197f47ef51e13c1fe5.mockapi.io/api/v1/books/${id}`)
      .then(() => {
        props.fetchBooks();
      });
  };

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
          {props.books.map((data) => {
            return (
              <Table.Row key={data.id}>
                <Table.Cell>{data.Book}</Table.Cell>
                <Table.Cell>{data.Name}</Table.Cell>
                <Table.Cell>{data.Category}</Table.Cell>
                <Link to={`/update/${data.id}`}>
                  <Table.Cell>
                    <button className="btn-update">
                      <img src={Pencil} alt="icon Pencil"></img>
                    </button>
                  </Table.Cell>
                </Link>
                <Table.Cell>
                  <button
                    onClick={() => deleteBook(data.id)}
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
export default Books;
