import React, { Component } from "react";
import style from "../style.less";
class PreviousMonthComparison extends Component {
  renderData(comparedData) {
    return comparedData.map(data => {
      return (
        <li key={`${data.country} ${data.value}`}>
          {data.country}:{" "}
          <span className={data.value < 0 ? "text-danger" : "text-success"}>
            {data.value}
          </span>
        </li>
      );
    });
  }
  render() {
    const { header, comparedData } = this.props;
    return (
      <div>
        <h5 className={style.widget}>
          {header}
        </h5>
        <ul>
          {this.renderData(comparedData)}
        </ul>
      </div>
    );
  }
}

export default PreviousMonthComparison;
