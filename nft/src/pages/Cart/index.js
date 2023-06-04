import Button from '../../components/Button';
import CartItem from './CartItem';
import { routesConfig } from '../../config';
import { Link } from 'react-router-dom';

function Cart() {
  return (
    <div className="flex flex-col mt-20 pb-20 bg-[#FFFFFF] dark:bg-bgDarkMode">
      <div className="flex relative flex-col max-w-screen-xl mx-auto w-full">
        {/* Heading */}
        <div className="text-textColor mx-auto dark:text-textDarkMode my-10 text-3xl font-semibold">Shopping Cart</div>
        {/* Menu */}
        <div className="flex w-full h-10 border-b border-[#EAECEF] font-semibold text-base items-center text-textColor dark:text-[#848e9c]">
          <div className="flex items-center w-[480px] pb-4 justify-start">Product</div>
          <div className="flex items-center w-[175px] pb-4 justify-center  mr-48 cursor-pointer">
            <span className="mr-1">Price</span>
          </div>
          <div className="flex items-center w-[165px] pb-4 justify-center mr-20 cursor-pointer">
            <span className="mr-1">Quantity</span>
          </div>
          <div className="flex items-end w-[200px] pb-4 justify-end ">Total</div>
        </div>
        {/* CartItem */}
        <CartItem />
        <CartItem />
        <CartItem />
        {/* Checkout */}
        <div className="grid grid-cols-3 ">
          <div className="col-end-5 w-[350px] bg-[#f5f5f5] dark:bg-[#0b0e11] p-6 mt-5 rounded-xl">
            <div className="flex justify-between font-bold text-lg  text-textColor dark:text-[#eaecef] mb-2">
              <span>Subtotal</span>
              <span>800 USD</span>
            </div>
            <span className="text-textColor dark:text-[#848e9c] text-sm ">Free shipping and taxes</span>
            <div className="flex relative text-textColor dark:text-[#848e9c] text-sm my-4">
              <input type="checkbox" className="w-4 absolute top-1" defaultChecked />
              <span className="ml-6">By sharing an email, you agree to the Terms of Service and Privacy Policy.</span>
            </div>
            <Link to={routesConfig.checkout}>
              <Button primary className={'w-full justify-center dark:text-textColor py-2'}>
                PROCEED TO CHECKOUT
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
