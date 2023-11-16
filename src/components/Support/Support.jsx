import gridImage from '../../assets/gridImage.webp'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css';

const Support = () => {
useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className="support container section">
        <div className="sectionContainer">
          <div className="titlesDiv">
            <small>cavok support</small>
            <h2>EFB CAVOK Electronic Flight Bag </h2>
            <p>O aplicativo EFB Cavok - Electronic Flight Bag,
               auxilia tripulantes em suas atividades profissionais. Ferramenta 
              offline e integrada ao sistema Cavok, o EFB CAVOK oferece:</p>
          </div>

          <div className="infoDiv grid">

              <div className="textDiv grid">

                <div data-aos='fade-down' data-aos-duration='2500' className="singleInfo">
                  <span className="number">01</span>
                  <h4>Registre suas Jornadas com Confiança: eDB CAVOK,
                     o Diário de Bordo Eletrônico Aprovado pela ANAC</h4>
                  <p>
                  eDB CAVOK: diário de bordo eletrônico 
                  aprovado pela Agência Nacional de Aviação Civil (ANAC);
                  </p>
                </div>

                <div data-aos='fade-down' data-aos-duration='3500' className="singleInfo">
                  <span className="number colorOne">02</span>
                  <h4>Gerenciamento Operacional da Aeronave:</h4>
                  <p>
                  Cálculo de Peso e Balanceamento
                  <br/>
                  Listas de Passageiros e Controle de Embarque
                  <br/>
                  Voos, Etapas e Registros
                  </p>
                </div>

                <div data-aos='fade-down' data-aos-duration='3800' className="singleInfo">
                  <span className="number colorTwo">03</span>
                  <h4>Documentação e Manutenção:</h4>
                  <p>
                  Manuais, Publicações e Documentos de Manutenção
                  <br/>
                  Lista ACR - Ação Corretiva Retardada
                  <br/>
                  Controle de Abastecimentos
                  </p>
                </div>
              </div>

            <div data-aos='fade-left' data-aos-duration='4500' className="imgDiv">
              <img src={gridImage} alt="" />
            </div>
          </div>


        </div>
    </div>
  )
}

export default Support