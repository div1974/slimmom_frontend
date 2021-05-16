import React, { useEffect, Suspense, lazy } from 'react';
import { Switch, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import queryString from 'query-string';
import { authOperations, authSelectors } from '../../redux/auth';
import { saveUserData } from '../../redux/auth/auth-actions';

import Loader from '../Loader/Loader';
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';
import PublicRoute from '../../components/PublicRoute/PublicRoute';

const AuthPageRender = lazy(() => import('./AuthPage'));

export default function AuthPage() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);
  const errorStatus = useSelector(authSelectors.getErrorStatus);
  const location = useLocation();
  const query = queryString.parse(location.search);

  useEffect(() => {
    if (query.token) {
      dispatch(saveUserData({ ...query }));
    }
    dispatch(authOperations.fetchWithRefreshToken());
  }, []);

  useEffect(() => {
    if (errorStatus === 403) {
      return dispatch(authOperations.fetchWithRefreshToken());
    }
  }, [dispatch, errorStatus]);

  return (
    <>
      {isFetchingCurrentUser ? (
        <Loader />
      ) : (
        <>
            <Suspense fallback={<Loader />}>
              <Switch>
                <PublicRoute exact path="/auth" redirectTo="/" restricted>
                  <AuthPageRender />
                </PublicRoute>
                <PrivateRoute exact path="/" redirectTo="/auth">
                </PrivateRoute>
              </Switch>
            </Suspense>
        </>
      )}
    </>
  );
}