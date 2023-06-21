 import Table from 'react-bootstrap/Table';


function TabelaProfissao() {
  return (
    
    <Table class="table table-striped table-bordered">
      <thead>
        <tr>
          <th>#</th>
          <th>ID_DELAGACIA</th>
          <th>QTDE</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>70807</td>
          <td>7</td>
        </tr>
        <tr>
          <td>2</td>
          <td>70922</td>
          <td>6</td>
        </tr>
        <tr>
          <td>3</td>
          <td>80505</td>
          <td>5</td>
        </tr>
        <tr>
          <td>4</td>
          <td>70925</td>
          <td>4</td>
        </tr>
        <tr>
          <td>5</td>
          <td>70930</td>
          <td>3</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TabelaProfissao;