import { CollectionItem, CollectionMenu, NFTItem } from '../../components/Collection';
import NFTDetail from '../NFTDetail';

function Ranking() {
  return (
    <div className="flex min-h-screen flex-col mt-20 pb-20 bg-[#FFFFFF] dark:bg-bgDarkMode">
      <div className="flex relative flex-col max-w-screen-xl mx-auto w-full">
        <div className=" text-textColor font-semibold  dark:text-textDarkMode my-10 text-3xl">Ranking Collections</div>
        <CollectionMenu />
        <CollectionItem />
        <NFTItem/>
        <NFTDetail/>
      </div>
    </div>
  );
}

export default Ranking;
