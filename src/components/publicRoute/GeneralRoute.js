import React from "react";
import { Route, Redirect } from "react-router-dom";
import Calculator from "../../pages/calculator/Calculator";

const GeneralRoute = ({path,exact,component,dailyRate}) => {
  return  (dailyRate ? 
    <Route path={path} exact={exact} component={component}/> :
    <Redirect to="/calculator"/>
    )
  
}
 

export default GeneralRoute;