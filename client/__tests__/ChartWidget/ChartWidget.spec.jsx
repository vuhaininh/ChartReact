import React from "react";
import { shallow } from "enzyme";
import ChartWidget from "../../ChartWidget";
import MainChartContainer from "../../ChartWidget/components/MainChartContainer";
describe("<ChartWidget />", () => {
  it("renders without exploding", () => {
    expect(shallow(<ChartWidget />)).toHaveLength(1);
  });
  it("renders MainChartContainerWidget", () => {
    const wrapper = shallow(<ChartWidget />);
    expect(wrapper.find(MainChartContainer)).toHaveLength(1);
  });
});
