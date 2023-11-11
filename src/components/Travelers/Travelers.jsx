import paris from '../../assets/paris.jpg'
import monkey from '../../assets/monkey.webp'



const travelers = [
  {
    id: 1,
    destinationImage: paris,
    travelerImage: monkey,
    travelerName: 'israTech',
    socialLink: '@isratech8'
  },
  {
    id: 2,
    destinationImage: paris,
    travelerImage: monkey,
    travelerName: 'israTech',
    socialLink: '@isratech8'
  },

]

const Travelers = () => {
  return (
    <div className="travelers container section">
      <div className="sectionContainer">
        <h2>Top travelers of this month</h2>

        <div className="travelersContainer grid">
          {
            travelers.map(({ id, destinationImage, travelerImage, travelerName, socialLink})=>{
              {/* Single passanger card */}
              return(                
          <div className="singleTraveler" key={id}>
            <img src={destinationImage} className="destinationImage" alt="" />
            <div className="travelerDetails">
              <div className="travelerPicture">
                <img src={travelerImage} alt="" className='travelerImage' />
              </div>
              <div className="travelerName">
                <span>{travelerName}</span>         
                <p>{socialLink}</p>
              </div>
            </div>

          </div>
              )
            })
          }


        </div>
      </div>
      </div>
  )
}

export default Travelers