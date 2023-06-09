import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  SearchIcon } from '../../components/Icons';
import { useState } from 'react';
import { useRef } from 'react';
import { useDebounce } from '../../hooks';
import { useEffect } from 'react';

function Ranking() {
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
    <div className="flex min-h-screen flex-col mt-20 pb-20 bg-[#FFFFFF] dark:bg-bgDarkMode text-textColor dark:text-textDarkMode">
      <div className="flex relative flex-col max-w-screen-xl mx-auto w-full">
        <div className=" text-textColor font-semibold  dark:text-textDarkMode my-10 text-3xl">Ranking Collections</div>
        <div className='flex items-center justify-between'>
          {/* Search */}
          <div>
              <div className="relative">
                <button className="absolute inset-y-0 left-0 flex items-center pl-4 text-[#B7BDC6] dark:text-[#5e6673] ">{<SearchIcon width='1.2rem' height='1.2rem' />}</button>
                  <input
                    onFocus={() => setShowResult(true)}
                    ref={refInput}
                    value={searchValue}
                    onChange={handleChange}
                    placeholder="Search"
                    className="h-11 items-center rounded border border-[#eaecef] dark:border-[#474D57] focus:border-primary dark:focus:border-primary dark:bg-bgDarkMode w-[500px] outline-none px-12 text-base text-textColor dark:text-textDarkMode"
                  />
                  {!!searchValue && (
                    <button
                      className="text-[#B7BDC6] dark:text-[#5e6673] pr-5 absolute right-[-6px] top-1/2 translate-y-[-46%] "
                      onClick={handleClear}
                    >
                      <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                  )}
            </div>
          </div>
          <div className='flex'>
            {/* filter price */}
            <div className='flex items-center h-11 px-4 border border-[#eaecef] dark:border-[#474D57] rounded mr-4'>
              <div className='font-semibold text-lg'>Author</div>
            </div>
            {/* filter price */}
            <div className='flex items-center h-11 px-4 border border-[#eaecef] dark:border-[#474D57] rounded mr-4'>
              <div className='font-semibold text-lg'>Filter price</div>
            </div>
            {/* sort */}
            <div className='flex items-center h-11 px-4 border border-[#eaecef] dark:border-[#474D57] rounded'>
              <div className='font-semibold text-lg'>Price to low</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ranking;
