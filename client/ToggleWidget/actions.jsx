import { TOGGLE_TOTAL, TOGGLE_CUMULATION } from "./actionTypes";

export function toggleTotal() {
  return { type: TOGGLE_TOTAL };
}

export function toggleCumulation() {
  return { type: TOGGLE_CUMULATION };
}
