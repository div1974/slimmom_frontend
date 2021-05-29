import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({
  path,
  exact,
  component,
  restricted,
  dailyRate,
  isAuth
}) => {

  return( isAuth && dailyRate ?
    (<Route path={path} exact={exact} component={component} />) :

    !restricted && !dailyRate ? 
    (<Route path={path} exact={exact} component={component} />):

    (<Redirect to="/calculator" />) 
  
  )
    
};

export default PrivateRoute;
