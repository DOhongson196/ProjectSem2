import { CheckIcon } from '../../components/Icons';
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CartItem() {
  return (
    <div>
      <div className="relative rounded-xl flex w-full h-[78px] font-normal text-base items-center text-textColor dark:text-[#eaecef]">
        {/* info */}
        <div className="flex items-center w-[480px] justify-start pl-2">
          {/* delete */}
          <button className="text-[#B7BDC6] dark:text-[#848e9c]">
            <FontAwesomeIcon icon={faXmarkCircle} />
          </button>
          {/* logo */}
          <div className="w-10 h-10 mr-4 ml-4">
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
              <CheckIcon className={'text-[#f0b90b] ml-2'} />
            </div>
          </div>
        </div>
        {/* volume */}
        <div className="flex flex-col  items-center justify-center w-[175px] mr-48">
          <div>100 USD</div>
        </div>
        {/* floor price */}
        <div className="flex items-center justify-center flex-col w-[165px] mr-20 dark:text-textColor">
          <input
            type="number"
            min="1"
            className="outline-none border rounded-lg pl-4 w-[60px] py-[0.5px] border-textColor"
          />
        </div>
        {/* price */}
        <div className="flex items-end justify-end w-[200px]">200 USD</div>
      </div>
    </div>
  );
}

export default CartItem;
