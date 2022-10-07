import axios from "axios";
import prettydate from "pretty-date";

export const Metrics=async()=>{

    const response = await axios.get("/api/metrics")
    let data = response.data.data
    for(let i = 0; i < data.length; i++)
        data[i]['time'] = prettydate.format(new Date(data[i]['time']+'Z'))

    return data
}