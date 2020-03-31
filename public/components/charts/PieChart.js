import React from 'react';
import ReactDOM from 'react-dom';

class PieChart extends React.Component {

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
        let ctxp = window.$("#pieChartDemo").get(0).getContext("2d");
        let pieChart = new Chart(ctxp).Pie(pdata);

    }

    render() {
        return (
            <div className="tile">
                <h3 className="tile-title">Pie Chart</h3>
                <div className="embed-responsive embed-responsive-16by9">
                    <canvas className="embed-responsive-item" id="pieChartDemo"></canvas>
                </div>
            </div>
        );
    }
}

export default PieChart;

if (document.getElementById('pie-chart')) {
    ReactDOM.render(<PieChart />, document.getElementById('pie-chart'));
}
