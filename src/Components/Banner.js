import { style } from "@mui/system";
import React from "react";
import styles from "./component.module.css";
import Carousel from "./Carousel";
const Banner = () => {
  return (
    <>
      <div className={styles.banner}>
        <div className={styles.bannercontent}>
          <h3>Crypto Tracker</h3>
          <p>One Place to get info about your Favouraite Cryptocurrency</p>
        </div>
        <Carousel/>
      </div>
    
    </>
  );
};

export default Banner;
