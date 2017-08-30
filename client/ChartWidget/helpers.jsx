import _ from "lodash";
import randomColor from "randomcolor";
export function formatToMultiSeriesChartData(
  groupedData,
  chartLabels,
  chartLabelKey,
  seriesDataKey
) {
  /*
    chartLabelKey,: ex: date
    seriesDataKey: ex value
    Note: According Chart.JS data format, it might be confusing between Labels of the Chart and Label of the Series
    Labels of the Chart (chartLabels)
    Label of the Series can be get from GroupedData (Group key). ex Finland, Germany
  */
  const chartDataSets = _.map(groupedData, function(data, key) {
    const seriesData = getSeriesData(
      data,
      chartLabels,
      chartLabelKey,
      seriesDataKey
    );
    const seriesLabel = key; // label of Series
    const lineColor = randomColor({ hue: "random" });
    return getChartDataSet(seriesLabel, seriesData, lineColor);
  });

  return { labels: chartLabels, datasets: chartDataSets }; // Chart JS Data Format
}
export function formatToSingleSeriesChartData(
  groupedData,
  seriesLabel,
  seriesDataKey
) {
  const chartLabels = Object.keys(groupedData);
  const seriesData = _.map(groupedData, data => data[seriesDataKey]);
  const color = randomColor();
  const backgroundColor = seriesData.map(data => color);
  const chartData = {
    labels: chartLabels,
    datasets: [
      {
        label: seriesLabel,
        data: seriesData,
        backgroundColor: backgroundColor
      }
    ]
  };
  return chartData;
}

export function groupDataByKey(data, key) {
  return _.groupBy(data, obj => obj[key]);
}
export function cumulateDataByKey(inputData, valueKey) {
  return _.mapValues(inputData, (data, key) => {
    const cumulation = data.reduce(
      (cumulation, element) => {
        return {
          ...cumulation,
          value: cumulation[valueKey] + element[valueKey]
        };
      },
      { value: 0 }
    );

    return cumulation;
  });
}
// Labels of the Chart (X axis)
export function getChartLabels(data, key) {
  return _.map(_.uniqBy(data, key), item => item[key]);
}
function getChartDataSet(label, data, lineColor) {
  // Series (Dataset) Format of Chart JS
  return {
    label: label, // Label of Series -
    fill: false,
    lineTension: 0.1,
    backgroundColor: lineColor,
    borderColor: lineColor, // The main line color
    borderCapStyle: "square",
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: "miter",
    pointBorderColor: lineColor,
    pointBackgroundColor: lineColor,
    pointBorderWidth: 1,
    pointHoverRadius: 8,
    pointHoverBackgroundColor: lineColor,
    pointHoverBorderColor: lineColor,
    pointHoverBorderWidth: 2,
    pointRadius: 4,
    pointHitRadius: 10,
    barStrokeWidth: 0,
    // notice the gap in the data and the spanGaps: false
    data: data, //Data of the series
    spanGaps: false
  };
}
// Series == Dataset
function getSeriesData(data, chartLabels, labelKey, valueKey) {
  // We have to map chartLabels because Data series may miss some values in particular chart labels
  // Forexample: There is no Sales Value Information in Finland in 2016-01, data should be null
  const dataSet = _.map(chartLabels, function(label) {
    const element = _.find(data, obj => obj[labelKey] === label);
    if (element) return element[valueKey];
    else {
      return null;
    }
  });
  return dataSet;
}
