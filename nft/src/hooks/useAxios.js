import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { useContext } from 'react';
import { AuthContext } from '../context';

const useAxios = () => {
  const { setLogin } = useContext(AuthContext);

  const axiosInstance = axios.create({});

  axiosInstance.interceptors.request.use(
    function (config) {
      let localStorageData = localStorage.getItem('user');
      if (localStorage && typeof localStorageData === 'string') {
        localStorageData = JSON.parse(localStorageData);
        const accessToken = localStorageData?.accessToken;
        const expires = jwtDecode(localStorageData?.accessToken);
        if (Date.now() >= expires * 1000) {
          setLogin(false);
          localStorage.removeItem('user');
          localStorage.removeItem('keep');
        }
        config.headers = { authorization: `Bearer ${accessToken}` };
        return config;
      } else return config;
    },
    function (err) {
      return Promise.reject(err);
    },
  );

  return axiosInstance;
};

export default useAxios;
