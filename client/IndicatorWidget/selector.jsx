// Use Reselect to improve performance
import { createSelector } from "reselect";
import { getCurrentMonthValues, getComparedData } from "./helpers";

const chartData = state => state.chart;

export const getCurrentMonthData = createSelector([chartData], data => getCurrentMonthValues(data));
export const getCompareToPreviousMonthData = createSelector([chartData], data => getComparedData(data));
