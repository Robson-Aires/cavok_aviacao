import video from '../../assets/video.mp4'
import plane from '../../assets/airplane.png'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className="home flex container">
      <div className="mainText">
      <h1 data-aos='fade-up' data-aos-duration='2500'>SISTEMA CAVOK -
O sistema mais completo do Brasil</h1>
      </div>

      <div data-aos='fade-down' data-aos-duration='2500' className="homeImages flex">
        <div className="videoDiv">
        <video src={video} autoPlay muted loop className="video"></video>
        </div>

        <img src={plane} className="plane" />
      </div>
    </div>
  )
}

export default Home