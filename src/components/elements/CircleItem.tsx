import styles from "@templates/MainPage.module.css";
import { FC } from "react";

const CircleItem:FC<{number:string}> = ({ number }) => {
  return (
    <div className={styles.circleitem}>
      <div>
        <div>{number}</div>
      </div>
    </div>
  );
}

export default CircleItem;
