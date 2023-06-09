import Button from '../Button';

function NFTItem() {
  return (
    <div className="cursor-pointer w-72 group h-96  shadow-xl bg-white dark:bg-[#1e2329] ease-out rounded-xl transition-all duration-400 hover:translate-y-[-4px] hover:shadow-xl overflow-hidden">
      {/* background image */}
      <div className="object-cover w-full h-[288px]">
        <img
          className="w-full h-full  object-cover"
          src="https://public.nftstatic.com/static/nft/res/nft-cex/S3/1676151668435_k1wlirhv9uvtco4l6e7xx3dwdvs5im29_400x400.jpeg"
          alt=""
        />
      </div>
      {/* content */}
      <div className="relative group-hover:-mt-11 bg-white dark:bg-[#1e2329]  flex flex-col p-4 overflow-hidden z-10 transition-all ease-linear duration-400">
        <div className="text-xs font-semibold dark:text-[#eaecef]">Bored Ape Yacht Club #7305</div>
        <div className="flex flex-col items-center mt-3">
          <div className="flex justify-between w-full ">
            <div className="text-[#707a8a] dark:text-[#b7bdc6] text-xs mr-2">Price</div>
            <div className=" text-sm font-bold dark:text-[#eaecef]">116,109.51 USD</div>
          </div>
          <div className="flex justify-center absolute group-hover:relative mt-4 group-hover:bottom-0 -bottom-14 w-[256px] ">
            <Button
              primary
              className={'w-full justify-center items-center whitespace-nowrap px-[12px] py-[8px] dark:text-textColor'}
            >
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NFTItem;
