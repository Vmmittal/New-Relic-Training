import React from "react";
import { LineChart } from 'nr1'

export default class ExampleLinechart extends React.Component{
    render(){
        const linechart1 = {
            metadata :{
                id: 'line-chart-1',
                name: 'Version A',
                viz: 'main',
                color: 'red'
            },
            data :[
                {x: 0 , y:0},
                {x: 10, y:20},
                {x: 30, y:40}
            ]
        }
        // return <LineChart data={[linechart1]} fullWidth />;
        return <LineChart
        accountId={4042730}
        query="SELECT average(host.cpuPercent) AS 'CPU used %' FROM Metric WHERE `entityGuid` = 'NDA0MjczMHxJTkZSQXxOQXwxNDgyOTIzNTg3ODAyOTE4NzU5' TIMESERIES auto" 
        fullWidth
      />;
    }
}