import React, { Component } from "react";
import style from "../style.less";
import { CURRENT_MONTH_NO_DATA_MESSAGE } from "../constants";
class CurrentMonth extends Component {
  renderSalesValues(currentMonthData) {
    if (currentMonthData.length === 0)
      return (
        <li>
          {CURRENT_MONTH_NO_DATA_MESSAGE}
        </li>
      );
    return currentMonthData.map(data => {
      return (
        <li key={`${data.country} ${data.value}`}>
          {data.country}: {data.value}
        </li>
      );
    });
  }
  render() {
    const { header, currentMonthData } = this.props;
    
    return (
      <div className={style.widget}>
        <h5>
          {header}
        </h5>
        <ul>
          {this.renderSalesValues(currentMonthData)}
        </ul>
      </div>
    );
  }
}

export default CurrentMonth;
