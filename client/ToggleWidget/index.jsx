import React, { Component } from "react";
import style from "./style.less";
import ToggleContainer from "./components/ToggleContainer";

class ToggleWidget extends Component {
  render() {
    return (
      <div className={style.container}>
        <ToggleContainer />
      </div>
    );
  }
}

export default ToggleWidget;
