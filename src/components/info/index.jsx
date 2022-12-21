import React from "react";
import styles from './style.module.css';


const Info = (props) => {
  return (
      <div className={styles.container}>
        <p>{props.id}</p>
        <p><span>Title:</span> {props.title}</p>
        <p><span>Body:</span> {props.body}</p>
      </div>
    )
}

export default Info;