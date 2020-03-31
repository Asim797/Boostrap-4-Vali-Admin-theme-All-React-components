import React from 'react';
import ReactDOM from 'react-dom';

class MapCard extends React.Component {

    componentDidMount= async () => {
        let map = window.$('#demo-map');
        map.vectorMap({
            map: 'world_en',
            backgroundColor: '#fff',
            color: '#333',
            hoverOpacity: 0.7,
            selectedColor: '#666666',
            enableZoom: true,
            showTooltip: true,
            scaleColors: ['#C8EEFF', '#006491'],
            values: sample_data,
            normalizeFunction: 'polynomial'
        });
    }

    render() {
        return (
            <div className="tile">
                <h3 className="tile-title">Vector Map</h3>
                <div className="tile-body">
                    <div id="demo-map" style="height: 400px"></div>
                </div>
            </div>
        );
    }
}

export default MapCard;

if (document.getElementById('map-card')) {
    ReactDOM.render(<MapCard />, document.getElementById('map-card'));
}
