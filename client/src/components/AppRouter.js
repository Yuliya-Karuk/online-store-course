import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { SHOP_ROUTE } from '../utils/consts';
import { Context } from '..';

const AppRouter = () => {
  const {user} = useContext(Context);
  console.log(user);

  return (
    <Routes>
      {user.isAuth && authRoutes.map(route =>
        <Route exact={route.exact} path={route.path} element={route.component} key={route.path} />
      )}
      {publicRoutes.map(route =>
        <Route exact={route.exact} path={route.path} element={route.component} key={route.path} />
      )}
      <Route path="/*" element={<Navigate to={SHOP_ROUTE} replace />} />
    </Routes>
  );
};

export default AppRouter;