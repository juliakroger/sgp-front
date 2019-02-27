import React, { Component } from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

class TotalQuestions extends Component {
    render() {

        return (
            <div>
                <p>{this.props.data.total_criadas}</p>
                <p>{this.props.data.total_usadas}</p>
                <BarChart
                    width={370}
                    height={200}
                    data={[
                        { name: " Totais de Questões", criadas: 1000, usadas: 2400},
                    ]}
                    margin={{top: 5, right: 30, left: 30, bottom: 5,}}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="criadas" fill="#8884d8" />
                    <Bar dataKey="usadas" fill="#82ca9d" />
                </BarChart>
            </div>
        );
    }
}

export default TotalQuestions;
