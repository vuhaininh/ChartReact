import { FETCH_SALES_DATA } from "./actionTypes";
import { API_ROOT } from "./constants";
import axios from "axios";

export function fetchSalesData() {
  const requestUrl = API_ROOT;
  const request = axios.get(requestUrl);
  return dispatch => {
    request
      .then(response => {
        dispatch({ type: FETCH_SALES_DATA, payload: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };
}
