import routesConfig from '../../../config/routes';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../../components/Button';
import { CollectionItem, CollectionMenu } from '../../../components/Collection';

function HomeContent() {
  return (
    <div className="flex relative flex-col max-w-screen-xl mx-auto w-full">
      <div className=" text-textColor font-semibold  dark:text-textDarkMode my-10 text-3xl">Top Collections</div>
      {/* table */}
      {/* table heading */}
      <CollectionMenu />
      {/* table item */}
      <CollectionItem />
      <Button
        to={routesConfig.ranking}
        text
        className={'absolute right-0 bottom-[-35px] text-textColor  dark:text-textDarkMode'}
        rightIcon={<FontAwesomeIcon icon={faArrowRight} />}
      >
        More
      </Button>
    </div>
  );
}

export default HomeContent;
