import routesConfig from '../../../config/routes';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../../components/Button';
import { CollectionItem, CollectionMenu } from '../../../components/Collection';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { API_PRODUCT } from '../../../services/Constant';
import { ToastContainer } from 'react-toastify';

function HomeContent() {
  const [active, setAcvite] = useState(true);
  const [result, setResult] = useState([]);
  useEffect(() => {
    if (active) {
      axios
        .get(API_PRODUCT + '/top/view')
        .then((res) => {
          setResult(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .get(API_PRODUCT + '/top/buy')
        .then((res) => {
          console.log(res);
          setResult(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [active]);
  return (
    <div className="flex relative flex-col max-w-screen-xl mx-auto w-full">
      <div className=" text-textColor font-semibold  dark:text-textDarkMode my-10 text-3xl">Top products</div>
      {/* table */}
      {/* table heading */}
      <CollectionMenu active={active} setAcviteTrue={() => setAcvite(true)} setAcviteFalse={() => setAcvite(false)} />
      {/* table item */}
      {result.map((data, index) => (
        <CollectionItem data={data} key={data.id} index={index} />
      ))}
      <ToastContainer />
      <Button
        to={routesConfig.ranking}
        text
        className={'absolute right-[-20px] bottom-[-35px] text-textColor  dark:text-textDarkMode'}
        rightIcon={<FontAwesomeIcon icon={faArrowRight} />}
      >
        More
      </Button>
    </div>
  );
}

export default HomeContent;
