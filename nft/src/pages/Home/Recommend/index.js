import RecommendItem from './RecommendItem';

function Recommend() {
  return (
    <div className="flex flex-col w-[1280px] mt-14 mx-auto ">
      <div className=" text-textColor dark:text-textDarkMode my-10 text-3xl font-semibold float-left w-full ">
        Recommended collections
      </div>
      <div className="grid grid-cols-3 gap-x-[78px] gap-y-4 px-3">
        <RecommendItem />

        <RecommendItem />

        <RecommendItem />
      </div>
    </div>
  );
}

export default Recommend;
