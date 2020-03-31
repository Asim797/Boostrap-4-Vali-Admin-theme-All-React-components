import React from 'react';
import ReactDOM from 'react-dom';

class BarChart extends React.Component {

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
        let ctxb = window.$("#barChartDemo").get(0).getContext("2d");
        let barChart = new Chart(ctxb).Bar(data);

    }

    render() {
        return (
            <div className="tile">
                <h3 className="tile-title">Bar Chart</h3>
                <div className="embed-responsive embed-responsive-16by9">
                    <canvas className="embed-responsive-item" id="barChartDemo"></canvas>
                </div>
            </div>
        );
    }
}

export default BarChart;

if (document.getElementById('bar-chart')) {
    ReactDOM.render(<BarChart />, document.getElementById('bar-chart'));
}
