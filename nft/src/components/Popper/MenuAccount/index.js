import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../../Popper';
import MenuItem from './MenuItem';

function MenuAccount({ children, items = [] }) {
  const renderItems = () => {
    return items.map((item, index) => <MenuItem key={index} data={item} />);
  };
  return (
    <Tippy
      placement="bottom-end"
      interactive
      delay={[0, 300]}
      hideOnClick={false}
      render={(attrs) => (
        <div className="box w-[200px]" tabIndex="-1" {...attrs}>
          <PopperWrapper className={'bg-white dark:bg-[#1e2329] pb-0'}>
            <div className="flex p-4 text-xl font-semibold text-textColor dark:text-textDarkMode leading-5">
              do***@gmail.com
            </div>
            <div>{renderItems()}</div>
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default MenuAccount;
