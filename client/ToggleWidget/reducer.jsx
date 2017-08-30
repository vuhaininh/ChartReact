import { TOGGLE_TOTAL, TOGGLE_CUMULATION } from "./actionTypes";
const initState = { isCumulative: false, isTotal: false };
export default function(state = initState, action) {
  switch (action.type) {
    case TOGGLE_CUMULATION:
      return { ...state, isCumulative: !state.isCumulative, isTotal: false };
    case TOGGLE_TOTAL:
      return { ...state, isTotal: !state.isTotal, isCumulative: false };
    default:
      return state;
  }
  return state;
}
