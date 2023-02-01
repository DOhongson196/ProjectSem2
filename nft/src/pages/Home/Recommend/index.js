import RecommendItem from './RecommendItem';

function Recommend() {
  return (
    <div className="flex relative flex-col max-w-screen-xl mt-14 mx-auto w-full">
      <div className=" text-textColor  dark:text-textDarkMode my-10 text-3xl font-semibold">
        Recommended collections
      </div>
      <div className="grid grid-cols-3 grid-rows-2 gap-x-6 gap-y-4 px-3">
        <RecommendItem />
        <RecommendItem />
        <RecommendItem />
        <RecommendItem />
        <RecommendItem />
        <RecommendItem />
      </div>
    </div>
  );
}

export default Recommend;
