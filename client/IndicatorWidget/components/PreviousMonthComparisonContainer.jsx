import React, { Component } from "react";
import { connect } from "react-redux";
import { getComparedData } from "../helpers";
import PreviousMonthComparison from "./PreviousMonthComparison";
import * as constants from "../constants";
import { getCompareToPreviousMonthData } from "../selector";
class PreviousMonthComparisonContainer extends Component {
  render() {
    const data = this.props.data;
    return (
      <PreviousMonthComparison
        comparedData={data}
        header={constants.PREVIOUS_MONTH_COMPARISON_HEADER}
      />
    );
  }
}

function mapStateToProps(state) {
  return { data: getCompareToPreviousMonthData(state) };
}
export default connect(mapStateToProps)(PreviousMonthComparisonContainer);
