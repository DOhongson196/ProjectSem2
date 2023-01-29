import { faAddressCard, faHeart, faTags, faUser, faWallet, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import images from '../../../assets/images';
import { DarkIcon, LightIcon } from '../../../components/Icons';
import Button from '../../../components/Button';
import { useEffect, useState } from 'react';
import StraightBrick from '../../../components/Brick';
import MenuAccount from '../../../components/Popper/MenuAccount';
import routesConfig from '../../../config/routes';
import Search from './Search';
import { Link } from 'react-router-dom';

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
  const isLogin = true;
  const [darkMode, setDarkMode] = useState('light');

  useEffect(() => {
    if (localStorage.getItem('theme') === null) {
      localStorage.setItem('theme', 'light');
    }
  }, []);

  useEffect(() => {
    const html = document.querySelector('html');
    if (localStorage.getItem('theme') === 'dark') {
      html.classList.add('dark');
      setDarkMode('dark');
    } else {
      html.classList.remove('dark');
      setDarkMode('light');
    }
  }, [darkMode]);

  const handleDarkModeSwitch = () => {
    if (localStorage.getItem('theme') === 'light') {
      setDarkMode('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setDarkMode('light');
      localStorage.setItem('theme', 'light');
    }
  };

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
            <Button text>Rankings</Button>
            <Button text>Activities</Button>
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
              <Button text>Log In</Button>
              {/* header register */}
              <Button primary className={'mx-3 dark:text-textColor'}>
                Register
              </Button>
            </>
          )}
          {/* header darkmode */}
          <StraightBrick className={'h-[16px]'} />
          <button onClick={handleDarkModeSwitch} className="ml-1 flex">
            {darkMode === 'dark' ? <LightIcon /> : <DarkIcon />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
