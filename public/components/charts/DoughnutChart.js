import React from 'react';
import ReactDOM from 'react-dom';

class DoughnutChart extends React.Component {

    componentDidMount = async () => {
        let pdata = [
            {
                value: 300,
                color:"#F7464A",
                highlight: "#FF5A5E",
                label: "Red"
            },
            {
                value: 50,
                color: "#46BFBD",
                highlight: "#5AD3D1",
                label: "Green"
            },
            {
                value: 100,
                color: "#FDB45C",
                highlight: "#FFC870",
                label: "Yellow"
            }
        ];
        let ctxd = window.$("#doughnutChartDemo").get(0).getContext("2d");
        let doughnutChart = new Chart(ctxd).Doughnut(pdata);

    }

    render() {
        return (
            <div className="tile">
                <h3 className="tile-title">Doughnut Chart</h3>
                <div className="embed-responsive embed-responsive-16by9">
                    <canvas className="embed-responsive-item" id="doughnutChartDemo"></canvas>
                </div>
            </div>
        );
    }
}

export default DoughnutChart;

if (document.getElementById('doughnut-chart')) {
    ReactDOM.render(<DoughnutChart />, document.getElementById('doughnut-chart'));
}
