 import Table from 'react-bootstrap/Table';


function TabelaMes() {
  return (
   
    <Table class="table table-striped table-bordered">
      <thead>
        <tr>
          <th>#</th>
          <th>DATAEHORA_REGISTRO_BO</th>
          <th>MUNICIPIO</th>
          <th>VITIMAS</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>1/1/2017</td>
          <td>São Paulo</td>
          <td>5</td>
        </tr>
        <tr>
          <td>2</td>
          <td>9/8/2022</td>
          <td>Mairinque</td>
          <td>4</td>
        </tr>
        <tr>
          <td>3</td>
          <td>9/8/2019</td>
          <td>Cajamar</td>
          <td>1</td>
        </tr>
        <tr>
          <td>4</td>
          <td>9/28/2022</td>
          <td>Bauru</td>
          <td>2</td>
        </tr>
        <tr>
          <td>5</td>
          <td>9/27/2020</td>
          <td>São José dos Campos</td>
          <td>3</td>
        </tr>             
      </tbody>
    </Table>
  );
}

export default TabelaMes;