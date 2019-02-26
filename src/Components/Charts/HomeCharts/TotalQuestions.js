import  React from 'react';
import { Chart } from 'react-google-charts';

const Charts = (props) => {
        return (
            <div>
                <div className={"my-pretty-chart-container"}>
                    <p>{props.data.total_criadas + props.data.total_usadas}</p>
                    <Chart
                        chartType="ColumnChart"
                        width="500px"
                        height="400px"
                        data={[
                            ['Move', 'Percentage'],
                            ["Criadas", 12],
                            ["Usadas", 10],
                        ]}
                    />
                </div>



            </div>
        );
};


export default Charts;