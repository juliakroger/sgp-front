import React, {Component} from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';


const data = [];

class TestsByMonth extends Component {

  componentWillMount() {
    this.props.data.map(value => data.push({
          "name": value.data,
          "total": value.total,
        }),
    )
  }

  render() {
    return (
        <div className="card bg-light text-center mr-md-2 mt-md-2">
          <p>Provas corrigidas por mes</p>
          <LineChart
              width={700}
              height={300}
              data={data}
              margin={{
                top: 5, right: 30, left: 20, bottom: 5,
              }}
          >
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip/>
            <Legend/>
            <Line type="monotone" dataKey="total" stroke="#53D191" activeDot={{r: 10}} strokeWidth={2}/>
          </LineChart>
        </div>
    );
  }
}

export default TestsByMonth;