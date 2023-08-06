import React from 'react';
import ExampleLinechart from './ExampleLC2';
import ExamplePiechart from './ExamplePC';
import ExampleAreachart from './ExampleAC';

export default class MyChartsNerdlet extends React.Component {
  render() {
    return  (  
      <div>
        <h2>Line Chart</h2>
        <ExampleLinechart />
        <h2>Pie chart</h2>
        <ExamplePiechart />
        <h2>Area Chart</h2>
        <ExampleAreachart />
        
      </div>
    )
  }
}
