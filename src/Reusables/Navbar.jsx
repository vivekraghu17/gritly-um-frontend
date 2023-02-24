import React from "react";
import styles from "../Stylesheets/Reusables/navbar.module.scss";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import userimage from "../Assets/Images/user-image.png";
export default function Navbar() {
  return (
    <div className={styles["main-div"]}>
      <div className={styles["navbar-wrapper"]}>
        <div className={styles["user-profile-section"]}>
          <MailOutlinedIcon />
          <div className={styles["delimiter"]} />
          <div className={styles["user-name-wrapper"]}>
            <div className={styles["name"]}>Jonny Wilkinson</div>
            <div className={styles["role"]}>Admin</div>
          </div>
          <div className={styles["user-image"]}>
            <img src={userimage} alt="user" className={styles["image"]} />
          </div>
        </div>
      </div>
    </div>
  );
}
