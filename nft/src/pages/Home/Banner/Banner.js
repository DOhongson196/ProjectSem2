import { SimpleSlider } from '../../../components/Slider';
import SlideItem from './SlideItem';
import images from '../../../assets/images';

function HomeBanner() {
  return (
    <div className="flex max-w-screen-xl h-[420px] justify-between items-center mx-auto w-full">
      {/* content */}
      <div className="flex flex-col max-w-[600px] mr-14">
        <div className="leading-[56px] text-[48px] font-black ">
          <div className="bg-clip-text bg-text-gradient text-transparent bg-text-bgsize">Incredible NFT -</div>
          <div className="bg-clip-text bg-text-gradient text-transparent bg-text-bgsize"> Diversity, Security, </div>
          <div className="bg-clip-text bg-text-gradient text-transparent bg-text-bgsize"> and Reliability </div>
          <div className="text-textColor dark:text-[#ebedf0]"> All in one place</div>
        </div>
      </div>
      {/* slider */}
      <div className="w-[518px] h-[290px] mr-10">
        <SimpleSlider dots autoplay infinite>
          <SlideItem src={images.slide1} />
          <SlideItem src={images.slide3} />
          <SlideItem src={images.slide2} />
        </SimpleSlider>
      </div>
    </div>
  );
}

export default HomeBanner;
