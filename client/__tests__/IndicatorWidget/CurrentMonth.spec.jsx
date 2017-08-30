import React from "react";
import { shallow } from "enzyme";
import CurrentMonth from "../../IndicatorWidget/components/CurrentMonth";
import * as message from "../../IndicatorWidget/constants";
import * as constants from "../../SampleData/TestData";
describe("<CurrentMonth />", () => {
  const header = constants.header;
  const currentMonthData = constants.currentMonthData;
  it("renders without exploding", () => {
    const wrapper = shallow(
      <CurrentMonth header={header} currentMonthData={currentMonthData} />
    );
    expect(wrapper).toHaveLength(1);
  });
  it("contains right header", () => {
    const wrapper = shallow(
      <CurrentMonth header={header} currentMonthData={currentMonthData} />
    );
    expect(wrapper.find("h5").text()).toContain(header);
  });
  it("shows correct number of li", () => {
    const wrapper = shallow(
      <CurrentMonth header={header} currentMonthData={currentMonthData} />
    );
    expect(wrapper.find("li")).toHaveLength(4);
  });
  it("shows correct number of li when there is no data", () => {
    const wrapper = shallow(
      <CurrentMonth header={header} currentMonthData={[]} />
    );
    expect(wrapper.find("li")).toHaveLength(1);
  });
  it("shows correct message when there is no data", () => {
    const wrapper = shallow(
      <CurrentMonth header={header} currentMonthData={[]} />
    );
    expect(wrapper.find("li").text()).toContain(
      message.CURRENT_MONTH_NO_DATA_MESSAGE
    );
  });
});
