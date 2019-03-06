import React, { Component } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

class TotalQuestions extends Component {
    render() {
        const {total_criadas, total_usadas} = this.props.data;
        return (
            <div className="card bg-light text-center mr-md-2 mt-md-2">
                <p>Total de Questões</p>
                <BarChart
                    width={300}
                    height={300}
                    data={[
                        { name: 'provas', criadas: total_criadas, usadas: total_usadas },

                    ]}
                    margin={{top: 10, right: 10, left: 10, bottom: 10}}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="Total de questões" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="criadas" fill="#53D191" />
                    <Bar dataKey="usadas" fill="#FF8A65" />
                </BarChart>
            </div>
        );
    }
}

export default TotalQuestions;
