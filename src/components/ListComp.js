import { Table } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { useEffect, useState } from "react";
import axios from "axios";

function ListComp() {
  const [apiDados, setapiDados] = useState([]);
  useEffect(() => {
    axios
      .get(`https://636bda197f47ef51e13c1fe5.mockapi.io/api/v1/books`, {})
      .then((response) => setapiDados(response.data));
  }, []);
  return (
    <div className="List">
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Nome do Livro</Table.HeaderCell>
            <Table.HeaderCell>Autor</Table.HeaderCell>
            <Table.HeaderCell>Categoria</Table.HeaderCell>
            <Table.HeaderCell>UPDATE</Table.HeaderCell>
            <Table.HeaderCell>DELETE</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {apiDados.map((data) => {
            return (
              <Table.Row>
                <Table.Cell>{data.Book}</Table.Cell>
                <Table.Cell>{data.Name}</Table.Cell>
                <Table.Cell>{data.Category}</Table.Cell>
                
            
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
export default ListComp;
