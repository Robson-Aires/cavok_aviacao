import Logo from '../../assets/logo.webp';
import {TiSocialFacebook} from 'react-icons/ti';
import {AiOutlineTwitter} from 'react-icons/ai';
import {AiFillYoutube} from 'react-icons/ai';
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css';



const Footer = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])
  return (
    <div data-aos='fade-up' data-aos-duration='3500' className="footer">
      <div className="sectionContainer container grid">
        <div className="gridOne">
          <div className="logoDiv">
            <img src={Logo} className="logo" />
          </div>
          <p>Your mind should be strong than your feelings, fly!</p>
          <div className="socialIcon flex">
              <a href="https://pt-br.facebook.com/cavok.in/" target="_blank" rel="noopener noreferrer">
                <TiSocialFacebook className='icon' />
              </a>
              <a href="https://pt-br.facebook.com/cavok.in/" target="_blank" rel="noopener noreferrer">
                <AiOutlineTwitter className='icon' />
              </a>
              <a href="https://www.youtube.com/@cavokaviacao7770" target="_blank" rel="noopener noreferrer">
                <AiFillYoutube className='icon' />
              </a>
            </div>
        </div>

        <div className="footerLinks">
          <span className="linktitle">Information</span>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Explore</a>
          </li>
          <li>
            <a href="">Flight Status</a>
          </li>
          <li>
            <a href="">Travel</a>
          </li>
          <li>
            <a href="">check-in</a>
          </li>
          <li>
            <a href="">Manage your booking</a>
          </li>
        </div>

        <div className="footerLinks">
          <span className="linktitle">Quick Guide</span>
          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">How to</a>
          </li>
          <li>
            <a href="">Features</a>
          </li>
          <li>
            <a href="">Baggage</a>
          </li>
          <li>
            <a href="">Route Map</a>
          </li>
          <li>
            <a href="">Our communities</a>
          </li>
        </div>

        <div className="footerLinks">
          <span className="linktitle">Information</span>
          <li>
            <a href="#">Chauffuer</a>
          </li>
          <li>
            <a href="#">Our partners</a>
          </li>
          <li>
            <a href="#">Destination</a>
          </li>
          <li>
            <a href="#">Carrers</a>
          </li>
          <li>
            <a href="#">Transportation</a>
          </li>
          <li>
            <a href="#">Programme Rules</a>
          </li>
        </div>
        
      </div>
      
      <div className="copyRightDiv flex">
        <p>Courtesy Design | Developer by <a href="https://robson-aires.github.io/site-portfolio/#home">I
        robson aires</a></p>
      </div>
    </div>
  )
}

export default Footer