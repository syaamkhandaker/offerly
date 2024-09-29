import axios from "axios";

export const triggerFilter = async () => {

  const res = await axios.post("/api/parse", {
    accessToken: localStorage.getItem("accessToken"),
  });

};
