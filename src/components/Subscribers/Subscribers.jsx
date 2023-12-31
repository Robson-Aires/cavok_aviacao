import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css';

const Subscribers = () => {
    useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])
  
  return (
    <div className="subscribe section">
      <div data-aos='fade-up' data-aos-duration='3500' className="sectionContainer container">
        <h2 >Adicione seu email e fique por dentro das novidades!</h2>
        <div className="inputDiv flex">
          <input type="text" placeholder="Enter your email adrdress" />
          <button className="btn">Enviar</button>
        </div>
      </div>
    </div>
  )
}

export default Subscribers