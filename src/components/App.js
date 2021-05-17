import React from "react";
import AuthComponent from "../components/AuthPage/AuthComponent";
// import AppNavTest from './Navigation/AppNavTest';
import DailyCaloriesForm from "./DailyCaloriesForm/DailyCaloriesForm";

export default function App() {
  return (
    <>
      <AuthComponent />
      {/* <AppNavTest /> */}
      <DailyCaloriesForm />
    </>
  );
}
