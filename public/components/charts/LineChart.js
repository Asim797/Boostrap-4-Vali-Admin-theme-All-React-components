import React from 'react';
import ReactDOM from 'react-dom';

class LineChart extends React.Component {

    componentDidMount = async () => {
        let data = {
            labels: ["January", "February", "March", "April", "May"],
            datasets: [
                {
                    label: "My First dataset",
                    fillColor: "rgba(220,220,220,0.2)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: [65, 59, 80, 81, 56]
                },
                {
                    label: "My Second dataset",
                    fillColor: "rgba(151,187,205,0.2)",
                    strokeColor: "rgba(151,187,205,1)",
                    pointColor: "rgba(151,187,205,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(151,187,205,1)",
                    data: [28, 48, 40, 19, 86]
                }
            ]
        };
        let ctxb = window.$("#lineChartDemo").get(0).getContext("2d");
        let barChart = new Chart(ctxb).Line(data);
    }

    render() {
        return (
                <div className="tile">
                    <h3 className="tile-title">Line Chart</h3>
                    <div className="embed-responsive embed-responsive-16by9">
                        <canvas className="embed-responsive-item" id="lineChartDemo"></canvas>
                    </div>
                </div>
        );
    }
}

export default LineChart;

if (document.getElementById('line-chart')) {
    ReactDOM.render(<LineChart />, document.getElementById('line-chart'));
}
