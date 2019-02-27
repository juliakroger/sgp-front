import React, { PureComponent } from 'react';
import {
    PieChart, Pie, Sector, Cell,Label
} from 'recharts';



const data02 = [
    { name: 'A1', value: 100 },
    { name: 'A2', value: 300 },
    { name: 'B1', value: 100 },

];

export default class Example extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/w6wsrc52/';

    render() {
        return (
            <PieChart width={400} height={400}>
                <Label value="Pages of my website" position="top" />
                <Pie data={data02} dataKey="value" cx={200} cy={200} outerRadius={60} fill="#8884d8" />
                <Pie data={data02} dataKey="value" cx={200} cy={200} innerRadius={70} outerRadius={90} fill="#82ca9d" label />
            </PieChart>
        );
    }
}
