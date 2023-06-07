import { Link } from 'react-router-dom';
import { CheckIconL } from '../../../components/Icons';
import images from '../../../assets/images';

function RecommendItem() {
  return (
    <div className="px-10 py-4">
      <Link>
        <div className=" ease-in-out shadow-xl cursor-pointer rounded-xl duration-300 hover:translate-y-[-4px] hover:shadow-2xl overflow-hidden">
          {/* background image */}
          <div className="relative w-full h-[400px]">
            <div className="object-cover w-full h-full">
              <img className="w-full h-full object-cover" src={images.anh1} alt="" />
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
    </div>
    // <>
    //   <div class="shadow rounded-md p-4 max-w-sm w-full mx-auto">
    //     <div class="animate-pulse flex space-x-4">
    //       <div class="flex-1 space-y-6 py-1">
    //         <div class="h-[400px] bg-slate-300 dark:bg-slate-500 rounded "></div>
    //         <div class="space-y-3">
    //           <div class="grid grid-cols-3 gap-4">
    //             <div class="h-5 bg-slate-300 dark:bg-slate-500 rounded col-span-1"></div>
    //             <div class="h-5 bg-slate-300 dark:bg-slate-500 rounded col-span-2"></div>
    //           </div>
    //           <div class="h-4 bg-slate-300 dark:bg-slate-500 rounded"></div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
}

export default RecommendItem;
