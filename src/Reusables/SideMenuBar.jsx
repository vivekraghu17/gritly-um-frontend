import React, { useEffect, useState } from "react";
import logo from "../Assets/Images/logo.png";
import styles from "../Stylesheets/Reusables/sideMenuBar.module.scss";
import GridViewIcon from "@mui/icons-material/GridView";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import { useLocation, useNavigate } from "react-router-dom";
const sideMenuOptions = [
  {
    key: "dashboard",
    label: "Dashboard",
    logo: <GridViewIcon />,
    active: true,
    selected: true,
    route: "/dashboard",
  },
  {
    key: "bootcamps",
    label: "Bootcamps",
    logo: <LibraryBooksOutlinedIcon />,
    active: true,
    selected: false,
    route: "/bootcamps",
  },
  {
    key: "settings",
    label: "Settings",
    logo: <SettingsOutlinedIcon />,
    active: true,
    selected: false,
    route: "/settings",
  },
];
export const SideMenuBar = (props) => {
  const history = useNavigate();
  const location = useLocation().pathname;
  const [menu, setMenu] = useState(sideMenuOptions);
  const selectHandler = (key) => {
    sideMenuOptions.forEach((item) => {
      if (item.key === key) item.selected = true;
      else item.selected = false;
    });
    setMenu([...sideMenuOptions]);
  };

  useEffect(() => {
    selectHandler(location.substring(1));
  }, []);
  return (
    <>
      <div className={styles["main-div"]}>
        <div className={styles["logo-wrapper"]}>
          <img src={logo} alt="logo" className={styles["logo"]} />
        </div>
        <div className={styles["menu-option-wrapper"]}>
          {menu.map((item) => {
            return (
              <div className={styles["option-wrapper"]} key={item.key}>
                {item.active && (
                  <div
                    className={`${styles["menu-option"]} ${
                      item.selected ? styles["selected"] : ""
                    }`}
                    key={item.key}
                    onClick={() => {
                      selectHandler(item.key);
                      history(item.route);
                    }}
                  >
                    <div className={styles["menu-logo"]}>{item.logo}</div>
                    <div className={styles["menu-label"]}>{item.label}</div>
                  </div>
                )}
                {item.selected && (
                  <div className={styles["select-marker"]}>{""}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SideMenuBar;
