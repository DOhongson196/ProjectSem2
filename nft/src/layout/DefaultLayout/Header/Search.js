import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import { FireIcon, SearchIcon } from '../../../components/Icons';
import { Wrapper as PopperWrapper } from '../../../components/Popper';
import NFTItems from './NFTItems';
import StraightBrick from '../../../components/Brick';
import { useEffect, useRef, useState } from 'react';
import { useDebounce } from '../../../hooks';
import { Link } from 'react-router-dom';
import { API_PRODUCT } from '../../../services/Constant';
import axios from 'axios';
import Skeleton from './Skeleton';
//import routesConfig from '../../../config/routes';

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const debounced = useDebounce(searchValue, 500);

  const refInput = useRef();

  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResult([]);
      return;
    }
    setLoading(true);
    const fectchApi = async () => {
      try {
        const response = await axios.get(API_PRODUCT + `/header/find?query=${debounced}`);
        console.log(response.data);
        setSearchResult(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fectchApi();
  }, [debounced]);

  const handleClear = () => {
    setSearchValue('');
    setSearchResult([]);
    refInput.current.focus();
  };

  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(' ')) {
      setSearchValue(searchValue);
    }
  };

  return (
    <div className="flex items-center">
      <Tippy
        placement="bottom"
        interactive
        visible={showResult && searchResult.length > 0}
        onClickOutside={() => setShowResult(false)}
        render={(attrs) => (
          <div className="box w-[418px]" tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <div className="mt-4">
                <h4 className="flex text-xs items-center text-textColor dark:text-textDarkMode mb-2 px-4">
                  <span className="dark:text-[#848e9c]">Trending</span>
                  <FireIcon className={'text-red-500 ml-1'} />
                </h4>
                {!loading
                  ? searchResult.map((result) => <NFTItems key={result.id} data={result} />)
                  : Array(3)
                      .fill(0)
                      .map((item, index) => <Skeleton key={index} />)}
              </div>
            </PopperWrapper>
          </div>
        )}
      >
        {/* header search */}
        <div className="relative mx-8 flex h-10 items-center rounded-3xl border-2 border-primary overflow-hidden ">
          <Link to={'/search/keyword=' + searchValue} className="flex select-none">
            <button className="shrink-0 block ml-4 text-[#B7BDC6] dark:text-[#5e6673] ">{<SearchIcon />}</button>
          </Link>
          <StraightBrick className={'h-[18px] ml-3 mr-0'} />
          <input
            onFocus={() => setShowResult(true)}
            ref={refInput}
            value={searchValue}
            onChange={handleChange}
            placeholder="Search"
            className="dark:bg-bgDarkMode w-80 flex-1 h-full outline-none pl-1 mr-10 text-base text-textColor dark:text-textDarkMode "
          />
          {!!searchValue && (
            <button
              className="  text-[#B7BDC6] dark:text-[#5e6673] pr-5 absolute right-[-6px] top-1/2 translate-y-[-46%] "
              onClick={handleClear}
            >
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}
        </div>
      </Tippy>
    </div>
  );
}

export default Search;
