import { combineReducers } from 'redux';
import chart from "./ChartWidget/reducer.jsx";
import toggles from "./ToggleWidget/reducer.jsx";
export default combineReducers({
  chart,
  toggles
});
