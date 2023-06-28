import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { routesConfig } from '../../config';
import { AuthContext, DarkModeContext } from '../../context';
import { useAxios } from '../../hooks';
import { API_CART, getProductImageUrl } from '../../services/Constant';
import Button from '../Button';

function NFTItem({ data }) {
  const api = useAxios();
  const { darkMode } = useContext(DarkModeContext);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const notify = () => {
    toast('🦄  Add to cart successfully!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: darkMode === 'light' ? 'light' : 'dark',
    });
  };

  const error = () => {
    toast.error('🦄  Add to cart fail!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: darkMode === 'light' ? 'light' : 'dark',
    });
  };
  const handleAddToCart = (id) => {
    if (!login) {
      return navigate(routesConfig.login);
    }
    console.log(API_CART + '/' + id);
    const fectchApi = async () => {
      try {
        await api.get(API_CART + '/' + id);
        notify();
      } catch (err) {
        if (err.response?.status === 403) {
          navigate(routesConfig.authority);
        } else {
          console.log(err);
          error();
        }
      }
    };

    fectchApi();
  };
  return (
    <div
      className="cursor-pointer w-72 group h-[484px]  shadow-xl bg-white dark:bg-[#1e2329] ease-out rounded-xl transition-all duration-400 hover:translate-y-[-4px] hover:shadow-xl overflow-hidden"
      onClick={() => navigate('/nftdetail/' + data?.id)}
    >
      {/* background image */}
      <div className="object-cover w-full h-[400px]">
        <img className="w-full h-full  object-cover" src={getProductImageUrl(data?.image)} alt="" />
      </div>
      {/* content */}
      <div className="relative group-hover:-mt-11 bg-white dark:bg-[#1e2329]  flex flex-col p-4 overflow-hidden z-10 transition-all ease-linear duration-400">
        <div className="text-xs font-semibold dark:text-[#eaecef]">{data?.name}</div>
        <div className="flex flex-col items-center mt-3">
          <div className="flex justify-between w-full ">
            <div className="text-[#707a8a] dark:text-[#b7bdc6] text-xs mr-2">Price</div>
            <div className=" text-sm font-bold dark:text-[#eaecef]">{data?.price} USD</div>
          </div>
          <div
            className="flex justify-center absolute group-hover:relative mt-4 group-hover:bottom-0 -bottom-14 w-[256px]"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              primary
              className="w-full justify-center items-center whitespace-nowrap px-[12px] py-[8px] dark:text-textColor uppercase"
              onClick={() => handleAddToCart(data?.id)}
            >
              Add to cart now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NFTItem;
