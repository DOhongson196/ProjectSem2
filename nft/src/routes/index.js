//Layout
import { HeaderOnly } from '../layout';

import Home from '../pages/Home';
import Search from '../pages/Search';
import Explore from '../pages/Explore';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Register from '../pages/Register';

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/search', component: Search },
  { path: '/explore', component: Explore },
  { path: '/login', component: Login, layout: HeaderOnly },
  { path: '/profile', component: Profile, layout: null },
  { path: '/register', component: Register, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
