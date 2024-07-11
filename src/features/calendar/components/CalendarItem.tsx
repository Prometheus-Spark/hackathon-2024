import { useState } from "react";
import styles from "../calendar.module.scss";
import { CalendarItemProps } from "../Calendar.types";

function CalendarItem({ date, time, name, info }: CalendarItemProps) {
  const [active, setActive] = useState(false);

  return (
    <div className={styles["calendar-item-container"]}>
      <div className={styles["calendar-item-container-flex"]}>
        <div className={styles["calendar-item-container-date"]}>
          <span>{date}</span> <span>{time}</span>
        </div>
        <div className={styles["calendar-item-container-text"]}>
          <span>{name}</span>
          <button
            className={`${styles["calendar-button"]}`}
            onClick={() => setActive(!active)}
          >
            INFO
          </button>
        </div>
      </div>

      <div
        className={`${styles["content"]} ${
          active ? styles["content-is-open"] : ""
        }`}
      >
        <div className={styles["line"]} />
        {info}
      </div>
    </div>
  );
}

export default CalendarItem;
