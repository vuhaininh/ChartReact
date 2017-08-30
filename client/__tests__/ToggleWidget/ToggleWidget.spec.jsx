import React from "react";
import { shallow } from "enzyme";
import ToggleWidget from "../../ToggleWidget";
import ToggleContainer from "../../ToggleWidget/components/ToggleContainer";
describe("<ToggleWidgetWidget />", () => {
  it("renders without exploding", () => {
    expect(shallow(<ToggleWidget />)).toHaveLength(1);
  });
  it("renders ToggleContainer", () => {
    const wrapper = shallow(<ToggleWidget />);
    expect(wrapper.find(ToggleContainer)).toHaveLength(1);
  });
});
