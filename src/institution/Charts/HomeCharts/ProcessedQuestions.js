import React, {Component} from 'react';
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';


const data = [];

class ProcessedQuestions extends Component {
  componentWillMount() {
    if (data.length === 0) {
      this.props.data.map(value => data.push({
            total: value.total,
            data: value.data,
          }),
      )
    }

  }

  render() {
    return (
        <div className="card bg-light text-center mr-md-2 mt-md-2">
          <p>Questões criadas por mes</p>
          <AreaChart
              width={700}
              height={300}
              data={data}
              margin={{
                top: 10, right: 30, left: 0, bottom: 30,
              }}
          >
            <CartesianGrid stroke="#ccc"/>
            <XAxis dataKey="data" interval={0} angle={-25}/>
            <YAxis/>
            <Tooltip/>
            <Area type="monotone" dataKey="total" stroke="#a979d1" fill="#a979d1"/>
          </AreaChart>
        </div>
    );
  }
}

export default ProcessedQuestions;