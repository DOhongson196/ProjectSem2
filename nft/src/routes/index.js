import { routesConfig } from '../config';

//Layout
import { HeaderOnly } from '../layout';

import Home from '../pages/Home';
import Search from '../pages/Search';
import Explore from '../pages/Explore';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Register from '../pages/Register';
import Ranking from '../pages/Ranking';
import NFTDetail from '../pages/NFTDetail';
import Cart from '../pages/Cart';
import NotFound from '../pages/NotFound';
import Checkout from '../pages/CheckOut';

const publicRoutes = [
  { path: routesConfig.home, component: Home },
  { path: routesConfig.search, component: Search },
  { path: routesConfig.explore, component: Explore },
  { path: routesConfig.login, component: Login, layout: HeaderOnly },
  { path: routesConfig.profile, component: Profile, layout: null },
  { path: routesConfig.register, component: Register, layout: HeaderOnly },
  { path: routesConfig.ranking, component: Ranking },
  { path: routesConfig.nftdetail, component: NFTDetail },
  { path: routesConfig.cart, component: Cart },
  { path: routesConfig.notFound, component: NotFound },
  { path: routesConfig.checkout, component: Checkout, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
