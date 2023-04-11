import video from '../assets/preloader.mp4';
const Preloader = () => {
  return (
    <div className='preloader'>
      <video src={video} autoPlay loop muted/>
    </div>
  )
}

export default Preloader