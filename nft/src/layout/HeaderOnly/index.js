import images from '../../assets/images';
import { DarkIcon, LightIcon } from '../../components/Icons';
import { useContext } from 'react';
import routesConfig from '../../config/routes';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../hooks';

function DefaultLayout({ children }) {
  const context = useContext(DarkModeContext);
  return (
    <div>
      <header className="bg-white dark:bg-bgDarkMode h-20 px-6 w-full  flex shadow-sm  justify-center z-50 border-b border-[#eaecef]">
        <div className=" w-full flex items-center justify-between">
          <div className="flex flex-1">
            {/* header logo */}
            <Link to={routesConfig.home} className="flex select-none">
              <img src={images.logo} alt="Binance" />
            </Link>
            {/* header darkmode */}
          </div>
          <div>
            <button onClick={context.handleDarkModeSwitch} className="ml-1 flex">
              {context.darkMode === 'dark' ? <LightIcon /> : <DarkIcon />}
            </button>
          </div>
        </div>
      </header>
      <div>{children}</div>
      <div className="flex bg-[#FFFFFF] dark:bg-bgDarkMode items-center justify-center text-[#474d57] dark:text-[#b7bdc6]">
        <div className="text-xs text-center px-4 py-3">© 2017 - 2023 Binance.com. All rights reserved</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
