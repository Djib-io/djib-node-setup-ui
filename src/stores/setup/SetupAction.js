import axios from "axios";

export const setupInfo = async () => {
  const response = await axios.get("http://167.235.133.112:3045/api/is-setup");

  return response.data.data;
};
