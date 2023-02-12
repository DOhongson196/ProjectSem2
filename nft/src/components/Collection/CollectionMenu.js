import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CollectionMenu() {
  return (
    <div>
      <div className="flex w-full h-10 border-b border-[#EAECEF] font-normal text-sm items-center text-textColor dark:text-[#848e9c]">
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
  );
}

export default CollectionMenu;
