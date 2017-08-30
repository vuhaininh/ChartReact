import React from "react";
import { shallow } from "enzyme";
import Toggle from "../../ToggleWidget/components/Toggle";
import * as constants from "../../ToggleWidget/constants";
describe("<Toggle />", () => {
  it("renders without exploding", () => {
    expect(shallow(<Toggle />)).toHaveLength(1);
  });
  it("has 2 buttons", () => {
    expect(shallow(<Toggle />).find("button")).toHaveLength(2);
  });
  it("shows right text when cumulative values are selected", () => {
    const wrapper = shallow(<Toggle isCumulative={true} />);
    expect(wrapper.text()).toContain(constants.VALUES_PER_MONTH);
  });
  it("shows text when per month are selected", () => {
    const wrapper = shallow(<Toggle isCumulative={false} />);
    expect(wrapper.text()).toContain(constants.CUMULATIVE_VALUES);
  });
  it("shows right text when total values are selected", () => {
    const wrapper = shallow(<Toggle isTotal={true} />);
    expect(wrapper.text()).toContain(constants.PER_COUNTRY);
  });
  it("shows right text when per country values are selected", () => {
    const wrapper = shallow(<Toggle isTotal={false} />);
    expect(wrapper.text()).toContain(constants.TOTAL);
  });
});
