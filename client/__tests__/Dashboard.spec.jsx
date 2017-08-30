import React from "react";
import { shallow, mount } from "enzyme";
import Dashboard from "../Dashboard";
import ChartWidget from "../ChartWidget";
import IndicatorWidget from "../IndicatorWidget";
import ToggleWidget from "../ToggleWidget";
describe("<Dashboard />", () => {
  it("renders without exploding", () => {
    expect(shallow(<Dashboard />)).toHaveLength(1);
  });
  it("renders ChartWidget", () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.find(ChartWidget)).toHaveLength(1);
  });
  it("renders IndicatorWidget", () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.find(IndicatorWidget)).toHaveLength(1);
  });
  it("renders ToggleWidget", () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.find(ToggleWidget)).toHaveLength(1);
  });
});
