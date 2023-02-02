import images from '../../assets/images';
import { DarkIcon, LightIcon } from '../../components/Icons';
import { useContext } from 'react';
import routesConfig from '../../config/routes';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../hooks';

function DefaultLayout() {
  const context = useContext(DarkModeContext);
  return (
    <header className="bg-white dark:bg-bgDarkMode h-20 px-6 fixed w-full top-0 left-0 flex shadow-sm  justify-center z-50 border-b border-[#eaecef]">
      <div className=" w-full flex items-center justify-between">
        <div className="flex flex-1">
          {/* header logo */}
          <Link to={routesConfig.home} className="flex select-none">
            <img src={images.logo} alt="Binance" />
          </Link>
          {/* header darkmode */}

          <button onClick={context.handleDarkModeSwitch} className="ml-1 flex">
            {context.darkMode === 'dark' ? <LightIcon /> : <DarkIcon />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default DefaultLayout;
