import {
  faCircleExclamation,
  faCircleInfo,
  faCircleRadiation,
  faHeart,
  faShareNodes,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../components/Button';
import { CheckIcon } from '../../components/Icons';

function NFTDetail() {
  return (
    <div className="flex flex-col mt-20 pb-20 bg-[#FFFFFF] dark:bg-bgDarkMode text-textColor dark:text-textDarkMode">
      <div className="flex relative max-w-screen-xl mx-auto w-full py-16">
        {/* img */}
        <div className="w-96 h-96 mr-24 rounded-xl overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://public.nftstatic.com/static/nft/res/nft-cex/S3/1652872355639_m38kzljfloqb8td1xek0aawv4n1r5mf5.png"
            alt="nftitems"
          />
        </div>
        {/* content */}
        <div className="flex-1 flex flex-col">
          {/* heading*/}
          <div className="flex justify-between">
            {/* heading-left*/}
            <div className="flex items-center">
              <div className="text-[#c99400]">Azuki</div>
              <CheckIcon className={'text-[#f0b90b] ml-1 w-5 h-5'} />
            </div>
            {/* heading-right*/}
            <div className="text-xl text-[#707a8a]">
              <FontAwesomeIcon icon={faHeart} className="cursor-pointer hover:opacity-80" />
              <FontAwesomeIcon icon={faShareNodes} className="mx-8 cursor-pointer hover:opacity-80" />
              <FontAwesomeIcon icon={faCircleInfo} className="cursor-pointer hover:opacity-80" />
            </div>
          </div>

          {/* Name */}
          <div className="text-3xl font-semibold mt-3">Azuki #1439</div>
          <div className="flex items-center mt-1 mb-5">
            <div className="text-[#707a8a]">Listed from</div>
            <FontAwesomeIcon icon={faCircleRadiation} className="ml-1 text-[#1a82e3]" />
          </div>

          {/* Price */}
          <div className="text-xs text-[#707a8a]">Price</div>
          <div className="text-2xl font-semibold mt-1">25,730.58 USD</div>

          {/* button */}
          <div className="mt-6">
            <Button primary className={'px-14 py-3 dark:text-textColor'}>
              Buy Now
            </Button>
          </div>

          {/* info */}
          <div className="bg-[#fafafa] dark:bg-[#0b0e11] flex mt-10 p-3 rounded">
            <FontAwesomeIcon icon={faCircleExclamation} className="text-[#f0b90b] text-xl mt-1" />
            <div className="flex-1 ml-3">
              <div className="font-semibold">This NFT is a third-party listing:</div>
              <div className="text-xs text-[#707a8a]">
                - To complete the transaction, you will need to pay a gas fee and wait for the blockchain confirmation
                which normally takes around 10 minutes; and
                <br />- You are responsible for verifying the identity, legitimacy, and authenticity of this NFT.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NFTDetail;
