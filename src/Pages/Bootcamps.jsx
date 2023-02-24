import React from "react";
import styles from "../Stylesheets/bootcamps.module.scss";
import { Button } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import importIcon from "../Assets/Images/importicon.png";
export default function hi() {
  return (
    <div className={styles["main-div"]}>
      <div className={styles["add-bootcamp-section"]}>
        <div className={styles["bootcamp-total-wrapper"]}>
          <div className={styles["bootcamps-label"]}>Bootcamps</div>
          <div className={styles["total-wrapper"]}>
            <div className={styles["total"]}>Total : 0 </div>
            <div className={styles["active"]}>Active : 0</div>
          </div>
        </div>
        <div className={styles["button-wrapper"]}>
          <Button className={styles["import-button"]}>
            <img src={importIcon} alt="import" />
            Import
          </Button>
          <Button className={styles["add-button"]}>
            <AddOutlinedIcon />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
}
