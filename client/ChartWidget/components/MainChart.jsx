import React from "react";
import { Line, Bar } from "react-chartjs-2";

function MainChart(props) {
  const { data, header, type, options } = props;

  return (
    <div>
      <h3>
        {header}
      </h3>
      {type === "Line"
        ? <Line data={data} />
        : <Bar data={data} options={options} />}
    </div>
  );
}
export default MainChart;
