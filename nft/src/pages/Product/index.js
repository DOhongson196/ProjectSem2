import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SearchIcon } from '../../components/Icons';
import { useState } from 'react';
import { useRef } from 'react';
import { useDebounce } from '../../hooks';
import { useEffect } from 'react';
import NFTItem from '../../components/Collection/NFTItem';
import Select from './Select';
import Pagination from '../../components/Pagination';
import images from '../../assets/images';
//import Skeleton from '../../components/Collection/NFTItemSkeleton';

const sortPrice = [
  {
    id: 1,
    name: 'Price Low - High',
  },
  {
    id: 2,
    name: 'Price High - Low',
  },
  {
    id: 3,
    name: 'Recently Created',
  },
];

const people = [
  {
    id: 1,
    name: 'All author',
    avatar: images.logo,
  },
  {
    id: 2,
    name: 'Wade Cooper',
    avatar:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 3,
    name: 'Arlene Mccoy',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 4,
    name: 'Devon Webb',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
  },
  {
    id: 5,
    name: 'Tom Cook',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

const filter = [
  {
    id: 1,
    name: 'Price < 100$',
  },
  {
    id: 2,
    name: 'Price > 100$ & Price < 500$',
  },
  {
    id: 3,
    name: 'Price > 500$',
  },
];

function Ranking() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  console.log(currentPage);

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
        {/* nav bar */}
        <div className="flex items-center justify-between">
          {/* Search */}
          <div className="flex flex-1">
            <div className="relative w-10/12">
              <button className="absolute inset-y-0 left-0 flex items-center pl-4 text-[#B7BDC6] dark:text-[#5e6673] ">
                {<SearchIcon width="1.2rem" height="1.2rem" />}
              </button>
              <input
                ref={refInput}
                value={searchValue}
                onChange={handleChange}
                placeholder="Search"
                className="h-11 items-center rounded border border-[#eaecef] dark:border-[#474D57] focus:border-primary dark:focus:border-primary dark:bg-bgDarkMode w-full outline-none px-12 text-base text-textColor dark:text-textDarkMode"
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
          <div className="flex">
            {/* filter author */}
            <Select list={people} img />
            {/* filter price */}
            <Select list={filter} />
            {/* sort */}
            <Select list={sortPrice} />
          </div>
        </div>
        {/* item */}
        <div className="grid grid-cols-4 gap-10 mt-14 ">
          <NFTItem />
          <NFTItem />
          <NFTItem />
          <NFTItem />
          <NFTItem />
        </div>
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={6} />
      </div>
    </div>
  );
}

export default Ranking;
