import { FC } from "react";
import {lazy} from 'react';

const Home = lazy(() => import('../screens/home/Home'));
const Charge = lazy(() => import('../screens/services/Charge'));
const Internet = lazy(() => import('../screens/services/Internet'));
const InternetPackage = lazy(() => import('../screens/services/InternetPackage'));
const Transactions = lazy(() => import('../screens/transactions/Transactions'));

export interface IRoutes {
  key: string;
  path: string;
  element: FC;
  title?: string;
}

const routes: IRoutes[] = [
  {
    key: "1e0d5aee-20cf-4ab8-99e2-09ec1dfb0cf7",
    path: '/',
    element: Home,
  },
  {
    key: "1bd38dd1-a68d-4621-ac5e-4dfa24a2e457",
    path: '/service/charge',
    element: Charge,
    title: 'خرید شارژ',
  },
  {
    key: "157b8d7f-4bb5-4bde-bb0c-77277577ffe1",
    path: '/service/internet',
    element: Internet,
    title: 'بسته اینترنت',
  },
  {
    key: "2fa1dd7a-c610-41e6-8514-ab07904dfb95",
    path: '/service/internet/package',
    element: InternetPackage,
    title: 'بسته اینترنت',
  },
  {
    key: "8062f55a-2b7c-4d7d-abf3-08bbe3a11848",
    path: '/transactions',
    element: Transactions,
    title: 'تراکنش ها',
  },
];

export default routes;
