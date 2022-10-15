import React from "react";
import { Link } from "react-router-dom";
import GroupIcon from "@mui/icons-material/Group";
import CottageIcon from "@mui/icons-material/Cottage";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import InputIcon from "@mui/icons-material/Input";
import styles from "./Header.module.scss";

const Header = () => {
  const logoStyle = {
    fontSize: "56px",
    color: "grey",
  };
  return (
    <div className={styles.container}>
      <div className={styles.nav_list}>
        <Link to="/" className={styles.link_logo}>
          <CottageIcon style={logoStyle} />
        </Link>
        <div className={styles.item}>
          <Link to="/users">
            <GroupIcon style={logoStyle} />
          </Link>
          <Link to="/tasks">
            <FormatListNumberedIcon style={logoStyle} />
          </Link>
        </div>

        <Link to="/login">
          <InputIcon style={logoStyle} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
