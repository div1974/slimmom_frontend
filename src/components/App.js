import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Header from './header/Header';
import Main from './main/Main';
import LoaderSpinner from '../components/loader/Loader';
import isLoading from '../redux/selectors/loaderSelector';
import authOperations from '../redux/operations/authOperations';

const App = () => {
  const loading = useSelector(isLoading);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(authOperations.refreshOperation()).catch(error => {
      history.push('/login');
    });
  }, []);

  return (
    <>
      <Header />

      {loading && <LoaderSpinner />}

      <Main />
    </>
  );
};

export default App;
