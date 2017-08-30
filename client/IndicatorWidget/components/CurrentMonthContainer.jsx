import React, { Component } from "react";
import { connect } from "react-redux";
import CurrentMonth from "./CurrentMonth";
import * as constants from "../constants";
import { getCurrentMonthData } from "../selector";
class CurrentMonthContainer extends Component {
  render() {
    const data = this.props.data;
    return (
      <CurrentMonth
        currentMonthData={data}
        header={constants.CURRENT_MONTH_HEADER}
      />
    );
  }
}

function mapStateToProps(state) {
  return { data: getCurrentMonthData(state) };
}
export default connect(mapStateToProps)(CurrentMonthContainer);
