import { faAddressCard, faCircleXmark, faHeart, faTags, faUser, faWallet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import images from '../../../assets/images';
import { DarkIcon, FireIcon, LightIcon, SearchIcon } from '../../../components/Icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../../../components/Popper';
import NFTItems from './NFTItems';
import Button from '../../../components/Button';
import { useState } from 'react';
import StraightBrick from '../../../components/Brick';
import MenuAccount from '../../../components/Popper/MenuAccount';

const menuAccountItem = [
  {
    icon: <FontAwesomeIcon icon={faWallet} />,
    title: 'My NFTs',
    to: '/mynfts',
  },
  {
    icon: <FontAwesomeIcon icon={faHeart} />,
    title: 'Favorites',
    to: '/favorites',
  },
  {
    icon: <FontAwesomeIcon icon={faTags} />,
    title: 'History',
    to: '/history',
  },
  {
    icon: <FontAwesomeIcon icon={faAddressCard} />,
    title: 'Profile',
    to: '/profile',
  },
];

function Header() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <header className="header-wrapper h-20 px-6 fixed w-full top-0 left-0 flex shadow-state-100  justify-center z-50 border-b border-[#eaecef]">
      <div className="header-inner w-full flex items-center justify-between">
        {/* header logo */}
        <div className="flex flex-1">
          <img src={images.logo} alt="Binance" />
          {/* header search popper */}
          <Tippy
            placement="bottom"
            interactive
            // visible={false}
            render={(attrs) => (
              <div className="box w-[418px]" tabIndex="-1" {...attrs}>
                <PopperWrapper>
                  <div className="mt-4">
                    <h4 className="flex text-xs items-center text-textColor mb-2 px-4">
                      <span>Trending</span>
                      <FireIcon className={'text-red-500 ml-1'} />
                    </h4>
                    <NFTItems />
                    <NFTItems />
                    <NFTItems />
                    <NFTItems />
                  </div>
                </PopperWrapper>
              </div>
            )}
          >
            {/* header search */}
            <div className="mx-8 flex h-10 items-center rounded-3xl border-2 border-yellow-500 ">
              <button className="shrink-0 block ml-4 text-gray-600 ">{<SearchIcon />}</button>
              <StraightBrick className={'h-[18px] ml-3 mr-0'} />
              <input
                placeholder="Search"
                className="w-80 flex-1 h-full outline-none pl-1 pr-4 text-base text-textColor "
              />
              <button className="text-[#B7BDC6] pr-5">
                <FontAwesomeIcon icon={faCircleXmark} />
              </button>
            </div>
          </Tippy>
          {/* header Ranking */}
          <div className="flex">
            <Button text>Rankings</Button>
            <Button text>Activities</Button>
          </div>
        </div>
        {/* header action */}
        <div className="flex items-center">
          {/* header login */}
          <Button text>Log In</Button>
          {/* header register */}
          <Button primary className={'mx-3'}>
            Register
          </Button>
          {/* header darkmode */}
          <StraightBrick className={'h-[16px]'} />
          <button className="ml-1 flex">{darkMode ? <LightIcon /> : <DarkIcon />}</button>
          <StraightBrick className={'h-[16px]'} />
          {/* header account */}
          <div>
            <MenuAccount items={menuAccountItem}>
              <button className="text-base ml-1 flex">
                <FontAwesomeIcon icon={faUser} />
              </button>
            </MenuAccount>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
