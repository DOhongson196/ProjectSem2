import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [login, setLogin] = useState(false);
  let [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
  );
  let contextData = {
    login: login,
    authTokens: authTokens,
    setLogin: setLogin,
    setAuthTokens: setAuthTokens,
  };
  return <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export { AuthContext, AuthProvider };
