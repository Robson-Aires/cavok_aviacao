import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiAccountPinCircleLine } from "react-icons/ri"
import { RxCalendar } from "react-icons/rx"
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css';


const Search = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className="search container section">
      <div data-aos='fade-up' data-aos-duration='2500'className="sectionContainer grid">


        <div className="btns flex">
          <div className="singleBtn">
            <span>ROTA / NAVEGAÇÃO</span>
          </div>


          <div className="singleBtn">
            <span>METAR/TAF</span>
          </div>


          <div className="singleBtn">
            <span>NOTAM</span>
          </div>

        </div>

        <div data-aos='fade-up' data-aos-duration='2000' className="searchInputs flex">
          {/* single input */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <HiOutlineLocationMarker className="icon" />
            </div>
            <div className="texts">
              <h4>Consultar Aeródromos</h4>
              <input type="text" placeholder="Consultar Aeródromos" />
            </div>
          </div>

          {/* single input */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <RiAccountPinCircleLine className="icon" />
            </div>
            <div className="texts">
              <h4>Licenças e Habilitações</h4>
              <input type="text" placeholder="Licenças e Habilitações" />
            </div>
          </div>

          {/* single input */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <RxCalendar className="icon" />
            </div>
            <div className="texts">
              <h4>Consultar RAB</h4>
              <input type="text" placeholder="Consultar RAB" />
            </div>
          </div>

            {/* single input */}
            <div className="singleInput flex">
            <div className="iconDiv">
              <RxCalendar className="icon" />
            </div>
            <div className="texts">
              <h4>Rota / Navegação</h4>
              <input type="text" placeholder="Rota" />
            </div>
          </div>

          <button className="btn btnBlock flex">Pesquisar</button>
        </div>

      </div>

    </div>
  )
}

export default Search