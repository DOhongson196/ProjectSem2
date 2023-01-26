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
      delay={[0, 500]}
      render={(attrs) => (
        <div className="box w-[200px]" tabIndex="-1" {...attrs}>
          <PopperWrapper>
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
