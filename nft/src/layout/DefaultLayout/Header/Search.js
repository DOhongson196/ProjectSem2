import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import { FireIcon, SearchIcon } from '../../../components/Icons';
import { Wrapper as PopperWrapper } from '../../../components/Popper';
import NFTItems from './NFTItems';
import StraightBrick from '../../../components/Brick';
import { useEffect, useRef, useState } from 'react';
import { useDebounce } from '../../../hooks';

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);

  const debounced = useDebounce(searchValue, 500);

  const refInput = useRef();

  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResult([]);
      return;
    }
    setTimeout(() => {
      setSearchResult([1, 2, 3]);
    }, 0);
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
    <div>
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
        <div className="relative mx-8 flex h-10 items-center rounded-3xl border-2 border-yellow-500 overflow-hidden ">
          <button className="shrink-0 block ml-4 text-[#B7BDC6] dark:text-[#5e6673] ">{<SearchIcon />}</button>
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
