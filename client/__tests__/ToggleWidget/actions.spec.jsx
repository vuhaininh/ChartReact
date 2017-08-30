import { toggleTotal, toggleCumulation } from "../../ToggleWidget/actions";
import * as types from "../../ToggleWidget/actionTypes";
describe("Toggle actions creator: ", () => {
  it("toggleToTal returns correct action", () => {
    expect(toggleTotal()).toEqual({type: types.TOGGLE_TOTAL});
  });
  it("toggleCumulation returns correct action", () => {
    expect(toggleCumulation()).toEqual({type: types.TOGGLE_CUMULATION});
  });
});
