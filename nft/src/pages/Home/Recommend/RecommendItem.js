import { Link } from 'react-router-dom';
import { CheckIconL } from '../../../components/Icons';

function RecommendItem() {
  return (
    <Link>
      <div className="relative cursor-pointer shadow-lg ease-in-out rounded-xl duration-300 hover:translate-y-[-4px] hover:shadow-2xl overflow-hidden">
        {/* background image */}
        <div className="relative w-full h-[400px]">
          <div className="object-cover w-full h-full">
            <img
              className="w-full h-full object-cover"
              src="https://w0.peakpx.com/wallpaper/736/818/HD-wallpaper-demon-slayer-anime-sword.jpg"
              alt=""
            />
          </div>
          <div className="absolute  w-16 rounded-[34%] left-4 -translate-y-1/3 overflow-hidden p-[3px] bg-white dark:bg-[#474d57]">
            <img
              className="w-full h-full rounded-[34%] object-cover  "
              src="https://public.nftstatic.com/static/nft/zipped/a85da27a2dc74ee3a9ff13abf7d6aaf1_zipped.png"
              alt=""
            />
          </div>
        </div>
        {/* info */}
        <div className="pl-24 -mt-1 flex items-center h-[50px] dark:bg-[#474d57] ">
          <span className="text-lg font-semibold text-[#1e2329] dark:text-textDarkMode text-ellipsis">
            The CR7 NFT Collection
          </span>
          <CheckIconL className={'text-[#f0b90b] ml-2'} />
        </div>
        {/* content */}
        <div className="pd-4 flex pb-3 px-3 justify-between items-center dark:bg-[#474d57]">
          <div className="flex items-center">
            <div className="text-[#707a8a] dark:text-[#b7bdc6] text-sm mr-2">Buying Volume:</div>
            <div className="text-base font-bold dark:text-[#eaecef]">240</div>
          </div>
          <div className="flex items-center">
            <div className="text-[#707a8a] dark:text-[#b7bdc6] text-sm mr-2">Price:</div>
            <div className="text-base font-bold dark:text-[#eaecef]">5.33 USD</div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default RecommendItem;
