// import imageGrid from '../../assets/video-cavok.png'
 import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css';

const Lounge = () => {
 useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className="lounge container section">
      <div className="sectionContainer grid">

      <div className="imgDiv">
      <iframe
      className='img'
            data-aos="fade-left"
            data-aos-duration="3500"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ZRTZibPSMj4"
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
    
  <div data-aos='fade-right' data-aos-duration='3500' className="textDiv">
      <h2>Sistema Cavok</h2>


  <div className="grids grid">

    <div className="singleGrid">
      <span className="gridTitle">
      Solução Abrangente
      </span>
      <p>Uma solução completa para a gestão de operações
         aeronáuticas, integrando funções backoffice e core business.
      </p>
    </div>

    <div className="singleGrid">
      <span className="gridTitle">
      Flexibilidade Personalizada
      </span>
      <p>Totalmente personalizável e adaptável aos parâmetros
         específicos do cliente, oferecendo flexibilidade incomparável.
      </p>
    </div>

    <div className="singleGrid">
      <span className="gridTitle">
      Escalabilidade Modular
      </span>
      <p>Modular e dimensionável para atender ao tamanho e às
         necessidades exclusivas do seu negócio, garantindo eficiência e escalabilidade.
      </p>
    </div>

    <div className="singleGrid">
      <span className="gridTitle">
      Especialização ANAC Garantida
      </span>
      <p>Especializado e em conformidade total com os requisitos e exigências
         da autoridade aeronáutica ANAC, assegurando a máxima conformidade.
      </p>
    </div>
    
  </div>
    </div>

    
    </div>
      </div>
  )
}

export default Lounge