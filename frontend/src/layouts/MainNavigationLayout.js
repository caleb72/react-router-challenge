import { NavLink, Outlet } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

import styles from "./MainNavigationLayout.module.css";

const MainNavigationLayout = () => {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
};

export default MainNavigationLayout;
