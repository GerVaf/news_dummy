import ReactPlayer from 'react-player';
import videoGif from '../../assets/videoGif.gif'

const Hero = () => {
  return (
    <div className=" lg:h-screen xl:h-full xl:pb-20 flex justify-center items-center">
      <img src={videoGif} alt="" className="w-full h-full"/>
      <h1 className='text-xl lg:text-4xl font-black absolute top-[15%] lg:top-[40%] text-white flex flex-col logo'>
        <span className='text-center'>What's Now,</span>
        What's New & What's Not
      </h1>
    </div>
  );
};

export default Hero;
