import axios from "axios";

export const triggerFilter = async () => {
  const res = await axios.post("/api/parse", {
    accessToken: localStorage.getItem("accessToken"),
  });
  console.log(res.data);
};

export const triggerCalendarReminders = async () => {
  const res = await axios.post("/api/calendar", {
    accessToken: localStorage.getItem("accessToken"),
  });
  console.log(res.data);
};
