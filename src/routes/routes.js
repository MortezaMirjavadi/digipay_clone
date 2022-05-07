import {lazy} from 'react';

const Home = lazy(() => import('@screens/home/Home'));
const Charge = lazy(() => import('@screens/services/Charge'));
const Internet = lazy(() => import('@screens/services/Internet'));

const routes = [
  {
    key: 1,
    path: '/',
    element: Home,
  },
  {
    key: 2,
    path: '/services/charge',
    element: Charge,
    title: 'خرید شارژ',
  },
  {
    key: 3,
    path: '/services/internet',
    element: Internet,
    title: 'بسته اینترنت',
  },
];

export default routes;
