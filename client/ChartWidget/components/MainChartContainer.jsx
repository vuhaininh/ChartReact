import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSalesData } from "../actions";
import MainChart from "./MainChart";
import * as constants from "../constants";
import { getChartData } from "../selector";
/* Chart Widget may contain different Charts in the future.
   Names of Chart Components depend on particular requirements and should be informative.
   In this case, since there is only one chart is used containing data of whole application, I named it MainChart.
   It should be refactored appropriately later
*/
export class MainChartContainer extends Component {
  componentDidMount() {
    this.props.fetchSalesData();
  }
  render() {
    const { chartData, chartType, options } = this.props.chartData;
    return (
      <MainChart
        data={chartData}
        type={chartType}
        options={options}
        header={constants.CHART_HEADER}
      />
    );
  }
}
function mapStateToProps(state) {
  return { chartData: getChartData(state) };
}
export default connect(mapStateToProps, { fetchSalesData })(MainChartContainer);
