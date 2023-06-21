import Table from 'react-bootstrap/Table';


function TabelaMunicipio() {
  return (
    
    <Table class="table table-striped table-bordered">
      <thead>
        <tr>
          <th>#</th>
          <th>COR_PELE</th>
          <th>QTDE</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Branca</td>
          <td>105</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Parda</td>
          <td>103</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Preta</td>
          <td>22</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Ignorada</td>
          <td>2</td>
        </tr>
        
        
      </tbody>
    </Table>
  );
}

export default TabelaMunicipio;