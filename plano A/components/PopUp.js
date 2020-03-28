import React from "react";
import Popup from "reactjs-popup";
import styles from './Comps.module.css'
 
export default () => (
  <Popup trigger={<button className={styles.btt}></button>} position="right center">
    <div className={styles.popdiv}>Conteudo a ser colocado</div>
  </Popup>
);