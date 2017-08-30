import React from "react";
import { shallow } from "enzyme";
import MainChart from "../../ChartWidget/components/MainChart";
import { Line, Bar } from "react-chartjs-2";

describe("<MainChart />", () => {
  it("renders without exploding", () => {
    expect(shallow(<MainChart />)).toHaveLength(1);
  });
  it("renders Bar Chart", () => {
    const wrapper = shallow(<MainChart />);
    expect(wrapper.find(Bar)).toHaveLength(1);
  });
  it("renders Line Chart", () => {
    const wrapper = shallow(<MainChart type="Line" />);
    expect(wrapper.find(Line)).toHaveLength(1);
  });
});
