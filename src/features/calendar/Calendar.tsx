import CalendarItem from "./components/CalendarItem";
import styles from "./calendar.module.scss";
const CALENDAR_DATA = [
  {
    date: "Monday, July 1",
    time: "7:00 PM",
    name: "Event One",
    info: "This is a detailed description of Event One. It includes all relevant information about the event.",
  },
  {
    date: "Tuesday, July 2",
    time: "6:30 PM",
    name: "Event Two",
    info: "This is a detailed description of Event Two. It includes all relevant information about the event.",
  },
  {
    date: "Wednesday, July 3",
    time: "5:00 PM",
    name: "Event Three",
    info: "This is a detailed description of Event Three. It includes all relevant information about the event.",
  },
  {
    date: "Thursday, July 4",
    time: "8:00 PM",
    name: "Event Four",
    info: "This is a detailed description of Event Four. It includes all relevant information about the event.",
  },
  {
    date: "Friday, July 5",
    time: "9:00 PM",
    name: "Event Five",
    info: "This is a detailed description of Event Five. It includes all relevant information about the event.",
  },
];
function Calendar() {
  return (
    <section className="section">
      <div className={styles["calendar-container"]}>
        {CALENDAR_DATA.map((item, index) => (
          <CalendarItem
            key={index}
            date={item.date}
            time={item.time}
            name={item.name}
            info={item.info}
          />
        ))}
      </div>
    </section>
  );
}

export default Calendar;
