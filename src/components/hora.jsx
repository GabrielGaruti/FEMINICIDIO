 import Table from 'react-bootstrap/Table';


function TabelaHora() {
  return (
    
    <Table class="table table-striped table-bordered">
      <thead>
        <tr>
          <th>#</th>
          <th>MES_ESTATISTICA</th>
          <th>PROFISSAO</th>
          <th>VITIMAS</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>VIGILANTE</td>
          <td>32</td>
        </tr>
        <tr>
          <td>2</td>
          <td>AJUDANTE GERAL</td>
          <td>31</td>
        </tr>
        <tr>
          <td>3</td>
          <td>AUXILIAR DE ESCRITORIO</td>
          <td>23</td>
        </tr>
        <tr>
          <td>4</td>
          <td>GARCONETE</td>
          <td>14</td>
        </tr>
        
      </tbody>

    </Table>
  );
}

export default TabelaHora;