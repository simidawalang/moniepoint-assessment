import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdBarChart } from "react-icons/md";
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
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <IoHome size={30} color="#6473bb" />
      </Link>
      <Link to="/stats">
        <IoStatsChartOutline size={30} color="#bfbfbf" />
      </Link>
      <Link to="/">
        <HiOutlineUsers size={30} color="#bfbfbf" />
      </Link>
      <Link to="/">
        <IoSettingsOutline size={30} color="#bfbfbf" />
      </Link>
    </nav>
  );
};

export default Navbar;
