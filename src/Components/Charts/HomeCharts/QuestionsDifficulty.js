import React, { Component } from 'react';
import {
    PieChart, Pie, Cell, Legend, Tooltip,
} from 'recharts';

const data = [];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


export default class Example extends Component {
    componentWillMount() {
        this.props.data.map(value => data.push({
                name: value.nome,
                value: parseFloat(value.porcentagem.toFixed(1)),
                total: value.total
            })

        )
    }

    render() {
        return (
            <div className="card bg-light text-center mr-md-2 mt-md-2">
                <p>Questões por dificuldade</p>
                <PieChart width={300} height={300}>
                    <Tooltip />
                    <Legend />
                    <Pie
                        data={data}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label
                    >
                        {
                            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                        }
                    </Pie>
                </PieChart>
            </div>
        );
    }
}
