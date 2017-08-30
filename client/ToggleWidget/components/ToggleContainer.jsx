import React, { Component } from "react";
import { connect } from "react-redux";
import Toggle from "./Toggle";
import { toggleTotal, toggleCumulation } from "../actions";

class ToggleContainer extends Component {
  componentDidMount() {}
  render() {
    const { toggles, toggleTotal, toggleCumulation } = this.props;

    return (
      <Toggle
        isCumulative={toggles.isCumulative}
        isTotal={toggles.isTotal}
        toggleTotal={toggleTotal}
        toggleCumulation={toggleCumulation}
      />
    );
  }
}
function mapStateToProps(state) {
  return { toggles: state.toggles };
}
export default connect(mapStateToProps, { toggleTotal, toggleCumulation })(
  ToggleContainer
);
