import { faAddressCard, faHeart, faTags, faUser, faSignOut, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import images from '../../../assets/images';
import { DarkIcon, LightIcon } from '../../../components/Icons';
import Button from '../../../components/Button';
import { useContext, useEffect, useState } from 'react';
import StraightBrick from '../../../components/Brick';
import MenuAccount from '../../../components/Popper/MenuAccount';
import MenuUtil from '../../../components/Popper/MenuUtil';
import routesConfig from '../../../config/routes';
import Search from './Search';
import { Link } from 'react-router-dom';
import { AuthContext, DarkModeContext } from '../../../context';
import { API_CATEGORY } from '../../../services/Constant';
import axios from 'axios';

const menuAccountItem = [
  {
    icon: <FontAwesomeIcon icon={faHeart} />,
    title: 'Favorites',
    to: '/favorites',
  },
  {
    icon: <FontAwesomeIcon icon={faTags} />,
    title: 'My Orders',
    to: '/myorder',
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
  const context = useContext(DarkModeContext);
  const { login } = useContext(AuthContext);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fectchApi = async () => {
      try {
        const response = await axios.get(API_CATEGORY + '/status');
        setCategory(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fectchApi();
  }, []);

  return (
    <header className="bg-white dark:bg-bgDarkMode h-20 px-28 fixed w-full top-0 left-0 flex shadow-sm  justify-center z-50 border-b border-[#eaecef]">
      <div className=" w-full flex items-center justify-between">
        <div className="flex flex-1">
          {/* header logo */}
          <Link to={routesConfig.home} className="flex select-none">
            <img src={images.logo} alt="Incredible" className="w-[120px] h-[100px]" />
          </Link>
          {/* header search*/}
          <Search />

          {/* header Ranking */}
          <div className="flex items-center">
            <Link to={routesConfig.ranking} className="select-none">
              <Button text>Rankings</Button>
            </Link>
            <MenuUtil items={category}>
              <div className="select-none ml-5 cursor-pointer hover:text-[#c99400] font-semibold text-textColor dark:text-textDarkMode dark:hover:text-[#c99400]">
                Product
              </div>
            </MenuUtil>
          </div>
        </div>
        {/* header action */}
        <div className="flex items-center">
          {login ? (
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
          {/* header cart */}
          <StraightBrick className={'h-[16px]'} />
          <Link className="flex" to={routesConfig.cart}>
            <FontAwesomeIcon
              icon={faCartShopping}
              className={'dark:text-textDarkMode hover:text-[#c99400] dark:hover:text-[#c99400]'}
            />
          </Link>
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
