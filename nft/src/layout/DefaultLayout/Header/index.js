import { faAddressCard, faHeart, faTags, faUser, faWallet, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import images from '../../../assets/images';
import { DarkIcon, LightIcon } from '../../../components/Icons';
import Button from '../../../components/Button';
import { useContext } from 'react';
import StraightBrick from '../../../components/Brick';
import MenuAccount from '../../../components/Popper/MenuAccount';
import routesConfig from '../../../config/routes';
import Search from './Search';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../../hooks';

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
  {
    icon: <FontAwesomeIcon icon={faSignOut} />,
    title: 'Log out',
    to: '/logout',
    separate: true,
  },
];

function Header() {
  const isLogin = false;
  const context = useContext(DarkModeContext);

  return (
    <header className="bg-white dark:bg-bgDarkMode h-20 px-6 fixed w-full top-0 left-0 flex shadow-sm  justify-center z-50 border-b border-[#eaecef]">
      <div className=" w-full flex items-center justify-between">
        <div className="flex flex-1">
          {/* header logo */}
          <Link to={routesConfig.home} className="flex select-none">
            <img src={images.logo} alt="Binance" />
          </Link>
          {/* header search*/}
          <Search />

          {/* header Ranking */}
          <div className="flex">
            <Link to={routesConfig.ranking} className="flex select-none">
              <Button text>Rankings</Button>
            </Link>
            <Button text>Explore</Button>
          </div>
        </div>
        {/* header action */}
        <div className="flex items-center">
          {isLogin ? (
            <>
              {/* header account */}
              <div className="mr-2 dark:text-textDarkMode">
                <MenuAccount items={menuAccountItem}>
                  <button className="text-base ml-1 flex hover:text-[#c99400]">
                    <FontAwesomeIcon icon={faUser} />
                  </button>
                </MenuAccount>
              </div>
            </>
          ) : (
            <>
              {/* header login */}
              <Link to={routesConfig.login} className="flex">
                <Button text>Log In</Button>
              </Link>
              {/* header register */}
              <Link to={routesConfig.register} className="flex">
                <Button primary className={'mx-3 dark:text-textColor'}>
                  Register
                </Button>
              </Link>
            </>
          )}
          {/* header darkmode */}
          <StraightBrick className={'h-[16px]'} />
          <button onClick={context.handleDarkModeSwitch} className="ml-1 flex">
            {context.darkMode === 'dark' ? <LightIcon /> : <DarkIcon />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
