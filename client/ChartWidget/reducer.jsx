import { FETCH_SALES_DATA } from "./actionTypes";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_SALES_DATA:
      return action.payload;
    default:
      return state;
  }
  return state;
}
