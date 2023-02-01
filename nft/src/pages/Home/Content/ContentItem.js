import Button from '../../../components/Button';
import { CheckIcon } from '../../../components/Icons';

function ContentItems() {
  const validIcon = true;
  const uptrend = true;
  return (
    <div>
      <div className="relative cursor-pointer rounded-xl group flex w-full h-[78px] font-normal text-base items-center text-textColor dark:text-[#eaecef] hover:bg-[#f5f5f5] hover:scale-105 ease-in-out duration-300 dark:hover:bg-[#2b3139]">
        {/* info */}
        <div className="flex items-center w-[480px] justify-start pl-2">
          {/* ranking */}
          <div>1</div>
          {/* logo */}
          <div className="w-10 h-10 mr-4 ml-5">
            <img
              className="w-full h-full rounded-xl object-cover shrink-0 "
              src="https://public.nftstatic.com/static/nft/zipped/a85da27a2dc74ee3a9ff13abf7d6aaf1_zipped.png"
              alt=""
            />
          </div>
          {/* name */}
          <div className="flex-1 min-w-0 h-full">
            <div className="flex items-center">
              <span className="text-base font-semibold text-[#1e2329] dark:text-textDarkMode text-ellipsis">
                The CR7 NFT Collection
              </span>
              {validIcon ? <CheckIcon className={'text-[#f0b90b] ml-2'} /> : null}
            </div>
          </div>
        </div>
        {/* volume */}
        <div className="flex flex-col  items-end w-[175px] mr-48">
          <div>729.47 ETH</div>
          {uptrend ? <div className="text-[#0ecb81]">+8.40%</div> : <div className="text-[#F6465D]">-8.40%</div>}
        </div>
        {/* floor price */}
        <div className="flex items-end flex-col w-[165px] mr-20">
          <div>2.35 ETH</div>
          {uptrend ? <div className="text-[#0ecb81]">+3.40%</div> : <div className="text-[#F6465D]">-3.40%</div>}
        </div>
        {/* Owners */}
        <div className="flex items-end w-[100px] group-hover:hidden">27</div>
        {/* Items */}
        <div className="flex flex-1 items-center w-[100px] justify-start group-hover:hidden">24.657</div>
        {/* Button */}
        <Button
          primary
          className={
            'absolute w-32 hidden justify-center items-center whitespace-nowrap right-12 h-10 px-[12px] py-[6px] dark:text-textColor group-hover:block'
          }
        >
          Buy Now
        </Button>
      </div>
    </div>
  );
}

export default ContentItems;
