import RecommendItem from './RecommendItem';
import { SimpleSlider } from '../../../components/Slider';

function Recommend() {
  return (
    <div className="flex flex-col w-[1280px] mt-14 mx-auto ">
      <div className=" text-textColor dark:text-textDarkMode my-4 text-3xl font-semibold float-left w-full ">
        Recommended collections
      </div>
      <div className="mx-[-40px]">
        <SimpleSlider autoplay slidesToScroll={3} slidesToShow={3}>
          <RecommendItem />

          <RecommendItem />

          <RecommendItem />

          <RecommendItem />

          <RecommendItem />

          <RecommendItem />
        </SimpleSlider>
      </div>
    </div>
  );
}

export default Recommend;
