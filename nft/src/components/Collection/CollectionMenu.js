import { ChevronUpDownIcon } from '@heroicons/react/20/solid';

function CollectionMenu() {
  return (
    <div>
      <div className="flex w-full h-10 border-b border-[#EAECEF] font-normal text-sm items-center text-textColor dark:text-[#848e9c]">
        <div className="flex items-center w-[480px] pb-4 justify-start">Collection</div>
        <div className="flex items-center w-[175px] pb-4 justify-end mr-48 cursor-pointer">
          <span className="mr-1">View Count</span>
          <ChevronUpDownIcon className="w-5 h-5" />
        </div>
        <div className="flex items-center w-[165px] pb-4 justify-end  cursor-pointer">
          <span className="mr-1">Buying Volume</span>
          <ChevronUpDownIcon className="w-5 h-5" />
        </div>
        <div className="flex items-end w-[266px] pb-4 justify-end ">Price</div>
      </div>
    </div>
  );
}

export default CollectionMenu;
