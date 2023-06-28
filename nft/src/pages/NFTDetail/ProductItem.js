import { faCircleInfo, faCircleRadiation, faHeart, faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../components/Button';
import { CheckIcon } from '../../components/Icons';
import useAxios from '../../hooks/useAxios';
import { API_CART, getProductImageUrl } from '../../services/Constant';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import { AuthContext, DarkModeContext } from '../../context';
import { useNavigate } from 'react-router-dom';
import { routesConfig } from '../../config';

function ProductItem({ product = {}, url = false }) {
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
    console.log(id);
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
    <div className="flex flex-col mt-20 pb-20 bg-[#FFFFFF] dark:bg-bgDarkMode text-textColor dark:text-textDarkMode">
      <div className="flex relative max-w-screen-xl mx-auto w-full py-16">
        {/* img */}
        <div className="w-[360px] h-[520px] mr-24 rounded-xl overflow-hidden">
          {url && (
            <img className="w-full h-full object-cover" src={getProductImageUrl(product?.image)} alt="nftitems" />
          )}
        </div>
        {/* content */}
        <div className="flex-1 flex flex-col">
          {/* heading*/}
          <div className="flex justify-between">
            {/* heading-left*/}
            <div className="flex items-center">
              <div className="text-[#c99400]">{product?.categoryName}</div>
              <CheckIcon className={'text-[#f0b90b] ml-1 w-5 h-5'} />
            </div>
            {/* heading-right*/}
            <div className="text-xl text-[#707a8a]">
              <FontAwesomeIcon icon={faHeart} className="cursor-pointer hover:opacity-80" />
              <FontAwesomeIcon icon={faShareNodes} className="mx-8 cursor-pointer hover:opacity-80" />
              <FontAwesomeIcon icon={faCircleInfo} className="cursor-pointer hover:opacity-80" />
            </div>
          </div>

          {/* Name */}
          <div className="text-3xl font-semibold mt-3">{product?.name}</div>
          <div className="flex items-center mt-1 mb-5">
            <div className="text-[#707a8a]">Listed from: {product?.manufacturerName}</div>
            <FontAwesomeIcon icon={faCircleRadiation} className="ml-1 text-[#1a82e3]" />
          </div>

          {/* Price */}
          <div className="text-lg text-[#707a8a]">Price</div>
          {!product?.discount > 0 ? (
            <div className="text-base font-bold dark:text-[#eaecef]">{product?.price}</div>
          ) : (
            <div className="flex items-center">
              <div className="text-lg text-[#707a8a] dark:text-[#b7bdc6] line-through  decoration-double decoration-1">
                {product?.price} USD
              </div>
              <div>
                <div className="ml-3 text-2xl font-bold text-[#f04f4f]">
                  {product?.price * ((100 - product?.discount) / 100)} USD
                </div>
              </div>
            </div>
          )}

          {/* button */}
          <div className="mt-6">
            <Button
              primary
              className={'px-14 py-4 dark:text-textColor text-xl'}
              onClick={() => handleAddToCart(product.id)}
            >
              Add to cart
            </Button>
          </div>

          {/* info */}
          <div className="bg-[#fafafa] dark:bg-[#0b0e11] flex mt-auto p-3 rounded">
            <div className="flex-1 ml-3">
              <div className="font-semibold text-2xl my-2">Product description:</div>
              <div className="text-xl text-[#707a8a]">
                - To complete the transaction, you will need to pay a gas fee and wait for the blockchain confirmation
                which normally takes around 10 minutes; and
                <br />- You are responsible for verifying the identity, legitimacy, and authenticity of this NFT.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
