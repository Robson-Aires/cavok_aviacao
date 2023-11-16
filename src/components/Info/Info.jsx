
import {RxCalendar} from 'react-icons/rx';
import {BsShieldCheck} from 'react-icons/bs'
import {BsBookmarkCheck} from 'react-icons/bs'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css';


const Info = () => {
useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className="info section">
      <div className="infoContainer container">
        <div className="titleDiv flex">
          <h2 data-aos='fade-right' data-aos-duration='3500'>Líder Brasil no fornecimento de soluções tecnológicas para a aviação
Presente nas principais operações executivas da América Latina</h2>
          <button data-aos='fade-left' data-aos-duration='3500' className="btn">
            Saiba Mais
          </button>
        </div>

        <div data-aos='fade-up' data-aos-duration='3500' className="cardsDiv grid">

          <div className="singleCard grid">
            <div className="iconDiv flex">
              <RxCalendar className='icon'/>
            </div>
            <span className='cardTitle'>Tecnologia de Vanguarda na Aviação</span>
            <p>Destaques em soluções tecnológicas para aviação, impulsionando inovação e eficiência operacional.</p>
          </div>

          <div className="singleCard grid">
            <div className="iconDiv flex colorOne">
              <BsShieldCheck className='icon'/>
            </div>
            <span className='cardTitle'>Presença Estratégica na América Latina</span>
            <p>Principais operações executivas da América Latina, fortalecendo parcerias estratégicas.</p>
          </div>

          <div className="singleCard grid">
            <div className="iconDiv flex colorTwo">
              <BsBookmarkCheck className='icon'/>
            </div>
            <span className='cardTitle'>Compromisso Inabalável com a Excelência</span>
            <p>Compromisso inabalável com a excelência, oferecendo qualidade em todas as soluções, do peso ao embarque</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Info