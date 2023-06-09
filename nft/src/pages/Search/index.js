import { routesConfig } from '../../config';
import { Link, useParams } from 'react-router-dom';
import { LeftIcon } from '../../components/Icons';
import NFTItem from '../../components/Collection/NFTItem';

function Search() {
  const keyWord = useParams();
  return (
    <div className="flex min-h-screen flex-col mt-20 pb-20 bg-[#FFFFFF] dark:bg-bgDarkMode text-textColor font-semibold  dark:text-textDarkMode">
      <div className="flex flex-col max-w-screen-xl mx-auto w-full">
        <div className="flex items-center my-10">
          <Link to={routesConfig.home}>
            <LeftIcon width="2.4rem" height="2.4rem" className={'fill-white hover:fill-primary p-4'} />
          </Link>
          <div className=" text-3xl">Search Result for “{keyWord.keyword.split('=')[1]}"</div>
        </div>
        {/* <div className="flex items-center my-10 justify-center text-3xl italic">No data available</div> */}
        <div className="grid grid-cols-4 gap-y-8">
          <NFTItem />

          <NFTItem />

          <NFTItem />

          <NFTItem />
          <NFTItem />
          <NFTItem />
          <NFTItem />
          <NFTItem />
        </div>
      </div>
    </div>
  );
}

export default Search;
