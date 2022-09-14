import { data } from "autoprefixer";
import React, { useEffect, useContext } from "react";
import Box from "./Box";
import cpu from "../assets/icons/cpu.png";
import ram from "../assets/icons/ram.png";

import {
  LineChart,
  AreaChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  ReferenceArea,
  Label,
} from "recharts";
import MetricContext from "../stores/metrics/MetricContext";
import { Metrics } from "../stores/metrics/MetricAction";

export default function LineCharts({ height }) {
  const { data, dispatch } = useContext(MetricContext);
  const resdata = async () => {
    const metrics = await Metrics();
    dispatch({ type: "METRIC", payload: metrics });
  };
  useEffect(() => {
    resdata();
  }, []);

  return (
    <>
      <div className="flex flex-row justify-around">
        <Box className="w-72">
          <img src={cpu} />
          <div className="flex flex-row items-center">
       <h6>CPU Usage:</h6>
          <p className="text-xs pl-4">{data && data[data.length - 1].cpu_usage_pct} %</p>
   
          </div>
        </Box>
        <Box className="w-72">
          <img src={ram} />
          <div className="flex flex-row items-center">
          <h6>Total Ram Usage:</h6>
          <p className="text-xs pl-4">{data && data[data.length - 1].ram_total_mb} mb</p>
          </div>
        </Box>
        <Box className="w-72">
          <img src={ram} />
          <div className="flex flex-row items-center">
            <h6>CPU Usage:</h6>
            <p className="text-xs pl-4">
              {data && data[data.length - 1].ram_usage_mb} mb
            </p>
          </div>
        </Box>
        <Box className="w-72">
          <img src={ram} />
          <div className="flex flex-row items-center">
            <h6>Ram Usage:</h6>
            <p className="text-xs pl-4">
              {data && data[data.length - 1].ram_usage_pct} %
            </p>
          </div>
          <div className="border-black"></div>

        </Box>
      </div>
      <div
        className="highlight-bar-charts"
        style={{ userSelect: "none", width: "100%" }}
      >
        <br />
      </div>
      <div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            width={1400}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="cpu_usage_pct"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="ram_usage_pct"
              stroke="#82ca9d"
              label="Ali"
              animateNewValues={true}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
