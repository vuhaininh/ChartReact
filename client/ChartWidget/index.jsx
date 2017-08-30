import React, { Component } from "react";
import style from "./style.less";
import MainChartContainer from "./components/MainChartContainer";

/* Chart Widget may contain different Charts in the future.
   Names of Chart Component depend on particular requirements and should be informative.
   In this case, since there is only one chart is used containing data of whole application, I named it MainChart.
   It should be refactored appropriately later
*/
class Chart extends Component {
  render() {
    return (
      <div className={style.container}>
        <MainChartContainer />
      </div>
    );
  }
}

export default Chart;
