import video from '../../assets/video.mp4'
import plane from '../../assets/airplane.png'
const Home = () => {
  return (
    <div className="home flex container">
      <div className="mainText">
      <h1>Create Ever-lating Memories With Us</h1>
      </div>

      <div className="homeImages flex">
        <div className="videoDiv">
        <video src={video} autoPlay muted loop className="video"></video>
        </div>

        <img src={plane} className="plane" />
      </div>
    </div>
  )
}

export default Home