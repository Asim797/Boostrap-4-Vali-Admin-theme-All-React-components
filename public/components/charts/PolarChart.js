import React from 'react';
import ReactDOM from 'react-dom';

class PolarChart extends React.Component {

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

        let ctxpo = window.$("#polarChartDemo").get(0).getContext("2d");
        let polarChart = new Chart(ctxpo).PolarArea(pdata);

    }

    render() {
        return (
            <div className="tile">
                <h3 className="tile-title">Polar Chart</h3>
                <div className="embed-responsive embed-responsive-16by9">
                    <canvas className="embed-responsive-item" id="polarChartDemo"></canvas>
                </div>
            </div>
        );
    }
}

export default PolarChart;

if (document.getElementById('polar-chart')) {
    ReactDOM.render(<PolarChart />, document.getElementById('polar-chart'));
}
