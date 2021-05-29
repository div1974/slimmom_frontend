import { lazy } from 'react';

const mainRoutes = [
  {
    path: '/',
    name: 'Home',
    exact: true,
    component: lazy(() => import('../pages/home/Home' /* webpackChunkName: "HomePage"*/)),
    isPrivate: false,
    restricted: false,
    general: true
  },
  {
    path: '/login',
    name: 'Вход',
    exact: false,
    component: lazy(() => import('../pages/login/Login' /* webpackChunkName: "LoginPage"*/)),
    isPrivate: false,
    restricted: true,
    
  },
  {
    path: '/register',
    name: 'Регистрация',
    exact: false,
    component: lazy(() => import('../pages/registration/Registration' /* webpackChunkName: "RegistrationPage"*/)),
    isPrivate: false,
    restricted: true,
  },
  {
    path: '/diary',
    name: 'Дневник',
    exact: false,
    component: lazy(() => import('../pages/diary/Diary' /* webpackChunkName: "DiaryPage"*/)),
    isPrivate: true,
    restricted: true,
  },
  {
    path: '/calculator',
    name: 'Калькулятор',
    exact: false,
    component: lazy(() => import('../pages/calculator/Calculator' /* webpackChunkName: "CalculatorPage"*/)),
    isPrivate: true,
    restricted: false,
  },
];

export default mainRoutes;
