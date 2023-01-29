import { CheckIcon } from '../../../components/Icons';

function NFTItems() {
  return (
    <div className="flex items-center mx-2 p-2 cursor-pointer hover:bg-[#f5f5f5] dark:hover:bg-[#2b3139] hover:rounded-lg ">
      <div className="w-8 h-8 mr-4">
        <img
          className="w-full h-full rounded-xl object-cover shrink-0 "
          src="https://public.nftstatic.com/static/nft/zipped/a85da27a2dc74ee3a9ff13abf7d6aaf1_zipped.png"
          alt=""
        />
      </div>
      <div className="flex-1 min-w-0 h-9">
        <div className="flex items-center">
          <span className="text-sm font-semibold leading-5 text-[#1e2329] dark:text-textDarkMode text-ellipsis">
            The CR7 NFT Collection
          </span>
          <CheckIcon className={'text-[#f0b90b] ml-2'} />
        </div>
        <div className="font-normal leading-4 text-xs text-[#707a8a]">1,570,837 items</div>
      </div>
    </div>
  );
}

export default NFTItems;
