import {lazy} from 'react';

const Home = lazy(() => import('@screens/home/Home'));
const Charge = lazy(() => import('@components/Services/Charge'));

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
];

export default routes;
