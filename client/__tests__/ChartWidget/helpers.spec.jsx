import * as helpers from "../../ChartWidget/helpers";
import _ from "lodash";
import * as sample from "../../SampleData/TestData";

describe("ChartWidget helpers", () => {
  it("getChartLabels returns correct chartLabels", () => {
    expect(helpers.getChartLabels(sample.rawData, "date")).toEqual(
      sample.dateLabels
    );
    expect(helpers.getChartLabels(sample.rawData, "country")).toEqual([
      "Finland",
      "Denmark",
      "Germany",
      "Spain"
    ]);
  });
  it("groupDataByKey returns correct values", () => {
    expect(
      helpers.groupDataByKey(
        [
          { date: "2016-12", value: 9000, goal: 3798, country: "Finland" },
          { date: "2016-12", value: 3536, goal: 3215, country: "Denmark" },
          { date: "2016-12", value: 4049, goal: 6523, country: "Germany" },
          { date: "2016-12", value: 5974, goal: 4362, country: "Spain" },
          { date: "2017-01", value: 6644, goal: 5222, country: "Finland" },
          { date: "2017-01", value: 6046, goal: 6472, country: "Denmark" },
          { date: "2017-01", value: 4824, goal: 7024, country: "Germany" },
          { date: "2017-01", value: 4972, goal: 6394, country: "Spain" }
        ],
        "country"
      )
    ).toEqual({
      Denmark: [
        { country: "Denmark", date: "2016-12", goal: 3215, value: 3536 },
        { country: "Denmark", date: "2017-01", goal: 6472, value: 6046 }
      ],
      Finland: [
        { country: "Finland", date: "2016-12", goal: 3798, value: 9000 },
        { country: "Finland", date: "2017-01", goal: 5222, value: 6644 }
      ],
      Germany: [
        { country: "Germany", date: "2016-12", goal: 6523, value: 4049 },
        { country: "Germany", date: "2017-01", goal: 7024, value: 4824 }
      ],
      Spain: [
        { country: "Spain", date: "2016-12", goal: 4362, value: 5974 },
        { country: "Spain", date: "2017-01", goal: 6394, value: 4972 }
      ]
    });
  });

  it("cumulateDataByKey returns correct values", () => {
    expect(
      helpers.cumulateDataByKey(
        {
          Denmark: [
            { country: "Denmark", date: "2016-12", goal: 3215, value: 3536 },
            { country: "Denmark", date: "2017-01", goal: 6472, value: 6046 }
          ],
          Finland: [
            { country: "Finland", date: "2016-12", goal: 3798, value: 9000 },
            { country: "Finland", date: "2017-01", goal: 5222, value: 6644 }
          ],
          Germany: [
            { country: "Germany", date: "2016-12", goal: 6523, value: 4049 },
            { country: "Germany", date: "2017-01", goal: 7024, value: 4824 }
          ],
          Spain: [
            { country: "Spain", date: "2016-12", goal: 4362, value: 5974 },
            { country: "Spain", date: "2017-01", goal: 6394, value: 4972 }
          ]
        },
        "value"
      )
    ).toEqual({
      Denmark: { value: 9582 },
      Finland: { value: 15644 },
      Germany: { value: 8873 },
      Spain: { value: 10946 }
    });
  });
});
