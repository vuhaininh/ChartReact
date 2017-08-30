import React from 'react';
import ChartWidget from '../ChartWidget';
import IndicatorWidget from '../IndicatorWidget';
import ToggleWidget from '../ToggleWidget';
import style from './style.less';

function Dashboard() {
  return (
    <div>
      <div className="row">
        <div className="col-md-9">
          <ChartWidget />
        </div>
        <div className="col-md-3">
          <ToggleWidget />
          <IndicatorWidget />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
