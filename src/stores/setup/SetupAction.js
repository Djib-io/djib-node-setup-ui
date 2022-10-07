import axios from "axios";

export const setupInfo = async () => {
  const response = await axios.get("/api/is-setup");

  let data =  response.data.data;
  if(data.staked) {
    const response2 = await axios.post("/api/reward/get", {
      token: localStorage.getItem("djibtoken"),
    });
    data.reward = response2.data.data
  }

    return data
};
