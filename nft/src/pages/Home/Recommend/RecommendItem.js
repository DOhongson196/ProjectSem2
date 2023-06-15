import { Link } from 'react-router-dom';
import { CheckIcon, FireIcon } from '../../../components/Icons';
import { getProductImageUrl } from '../../../services/Constant';

function RecommendItem({ data }) {
  return (
    <div className="px-10 py-4">
      <Link to={'/nftdetail/' + data?.id}>
        <div className=" ease-in-out shadow-xl cursor-pointer rounded-xl duration-300 hover:translate-y-[-4px] hover:shadow-2xl overflow-hidden">
          {/* background image */}
          <div className="relative w-full h-[400px]">
            <div className="object-cover w-full h-full">
              <img className="w-full h-full object-cover" src={getProductImageUrl(data?.image)} alt="" />
            </div>
          </div>
          {/* info */}
          <div className="pd-4 px-3 flex items-center h-[50px] dark:bg-[#474d57] justify-between">
            <div className="flex items-center">
              <span className="text-lg font-semibold text-[#1e2329] dark:text-textDarkMode text-ellipsis">
                {data?.name}
              </span>
              <CheckIcon width="1.2rem" height="1.1rem" className={'text-[#f0b90b] ml-2'} />
            </div>
            <div className="flex items-center">
              <span className="text-[#1e2329] dark:text-textDarkMode">Featured</span>
              <FireIcon className={'text-red-500 ml-1'} />
            </div>
          </div>
          {/* content */}
          <div className="flex pb-3 px-3 justify-between items-center dark:bg-[#474d57]">
            <div className="flex items-center">
              <div className="text-[#707a8a] dark:text-[#b7bdc6] text-sm mr-2">View Count:</div>
              <div className="text-base font-bold dark:text-[#eaecef]">{data?.viewCount}</div>
            </div>
            <div className="flex items-center">
              <div className="text-[#707a8a] dark:text-[#b7bdc6] text-sm mr-2">Price:</div>
              <div className="text-base font-bold dark:text-[#eaecef]">{data?.price}</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default RecommendItem;
