import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  IoHome,
  IoHomeOutline,
  IoStatsChart,
  IoStatsChartOutline,
  IoSettings,
  IoSettingsOutline,
} from "react-icons/io5";
import { HiOutlineUsers, HiUsers } from "react-icons/hi";
import styles from "./navbar.module.css";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav className={styles.navbar}>
      <Link to="/">
        {pathname === "/" ? (
          <IoHome size={30} color="#6473bb" />
        ) : (
          <IoHomeOutline size={30} color="#6473bb" />
        )}
      </Link>
      <Link to="/stats">
        {pathname === "/stats" ? (
          <IoStatsChart size={30} color="#6473bb" />
        ) : (
          <IoStatsChartOutline size={30} color="#bfbfbf" />
        )}
      </Link>
      <Link to="/profile">
        {pathname === "/profile" ? (
          <HiUsers size={30} color="#6473bb" />
        ) : (
          <HiOutlineUsers size={30} color="#bfbfbf" />
        )}
      </Link>
      <Link to="/settings">
        {pathname === "/settings" ? (
          <IoSettings size={30} color="#6473bb" />
        ) : (
          <IoSettingsOutline size={30} color="#bfbfbf" />
        )}
      </Link>
    </nav>
  );
};

export default Navbar;
