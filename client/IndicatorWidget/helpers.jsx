import _ from "lodash";
import moment from "moment";

const dateFormat = "YYYY-MM";

export function getCurrentMonthValues(data) {
  const currentMonth = moment().format(dateFormat);
  const currentMonthValues = data.filter(data => data.date === currentMonth);
  return currentMonthValues;
}

export function getComparedData(data) {
  const currentMonth = moment().format(dateFormat);
  const previousMonth = moment().subtract(1, "month").format(dateFormat);
  const dataInTwoMonths = data.filter(
    data => data.date === currentMonth || data.date === previousMonth
  );
  const groupedDataInTwoMonths = _.groupBy(dataInTwoMonths, "country");

  const comparedData = _.mapValues(groupedDataInTwoMonths, (data, key) => {
    let currentMonthValue, previousMonthValue;
    const currentMonthData = data.find(obj => obj.date === currentMonth);
    currentMonthData
      ? (currentMonthValue = currentMonthData.value)
      : (currentMonthValue = 0);
    const previousMonthData = data.find(obj => obj.date === previousMonth);
    previousMonthData
      ? (previousMonthValue = previousMonthData.value)
      : (previousMonthValue = 0);
    return {
      country: key,
      value: currentMonthValue - previousMonthValue
    };
  });
  return _.values(comparedData);
}
