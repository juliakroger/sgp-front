import React, {Component} from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


const data = [];

class TestsTypes extends Component {

  componentWillMount() {
    if (data.length === 0) {
      let i = 0;
      this.props.nominal.map((value) => {
        let not_nominal = 0;
        if (this.props.not_nominal[i].data === value.data) {
          not_nominal = this.props.not_nominal[i].total;
          i++;
        }
        return data.push({
          name: value.data,
          "nominal": value.total,
          "nao nominal": not_nominal,
        })
      })
    }
  }

  render() {
    return (
        <div className="card bg-light text-center mr-md-2 mt-md-2">
          <p>provas geradas</p>
          <LineChart
              width={600}
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
            <Line type="monotone" dataKey="nominal" stroke="#FFBA65" strokeDasharray="5 5" strokeWidth={2}/>
            <Line type="monotone" dataKey="nao nominal" stroke="#7EBADD" strokeDasharray="3 4 5 2" strokeWidth={2}/>
          </LineChart>
        </div>
    );
  }
}

export default TestsTypes;