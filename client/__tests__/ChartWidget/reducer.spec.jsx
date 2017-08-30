import reducer from "../../ChartWidget/reducer";
import * as types from "../../ChartWidget/actionTypes";
import * as sample from "../../SampleData/TestData";
describe("ChartWidget Reducer: ", () => {
  it("should return correct initial state", () => {
    expect(reducer(undefined, {})).toEqual([]);
  });
  it("should return correct state", () => {
    expect(
      reducer([], { type: types.FETCH_SALES_DATA, payload: sample.rawData })
    ).toEqual(sample.rawData);
  });
});
