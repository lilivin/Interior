import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../navigation";
import styles from "./index.module.scss";

function HeaderLayout() {
  return (
    <>
      <header className={styles.header}>
        <Navigation />
      </header>
      <div className={styles.content}>
        <Outlet />
      </div>
    </>
  );
}

export default HeaderLayout;
