import axios from "axios";

export const Metrics=async()=>{

    const response = await axios.get("http://167.235.133.112:3045/api/metrics")
    return response.data.data
}