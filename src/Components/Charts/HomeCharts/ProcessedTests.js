import React, { Component } from 'react';
import {PieChart, Pie, Cell, Tooltip, Legend} from 'recharts';


const data = [];

const COLORS = ['#FF8A65', '#D2D2D2'];

class ProcessedQuestions extends Component {
    componentWillMount() {
        data.push(
            {name: 'Procesadas', value: this.props.data.processed},
            {name: 'Não processadas', value: this.props.data.not_processed}
        )
    }

    render() {
        return (
            <div className="card bg-light text-center mr-md-2 mt-md-2">
                <p>Quantidade de provas processadas</p>
                <PieChart width={400} height={300}>
                    <Legend />
                    <Pie
                         outerRadius={80}
                         fill="#8884d8"
                         dataKey="value"
                         data={data}
                          >
                        {
                            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                        }
                    </Pie>
                    <Tooltip />

                </PieChart>
            </div>
        );
    }
}

export default ProcessedQuestions;
