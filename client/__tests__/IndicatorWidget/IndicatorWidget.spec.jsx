import React from "react";
import { shallow } from "enzyme";
import IndicatorWidget from "../../IndicatorWidget";
import CurrentMonthContainer from "../../IndicatorWidget/components/CurrentMonthContainer";
import PreviousMonthComparisonContainer from "../../IndicatorWidget/components/PreviousMonthComparisonContainer";
describe("<IndicatorWidget />", () => {
  it("renders without exploding", () => {
    expect(shallow(<IndicatorWidget />)).toHaveLength(1);
  });
  it("renders CurrentMonthContainer", () => {
    const wrapper = shallow(<IndicatorWidget />);
    expect(wrapper.find(CurrentMonthContainer)).toHaveLength(1);
  });
  it("renders PreviousMonthComparisonContainer", () => {
    const wrapper = shallow(<IndicatorWidget />);
    expect(wrapper.find(PreviousMonthComparisonContainer)).toHaveLength(1);
  });
});
