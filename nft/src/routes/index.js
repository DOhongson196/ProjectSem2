import routesConfig from '../config/routes';

//Layout
import { HeaderOnly } from '../layout';

import Home from '../pages/Home';
import Search from '../pages/Search';
import Explore from '../pages/Explore';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Register from '../pages/Register';

const publicRoutes = [
  { path: routesConfig.home, component: Home },
  { path: routesConfig.search, component: Search },
  { path: routesConfig.explore, component: Explore },
  { path: routesConfig.login, component: Login, layout: HeaderOnly },
  { path: routesConfig.profile, component: Profile, layout: null },
  { path: routesConfig.register, component: Register, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
