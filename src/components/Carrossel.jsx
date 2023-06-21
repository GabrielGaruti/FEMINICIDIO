import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function Carrossel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.discordapp.net/attachments/1000220744309026876/1121090628328095795/3-feminicidio.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Combate ao Feminicídio</h3>
          <p>Nos ajude a cabar com esse crime contra a mulher!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
}

export default Carrossel;