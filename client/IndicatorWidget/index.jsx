import React, { Component } from "react";
import style from "./style.less";
import CurrentMonthContainer from "./components/CurrentMonthContainer";
import PreviousMonthComparisonContainer from "./components/PreviousMonthComparisonContainer";
class Indicator extends Component {
  render() {
    return (
      <div className={style.container}>
        <CurrentMonthContainer />
        <PreviousMonthComparisonContainer />
      </div>
    );
  }
}

export default Indicator;
