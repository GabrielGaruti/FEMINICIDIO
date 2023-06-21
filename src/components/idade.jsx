 import Table from 'react-bootstrap/Table';


function TabelaIdade() {
  return (
    
    <Table class="table table-striped table-bordered">
      <thead>
        <tr>
          <th>#</th>
          <th>PROFISSAO</th>
          <th>VITIMAS</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>NULL</td>
          <td>29</td>
        </tr>
        <tr>
          <td>2</td>
          <td>PRENDAS DOMESTICAS</td>
          <td>9</td>
        </tr>
        <tr>
          <td>3</td>
          <td>DESEMPREGADO</td>
          <td>4</td>
        </tr>
        <tr>
          <td>4</td>
          <td>APOSENTADO</td>
          <td>2</td>
        </tr>
        
        
      </tbody>
    </Table>
  );
}

export default TabelaIdade;