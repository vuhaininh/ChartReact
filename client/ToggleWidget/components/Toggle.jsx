import React, { Component } from "react";
import style from "../style.less";
import * as constants from "../constants";
class Toggle extends Component {
  render() {
    const { isCumulative, isTotal, toggleTotal, toggleCumulation } = this.props;

    return (
      <div className={style.toggle}>
        <button
          type="button"
          className="btn btn-primary col-md-8"
          onClick={toggleCumulation}
        >
          {isCumulative
            ? constants.VALUES_PER_MONTH
            : constants.CUMULATIVE_VALUES}
        </button>
        <button
          type="button"
          className="btn btn-success btn-toggle col-md-8"
          onClick={toggleTotal}
        >
          {isTotal ? constants.PER_COUNTRY : constants.TOTAL}
        </button>
      </div>
    );
  }
}
export default Toggle;
