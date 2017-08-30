import reducer from "../../ToggleWidget/reducer";
import * as types from "../../ToggleWidget/actionTypes";
describe("Toggle Reducer: ", () => {
  it("should return correct initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      isCumulative: false,
      isTotal: false
    });
  });
  it("should return correct toggle total state", () => {
    expect(reducer({ isCumulative: true, isTotal: false }, {type: types.TOGGLE_TOTAL})).toEqual({
      isCumulative: false,
      isTotal: true
    });
  });
  it("should return correct toggle cumulation state", () => {
    expect(reducer({ isCumulative: true, isTotal: false }, {type: types.TOGGLE_CUMULATION})).toEqual({
      isCumulative: false,
      isTotal: false
    });
  });
});
