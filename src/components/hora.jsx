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
          <td>1</td>
          <td>VIGILANTE</td>
          <td>4</td>
        </tr>
        <tr>
          <td>2</td>
          <td>1</td>
          <td>CABELELEIRA</td>
          <td>2</td>
        </tr>
        <tr>
          <td>3</td>
          <td>1</td>
          <td>CAIXA</td>
          <td>4</td>
        </tr>
        <tr>
          <td>4</td>
          <td>1</td>
          <td>AUXILIAR DE ESCRITORIO</td>
          <td>2</td>
        </tr>
        
      </tbody>

    </Table>
  );
}

export default TabelaHora;