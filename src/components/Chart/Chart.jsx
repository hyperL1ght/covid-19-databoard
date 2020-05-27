import React from 'react'
import {Line} from 'react-chartjs-2'

import styles from './Chart.module.css'

const Chart = ({ data, country, scale }) => {

    const setMax = scale => {
        const arr = data.map(({confirmed}) => confirmed);
        const max = Math.max(...arr);
        if(scale === 'linear') return Math.ceil(max / 1000) * 1000;
        return 1000000000;
    }

    const setTick = scale => {
        if(scale === 'linear') {
            return function(value, index, values){
                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
        }

        return function (value, index, values) {
            if (value === 1000000000) return "1B";
            if (value === 100000000) return "100M";
            if (value === 10000000) return "10M";
            if (value === 1000000) return "1M";
            if (value === 100000) return "100K";
            if (value === 10000) return "10K";
            if (value === 1000) return "1K";
            if (value === 100) return "100";
            if (value === 10) return "10";
            if (value === 0) return "0";
            return null;
        }
    }

    const formatCountryName = country => {
        return country.replace(/-/g, ' ').replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase());
    }

    const testChart = (
        data.length
        ? (<Line
            data={{
                labels: data.map(({date}) => new Date(date).toDateString()),
                datasets: [{
                    data: data.map(({confirmed}) => confirmed),
                    label: 'Infected',
                    borderColor: 'rgba(87, 117, 144, 1)',
                    backgroundColor: 'rgba(87, 117, 144, 0.8)',
                    fill:false
                }, {
                    data: data.map(({recovered}) => recovered),
                    label: 'Recovered',
                    borderColor: 'rgba(129, 178, 154, 1)',
                    backgroundColor: 'rgba(129, 178, 154, 0.8)',
                    fill:false},
                {
                    data: data.map(({deaths}) => deaths),
                    label: 'Deaths',
                    borderColor: 'rgba(249, 65, 68, 1)',
                    backgroundColor: 'rgba(249, 65, 68, 0.8)',
                    fill:false
                }]
            }}
            options={{
                legend: { display: false },
                title: { display: true, text: `Current state in ${formatCountryName(country)}`, fontSize: 20 },
                scales: {
                    yAxes:[{
                        scaleLabel: {
                            display: true,
                            labelString: `Daily Total (${scale} scale)`,
                        },
                        type: `${scale}`,
                        position: 'left',
                        ticks: {
                            min: 0,
                            max: setMax(scale),
                            callback: setTick(scale)
                       }
                    }]
                }
              }}
            />) : null
    );

    return(
        <div className={styles.container}>
            {testChart}
        </div>
    )
}

export default Chart;