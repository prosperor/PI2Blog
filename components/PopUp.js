import React from "react";
import Popup from "reactjs-popup";
import styles from './Comps.module.css'
 
export default () => (
  <Popup trigger={<button className={styles.btt}> Trigger</button>} position="right center">
    <div className={styles.popdiv}>Popup content here !!</div>
  </Popup>
);