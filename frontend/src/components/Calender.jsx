import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const Calender = (props) => (
  <div className="bg-white rounded-lg shadow-md h-700">
    <Calendar
      localizer={localizer}
      events={sampleData}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
);

const sampleData = [
  {
    title: "Workout Name",
    start: new Date("2024-06-17T10:00:00"),
    end: new Date("2024-06-17T11:00:00"),
    allDay: true,
  },
  {
    title: "Workout Name",
    start: new Date("2024-06-18T10:00:00"),
    end: new Date("2024-06-19T11:00:00"),
    allDay: true,
  },
];

export default Calender;
