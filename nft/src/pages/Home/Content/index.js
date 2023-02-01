// import Button from '../../../components/Button';

import { faArrowRight, faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../../components/Button';
import ContentItems from './ContentItem';

function HomeContent() {
  return (
    <div className="flex relative flex-col max-w-screen-xl mx-auto w-full">
      <div className=" text-textColor font-semibold  dark:text-textDarkMode my-10 text-3xl">Top Collections</div>
      {/* table */}
      {/* table heading */}
      <div>
        <div className="flex w-full h-10 border-b border-[#474d57] font-normal text-sm items-center text-textColor dark:text-[#848e9c]">
          <div className="flex items-center w-[480px] pb-4 justify-start cursor-pointer">Collection</div>
          <div className="flex items-center w-[175px] pb-4 justify-end mr-48 cursor-pointer">
            <span className="mr-1">Volume Change</span>
            <FontAwesomeIcon icon={faChevronCircleDown} />
          </div>
          <div className="flex items-center w-[165px] pb-4 justify-end mr-20 cursor-pointer">
            <span className="mr-1">Floor Price</span>
            <FontAwesomeIcon icon={faChevronCircleDown} />
          </div>
          <div className="flex items-center w-[100px] pb-4 justify-start ">Owners</div>
          <div className="flex flex-1 items-center w-[100px] pb-4 justify-start">Items</div>
        </div>
      </div>
      {/* table item */}
      <ContentItems />
      <ContentItems />
      <ContentItems />
      <ContentItems />
      <ContentItems />
      <ContentItems />
      <Button
        text
        className={'absolute right-0 bottom-[-35px] text-textColor  dark:text-textDarkMode'}
        rightIcon={<FontAwesomeIcon icon={faArrowRight} />}
      >
        More
      </Button>
    </div>
  );
}

export default HomeContent;
