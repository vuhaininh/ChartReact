import React from "react";
import { shallow } from "enzyme";
import PreviousMonthComparison from "../../IndicatorWidget/components/PreviousMonthComparison";
import * as sample from "../../SampleData/TestData";

describe("<PreviousMonthComparison />", () => {
  const header = sample.header;
  const comparedData = sample.comparedData;

  it("renders without exploding", () => {
    const wrapper = shallow(
      <PreviousMonthComparison header={header} comparedData={comparedData} />
    );
    expect(wrapper).toHaveLength(1);
  });

  it("contains right header", () => {
    const wrapper = shallow(
      <PreviousMonthComparison header={header} comparedData={comparedData} />
    );
    expect(wrapper.find("h5").text()).toContain(header);
  });
  it("shows correct number of li", () => {
    const wrapper = shallow(
      <PreviousMonthComparison header={header} comparedData={comparedData} />
    );
    expect(wrapper.find("li")).toHaveLength(4);
  });
  it("shows correct style of negative values", () => {
    const wrapper = shallow(
      <PreviousMonthComparison header={header} comparedData={comparedData} />
    );
    expect(wrapper.find(".text-danger")).toHaveLength(2);
  });
  it("shows correct style of positive values", () => {
    const wrapper = shallow(
      <PreviousMonthComparison header={header} comparedData={comparedData} />
    );
    expect(wrapper.find(".text-success")).toHaveLength(2);
  });
});
