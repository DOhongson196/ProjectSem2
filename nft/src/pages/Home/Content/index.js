import routesConfig from '../../../config/routes';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../../components/Button';
import { CollectionItem, CollectionMenu } from '../../../components/Collection';
import { useState } from 'react';

function HomeContent() {
  const [active,setAcvite] = useState(true);
  console.log(active);
  return (
    <div className="flex relative flex-col max-w-screen-xl mx-auto w-full">
      <div className=" text-textColor font-semibold  dark:text-textDarkMode my-10 text-3xl">Top products</div>
      {/* table */}
      {/* table heading */}
      <CollectionMenu active={active} setAcviteTrue={() => setAcvite(true)} setAcviteFalse={() => setAcvite(false)} />
      {/* table item */}
      <CollectionItem />
      <Button
        to={routesConfig.ranking}
        text
        className={'absolute right-[-20px] bottom-[-35px] text-textColor  dark:text-textDarkMode'}
        rightIcon={<FontAwesomeIcon icon={faArrowRight} />}
      >
        More
      </Button>
    </div>
  );
}

export default HomeContent;
