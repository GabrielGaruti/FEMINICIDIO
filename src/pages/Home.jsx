import Carrossel from '../components/Carrossel'
import NavProjeto from '../components/NavProjeto'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';
import TabelaMunicipio from '../components/municipio'
import TabelaIdade from '../components/idade'
import TabelaProfissao from '../components/profissao'
import TabelaHora from '../components/hora'
import TabelaMes from '../components/mes'

function Home() {
    return (
      <>
        <div>
          <NavProjeto/>
          <Carrossel/>
          <br/>
          <h1>O que é feminicídio</h1>
          <li>O assassinato de mulheres em contextos discriminatórios recebeu uma designação própria: feminicídio. Nomear o problema é uma forma de visibilizar um cenário grave e permanente: milhares de mulheres são mortas todos os anos no Brasil.</li>
          <br/>
          <h1>Dados sobre os casos de feminicídio no Brasil entre 2015 e 2022</h1><br/>
          <h2>Crimes contra mulheres de cada cor em Sâo Paulo</h2>
          <TabelaMunicipio/>
          <br />
          <li>A cidade de São Paulo é onde o crime de feminicídio tem mais ocorrência</li>
          <br/>
          <h2>As 4 profissões que mais sofreram feminicidio</h2>
          <TabelaIdade/>
          <br />
          <li>
          </li>
          <br/>
          <h2>Delegacias com mais registros de feminicidios</h2>
          <TabelaProfissao/>
          <br />
          
          <br/>
          <h2>Messe e profissoes que o crime mais foi cometido</h2>
          <TabelaHora/>
          <br />
          
          <br/>
          <h2>Data e Hora do registro do bo e municipio</h2>
          <TabelaMes/>
          <br />
          <li>O mês de Dezembro é onde ocorre um maior número de feminicídios.</li>
          <br />
          <Footer/>
        </div>
      </>
    )
  }
  
  export default Home