import React, { Suspense } from 'react';
import { Route, Switch, /*Redirect*/ } from 'react-router-dom';
import DiaryPage from '../../views/TestDiaryPage';
import CalculatorPage from '../../views/TestCalculatorPage'
import Navigation from './Navigation'
// import Home from '../../views/Home'
import routes from '../../routes'

// const AsyncDiary = lazy(() =>
//   import('../../views/DiaryPage')
// );

// const AsyncCalculator = lazy(() =>
//   import('../../views/CalculatorPage')
// );

const AppNav = () => (
  <>
    <Navigation />
    {/* <Modal /> */}
    <Suspense>
      <Switch>
        {/* <Route path='/' exact component={Home} /> */}
        <Route path={routes.diary} exact component={DiaryPage} />
        <Route path={routes.calculator} exact component={CalculatorPage} />
      </Switch>
    </Suspense>
  </>
);

export default AppNav;