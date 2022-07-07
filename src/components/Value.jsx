import React from "react";
import "./../styles/Value.css";
function Value({ label, value }) {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-sm text-slate-400">{label}</p>
      <p className="font-mono text-primary-500 bg-primary-50 py-0.5 px-3 text-lg rounded-md w-fit">{value}</p>
    </div>
  );
}

export default Value;
