import {lazy} from 'react';

const Home = lazy(() => import('@screens/home/Home'));
const Charge = lazy(() => import('@screens/services/Charge'));
const Internet = lazy(() => import('@screens/services/Internet'));
const InternetPackage = lazy(() => import('@screens/services/InternetPackage'));

const routes = [
  {
    key: 1,
    path: '/',
    element: Home,
  },
  {
    key: 2,
    path: '/service/charge',
    element: Charge,
    title: 'خرید شارژ',
  },
  {
    key: 3,
    path: '/service/internet',
    element: Internet,
    title: 'بسته اینترنت',
  },
  {
    key: 4,
    path: '/service/internet/package',
    element: InternetPackage,
    title: 'بسته اینترنت',
  },
];

export default routes;
