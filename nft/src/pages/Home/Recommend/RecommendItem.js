import { Link } from 'react-router-dom';
import { CheckIcon } from '../../../components/Icons';

function RecommendItem() {
  return (
    <Link>
      <div className="relative cursor-pointer shadow-lg ease-in-out duration-300 hover:translate-y-[-4px] hover:shadow-2xl">
        {/* background image */}
        <div className="relative w-full h-32">
          <div className="object-cover w-full h-full">
            <img
              className="w-full h-full rounded-xl object-cover"
              src="https://public.nftstatic.com/static/nft/zipped/6ca340e31a894a40a05082e61247a2c1_zipped.png"
              alt=""
            />
          </div>
          <div className="absolute w-14 rounded-[34%] left-4 -translate-y-1/3 overflow-hidden p-[3px] bg-white dark:bg-bgDarkMode">
            <img
              className="w-full h-full rounded-[34%] object-cover  "
              src="https://public.nftstatic.com/static/nft/zipped/a85da27a2dc74ee3a9ff13abf7d6aaf1_zipped.png"
              alt=""
            />
          </div>
        </div>
        {/* info */}
        <div className="pl-20 mt-3 flex items-center">
          <span className="text-base font-semibold text-[#1e2329] dark:text-textDarkMode text-ellipsis">
            The CR7 NFT Collection
          </span>
          <CheckIcon className={'text-[#f0b90b] ml-2'} />
        </div>
        {/* content */}
        <div className="mt-4 flex pb-3 px-3 justify-between items-center">
          <div className="flex items-center">
            <div className="dark:text-[#b7bdc6] text-xs mr-2">Volume</div>
            <div className="text-sm font-bold dark:text-[#eaecef]">555,935.23 USD</div>
          </div>
          <div className="flex items-center">
            <div className="dark:text-[#b7bdc6] text-xs mr-2">Floor Price</div>
            <div className="text-sm font-bold dark:text-[#eaecef]">5.33 USD</div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default RecommendItem;
