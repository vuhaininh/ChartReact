import { createSelector } from "reselect";
import _ from "lodash";
import moment from "moment";
import {
  formatToMultiSeriesChartData,
  formatToSingleSeriesChartData,
  groupDataByKey,
  getChartLabels,
  cumulateDataByKey
} from "./helpers";
const chartData = state => state.chart;
const toggles = state => state.toggles;

export const getChartData = createSelector(
  [chartData, toggles],
  (data, toggles) => {
    const { isCumulative, isTotal } = toggles;

    if (!isCumulative && !isTotal) {
      return getDefaultChartData(data);
    }

    if (isCumulative) {
      return getCumulativeChartData(data);
    }

    if (isTotal) {
      return getTotalChartData(data);
    }
  }
);

function getDefaultChartData(data) {
  const groupedDataByCountry = groupDataByKey(data, "country");
  const chartLabelKey = "date";
  const seriesDataKey = "value";
  const chartLabels = getChartLabels(data, chartLabelKey); // Labels of the Chart
  const chartData = formatToMultiSeriesChartData(
    groupedDataByCountry,
    chartLabels,
    chartLabelKey,
    seriesDataKey
  );
  return { chartData, chartType: "Line", options: {} };
}

function getCumulativeChartData(data) {
  const dateFormat = "YYYY-MM";
  const thisYear = moment().format("YYYY");
  const thisYearData = data.filter(data => {
    const year = moment(data.date, dateFormat).format("YYYY");
    return year === thisYear;
  });

  const groupedDataByCountry = groupDataByKey(thisYearData, "country");
  const cumulativeData = cumulateDataByKey(groupedDataByCountry, "value");
  const seriesLabel = "This year cumulative values";
  const seriesDataKey = "value";
  const chartData = formatToSingleSeriesChartData(
    cumulativeData,
    seriesLabel,
    seriesDataKey
  );
  return {
    chartData,
    chartType: "Bar",
    options: {}
  };
}
function getTotalChartData(data) {
  const groupedDataByMonth = groupDataByKey(data, "date");
  const totalValuePerMonth = cumulateDataByKey(groupedDataByMonth, "value");
  const seriesLabel = "Total values per month";
  const seriesDataKey = "value";
  const chartData = formatToSingleSeriesChartData(
    totalValuePerMonth,
    seriesLabel,
    "value"
  );
  return {
    chartData,
    chartType: "Bar",
    options: {}
  };
}
